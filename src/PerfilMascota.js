import React, { useState,useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import {Input, Button, Overlay} from 'react-native-elements';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import SolicitarAdop from './SolicitarAdop'
import axios from 'axios';
import { AsyncStorage } from 'react-native';

import {
  
  Text, StyleSheet, Image, View, StatusBar
} from 'react-native';

//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';
const PerfilMascota =({title,route}) =>{
const {name, nombre,gender,tamanio,age,url,peso,descripcion,id}=route.params.animal
const{getAnimals}=route.params
const [visible,setVisible]=useState(false)
const [favorito,setFavorito]=useState(false)
const toggleOverlay = () => {
  setVisible(!visible);
};
const[currentCita,setCurrentCita]=useState(false)

  const getCurrentCita=()=>{
    axios.get("http://10.0.2.2:3001/cita/checkCita/"+id+"/"+"irving@udem.edu").then(res=>{
      setCurrentCita(res.data.cita)
    })
  }
  useEffect(() => {
   getCurrentCita()
   getFavorito()
  }, []);
  
  const getFavorito=()=>{
    axios.get("http://10.0.2.2:3001/pet/favoritos",{
      params:{
       correoPosibleDueno:"irving@udem.edu"
       }}).then((res)=>{
         const filtrado=res.data.filter(mascota =>mascota.id==id)
         setFavorito(filtrado.length>0)
    })
  }
  return (
    <View style={styles.container}>   
          <SolicitarAdop isVisible={visible} idMascota={id} getCurrentCita={getCurrentCita} toggleOverlay={toggleOverlay}></SolicitarAdop>
        <Image style={{width:"100%", height:250, resizeMode:"cover"}} source={{uri:url}} ></Image>
        <View style={{flexDirection:"row", paddingTop:10}}>
            <Text style={styles.titulo}>{name}</Text>
            <Icon name={favorito?"heart":"heart-o"} size={25} color="#EAC56E" style={{position:"absolute", top:10, right:10}} onPress={async ()=>{
            // const user= JSON.parse(await AsyncStorage.getItem("user"))
              const user={
                correo:"irving@udem.edu"
              }
              if(favorito){
                axios.delete("http://10.0.2.2:3001/pet/favorito/"+id+"/"+"irving@udem.edu").then(async(res)=>{
                  getFavorito()
                  getAnimals()
                }).catch(error=>console.log(error))
              }
              else{
                axios.post("http://10.0.2.2:3001/pet/favorito",{
                  correoPosibleDueno: "irving@udem.edu", idMascota:id
                }).then(async(res)=>{
                  getFavorito()
                  getAnimals()
                }).catch(error=>console.log(error))
              }
          }}/>
        </View>
        <View style={{flexDirection:"row", justifyContent:"flex-start",margin:10}}>
             <Icon1 name="location-pin" size={20} color="#000" />
            <Text style={{}}>{nombre}</Text>
        </View >

        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <View style={styles.tarjeta}>
                <Text style={styles.texto}>Edad</Text>
                <Text style={styles.texto}>{age} años</Text>
            </View>
            <View style={styles.tarjeta}>
                <Text style={styles.texto}>Género</Text>
                <Text style={styles.texto}>{gender}</Text>
            </View>
            <View style={styles.tarjeta}>
                <Text style={styles.texto}>Peso</Text>
                <Text style={styles.texto}>{peso}</Text>
            </View>
            <View style={styles.tarjeta}>
                <Text style={styles.texto}>Tamaño</Text>
                <Text style={styles.texto}>{tamanio}</Text>
            </View>
        </View> 
        <View style={{margin:20}}>
           <Text style={styles.descrip}>Descripción</Text>
        </View>
        <View style={{paddingLeft:50, paddingRight:10}}>
           <Text style={styles.descrip}>{'\u2022'}{descripcion}</Text>
           <Text style={styles.descrip}>{'\u2022'+" Cuenta con toda su cartilla de vacunación"}</Text>
           <Text style={styles.descrip}>{'\u2022'+" Es necesaria su esterilización."}</Text>
        </View>
        <View>
        
        <Button  buttonStyle={styles.button} titleStyle={styles.buttonTitle} 
          title="Solicitar Adoptar"
          onPress={()=>setVisible(true)}
          disabled={currentCita}
        />
        </View>
    </View>
  );
} 
// estilo =css, es un objeto js
var styles = {
tarjeta:{
backgroundColor:"#FEFEFD",
borderRadius:10,
padding:10,
width:80,
height:80
},
texto:{
textAlign:"center"
},
 container:{
    flex:1
 },
 
  descrip:{
    fontSize: 16,
    paddingTop:10
  },
 titulo: {
    fontSize: 24,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    fontWeight:"bold"
  },
  button:{
    backgroundColor:"#FFD46F",
    borderRadius:20,
    marginTop:20,
    width:300,
    marginLeft:45,
    marginTop:30,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonTitle:{
    color:"#000000",
    fontSize:18,
  },
 
};

export default PerfilMascota;
import React, { useState, useEffect } from 'react';
import HeaderNav from './HeaderNav';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Foundation';
import IconM from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView, ScrollView} from 'react-native';
import axios from "axios";
import CardCitas from'./CardCitas';
import { AsyncStorage } from 'react-native';



const Citas =({navigation}) =>{
const [citas,setCitas]=useState([])
const getCitas=async()=>{
  const user= JSON.parse(await AsyncStorage.getItem("user"))
  axios.get("http://10.0.2.2:3001/cita/usuario/"+user.correo).then(async(res)=>{
    setCitas(res.data)
    console.log(res.data)
  }).catch(error=>console.log(error))
}
useEffect (()=>{
 getCitas()
},[])
  return (
    <View style={styles.container}>
      <HeaderNav title={"Citas"} navigation={navigation}></HeaderNav>
      <View style={{flexDirection:"row"}}>
        <View>
        
        </View>
      </View>
      <ScrollView keyboardShouldPersistTaps='always'keyboardShouldPersistTaps="always" style={{height:700}} >
       {citas.map(cita=>{
         return  <CardCitas cita={cita} getCitas={getCitas} onPress={()=>navigation.navigate("PerfilMascota",{ animal:{
           name:cita.nombreMascota,
           nombre:cita.nombreSucu,
           gender:cita.genero,
           tamanio:cita.tamanio,
           age:cita.edad,
           url:cita.urlFotoMascota,
           peso:cita.peso,
           descripcion:cita.descripcion,
           id:cita.idMascota
         }
         })}/>
       })}
      
      </ScrollView>
      
        <View style={{flexDirection:"row", marginTop:8}}>
           <IconM  onPress={()=>navigation.navigate("Home")} style={{marginRight:52}} name="ios-home-outline" size={34} color="#3E3E3E"/>
           <Icon style={{marginRight:56}} name="calendar" size={40} color="#FFD46F"/>
           <Icon2  onPress={()=>navigation.navigate("Favoritos")} style={{marginRight:56, marginTop:6}} name="heart-o" size={30} color="#3E3E3E"/>
           <Icon2  onPress={()=>navigation.navigate("PerfilUsuario")} style={{marginRight:11, marginTop:6}} name="user-o" size={30} color="#3E3E3E"/>
        </View>
        <View style={{flexDirection:"row", marginBottom:5}}>
           <Text style={{marginRight:52}}>Inicio</Text>
           <Text style={{marginRight:40}}>Citas</Text>
           <Text style={{marginRight:36}}>Favoritos</Text>
           <Text  style={{marginRight:8}}>Perfil</Text>
        </View>
    </View>
    
  );
}
// estilo =css, es un objeto js
var styles = {
  container:{
      flex:1,
      backgroundColor:"#F3F2EF",
      alignItems:"center"
  },
  innerContainer:{
    flex:1,
    padding:40,
  },
  label:{
    fontSize:20,
    color: "#000000",
  },
  button:{
    backgroundColor:"#FFD46F",
    borderRadius:20,
    marginTop:40,
    width:270
  },
  buttonTitle:{
    color:"#000000",
    fontSize:18,
  },
  text:{
    color:"#000000",
    fontSize:18,
    marginTop:40,
  },
};

export default Citas;
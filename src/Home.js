import React, { useState, useEffect } from 'react';
import HeaderHome from './HeaderHome';
import Card from './Card';
import {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import Icon from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView, ScrollView} from 'react-native';
import axios from "axios";
import consoleFormat from 'emoji-aware/lib/console-format';
import PerfilMascota from './PerfilMascota';



const Home =({navigation}) =>{
  const [animals, setAnimals]=useState([])
  const aplicarFiltros=(filtros)=>{
    //{valueSucursal,valueEdadInf,valueEdadSup,valueMascota,genero,tamanio}
    console.log(filtros)
     axios.get("http://10.0.2.2:3001/pet/filtered",{
       params:{
        sucursal:filtros.valueSucursal ? filtros.valueSucursal:undefined,
      tipo:filtros.valueMascota? filtros.valueMascota:undefined,
      "genero":filtros.genero? filtros.genero:undefined,
      "tamanio":filtros.tamanio? filtros.tamanio:undefined,
      edadSup:filtros.valueEdadSup? filtros.valueEdadSup:undefined,
      edadInf:filtros.valueEdadInf? filtros.valueEdadInf:undefined,
       }
       
     /* 
      */
    }).then((res)=>{
      setAnimals(res.data)
      //setLoading(false);
    })
  }

  useEffect(()=>{
  
      axios.get("http://10.0.2.2:3001/pet/initial").then((res)=>{
        setAnimals(res.data)
        //setLoading(false);
      })
    
  },[])//parte nueva de react
  return (
    <View style={styles.container}>
      <HeaderHome ></HeaderHome>
      <View style={{flexDirection:"row"}}>
        <View>
          <Text style={styles.ti}>Adopta un Amigo</Text>
          <Text style={styles.sub}>Encuentra a tu mascota favorita</Text>
        </View>
        <Icon name="filter" size={25} color="#757574" onPress={()=>navigation.navigate("Filtro",{
          onBack:(filtros)=>aplicarFiltros(filtros)
        })} />
      </View>
      <ScrollView keyboardShouldPersistTaps='always'keyboardShouldPersistTaps={true} style={{height:700}} >
        {animals.map(animal=>{
          return <Card onPress={()=>navigation.navigate("PerfilMascota", {
            animal:animal
          })} key={animal.id} name={animal.name} age={animal.age} gender={animal.gender} url={animal.url} ></Card>
        })}
        </ScrollView>
        <View style={{flexDirection:"row", marginTop:8}}>
           <IconM  style={{marginRight:52}} name="ios-home-sharp" size={34} color="#FFD46F"/>
           <Icon2 style={{marginRight:52}} name="calendar-plus-o" size={33} color="#757574"/>
           <Icon2  style={{marginRight:52}} name="heart-o" size={33} color="#757574"/>
           <Icon2  style={{marginRight:9}} name="user-o" size={34} color="#757574"/>
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
  ti:{
    fontSize:25,
    color:"black",
    fontWeight:"bold",
    textAlign:"center"
  },
  sub:{
    fontSize:20,
    color:"#757574",
    fontWeight:"400",
    textAlign:"center",
    marginTop:10
  },
  container:{
      flex:1,
      backgroundColor:"#F3F2EF",
      alignItems:"center"
  },
  innerContainer:{
    flex:1,
    padding:40,
  },
  input:{
    marginBottom:10,
    marginTop:20,
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
  regis:{
    color:"#C88037",
    textDecorationLine: 'underline'
  }
};

export default Home;
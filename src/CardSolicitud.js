import React, { useState } from 'react';
import Header from './Header';
import {Input, Button} from 'react-native-elements';
import {withoutEmoji} from "emoji-aware";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, Image, View, StatusBar, TouchableOpacity, KeyboardAvoidingView,TouchableWithoutFeedback} from 'react-native';
import axios from 'axios';
import { AsyncStorage } from 'react-native';




const CardSolicitud =({name,age,gender,url,onPress,idMascota,favorito,getAnimals,onPressed}) =>{
  const [loading,setLoading]=useState (false)
  return (
    <View style={styles.container}>
      <Text style={{position:'absolute',top:5,right:5,color:"rgba(47, 47, 47, 0.62)"}}>hace 4 minutos</Text>
      <TouchableOpacity onPress={()=>onPressed()}>
        <Image style={{width:145, height:180, borderRadius:20, resizeMode:"cover"}} source={{uri:url}}  ></Image>
      </TouchableOpacity>
      <View>
        <Text style={{fontSize:18,fontWeight:"bold",marginTop:30}}>Karla Lira</Text>
        <Text style={{fontSize:16,marginTop:10,marginBottom:20}}>Desea adoptar a:</Text>
        <View style={{marginTop:10,justifyContent:"center",alignItems:"center", flexDirection:"row"}}>
        <Text style={styles.regis} >Rechazar</Text>
        <Button buttonStyle={{backgroundColor: "#FFD46F", width:120,height:35, borderRadius:30, textAlign:"center", marginLeft:30}} titleStyle={{color:"#000000"}} title="Aprobar"></Button>
      </View>
      </View>
    </View>
  );
} 
// estilo =css, es un objeto js
var styles = {
  container:{
      flexDirection:"row",
      alignItems:"center",
      backgroundColor:"#FFFFFF",
      borderColor:"#B7B7B7",
      borderRadius:20,
      width:380,
      height:180,
      marginTop:30,
      shadowColor: "#000000",
      shadowOffset: {
          width: 0,
          height: 9,
      },
      shadowOpacity: 1.0,
      shadowRadius: 1.84,
      elevation: 10,
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

export default CardSolicitud;
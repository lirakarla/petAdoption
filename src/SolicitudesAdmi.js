import React, { useState, useEffect } from 'react';
import HeaderAdmi from './HeaderAdmi';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Foundation';
import IconM from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView, ScrollView} from 'react-native';
import axios from "axios";
import CardSolicitud from './CardSolicitud';


const SolicitudesAdmi=({navigation}) =>{
  
  useEffect(()=>{
     
    
  },[])//parte nueva de react
  return (
    <View style={styles.container}>
      <HeaderAdmi title={"Solicitudes"} navigation={navigation}></HeaderAdmi>
      
      <ScrollView keyboardShouldPersistTaps='always'keyboardShouldPersistTaps="always" style={{height:700}} >
        <CardSolicitud></CardSolicitud>
        </ScrollView>
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

export default SolicitudesAdmi;
import React, { useState, useEffect } from 'react';
import HeaderNav from './HeaderNav';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Foundation';
import IconM from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView, ScrollView} from 'react-native';
import axios from "axios";




const PerfilUsuario =({title, navigation}) =>{

  return (
    <View style={styles.container}>
      <HeaderNav></HeaderNav>
      <View style={{flexDirection:"row"}}>
        <View>
        
        </View>
      </View>
      <ScrollView keyboardShouldPersistTaps='always'keyboardShouldPersistTaps={true} style={{height:700}} >
    
        </ScrollView>
        <View style={{flexDirection:"row", marginTop:8}}>
           <IconM  style={{marginRight:52}} name="ios-home-outline" size={34} color="#3E3E3E"/>
           <Icon2 style={{marginRight:52}} name="calendar-plus-o" size={33} color="#757574"/>
           <Icon2  style={{marginRight:56, marginTop:4}} name="heart-o" size={34} color="#3E3E3E"/>
           <Icon2  style={{marginRight:11, marginTop:6}} name="user" size={30} color="#FFD46F"/>
        </View>
        <View style={{flexDirection:"row", marginBottom:5}}>
           <Text style={{marginRight:52}}>Inicio</Text>
           <Text style={{marginRight:44}}>Citas</Text>
           <Text style={{marginRight:36}}>Favoritos</Text>
           <Text  style={{marginRight:6}}>Perfil</Text>
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

export default PerfilUsuario;
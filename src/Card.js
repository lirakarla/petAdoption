import React, { useState } from 'react';
import Header from './Header';
import {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, Image, View, StatusBar, TouchableOpacity, KeyboardAvoidingView,TouchableWithoutFeedback
} from 'react-native';




const Card =({name,age,gender,url,onPress}) =>{
  return (
    <TouchableOpacity style={styles.container}  onPress={()=>onPress()} >
      <Image style={{width:145, height:180, borderRadius:20, resizeMode:"cover"}} source={{uri:url}} ></Image>
      <Icon name="heart-o" size={25} color="#242424" style={{position:"absolute", top:10, right:10}} />
      <View style={{flex:1, justifyContent:"center"}}>
        <Text style={styles.animal}>{name}</Text>
        <Text style={styles.age}>{age}</Text>
        <Text style={styles.gender}>{gender}</Text>
      </View>
    </TouchableOpacity >
    
  );
} 
// estilo =css, es un objeto js
var styles = {
  animal:{
    fontSize:22,
    fontWeight:"600",
    textAlign:"center"
  },
  age:{
    color:"#757574",
    fontSize:18,
    textAlign:"center"
  },
  gender:{
    color:"#757574",
    fontSize:18,
    textAlign:"center",
    fontWeight:"600",
    marginTop:30
  },
  container:{
      flexDirection:"row",
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

export default Card;
import React, { useState,useEffect } from 'react';
import Header from './Header';
import {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView
} from 'react-native';
import { AsyncStorage } from 'react-native';



const Location =({navigation}) =>{
  useEffect(async()=>{
    const location= await AsyncStorage.getItem("location")
    if(location==="true"){
      navigation.navigate("Home")
    }
},[])//parte nueva de react
  return (
    <View style={styles.container}>
      <Image source={require("../src/1.png")} style={{marginTop:30 ,height:480, width:400, resizeMode:"contain"}}></Image>
      <Button  buttonStyle={styles.button} titleStyle={styles.buttonTitle}
       onPress={async()=>{
             navigation.navigate("Home")
             await AsyncStorage.setItem("location","true")
             }}
          title="Permitir"
        />
        <Text style={styles.text}>
           <Text style={styles.regis} onPress={()=>{
             navigation.navigate("Home")
             }}> Saltar </Text>
        </Text>
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

export default Location;
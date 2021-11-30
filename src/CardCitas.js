import React, { useState } from 'react';
import Header from './Header';
import {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import {Text, StyleSheet, Image, View, StatusBar, TouchableOpacity, KeyboardAvoidingView,TouchableWithoutFeedback
} from 'react-native';
import axios from "axios";
import { AsyncStorage } from 'react-native';


const Card =({name,age,gender,url,onPress,cita,getCitas}) =>{
  return (
    <View style={styles.container} >
      <View style={{flexDirection:'row',flex:1}}>
        <TouchableOpacity onPress={()=>onPress()} >
          <Image style={{width:145, height:120, margin:10, borderRadius:20, resizeMode:"cover"}} source={{uri:cita.urlFotoMascota}}></Image>
        </TouchableOpacity>
        <View style={{flex:1, justifyContent:"center"}}>
          <Text style={styles.animal}>{cita.nombreMascota}</Text>
        </View>
      </View>
      <View style={{flex:1.2, marginTop:20, marginRight: 15, marginLeft: 15,borderRadius:20, backgroundColor:"#F8F6F2",justifyContent:"center"}}>
        <View style={{flexDirection:'row', padding:10}}>
          <Icon name="location-outline" size={28} color="#000" style={{alignSelf:"center",marginRight:15}}></Icon>
          <View>
          <Text>{cita.nombreSucu}</Text>
          <Text>{cita.direccion}</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', padding:10}}>
        <Icon name="time-outline" size={28} color="#000" style={{alignSelf:"center",marginRight:15}}></Icon>
        <View>
          <Text>Lunes a Viernes</Text>
          <Text>10:00 am -5:00pm</Text>
        </View>
       </View>
        <View style={{flexDirection:'row', padding:10}}>
          <Icon2 name="phone" size={26} color="#000" style={{alignSelf:"center", marginRight:15}}></Icon2>
          <View style={{justifyContent:"center"}}>
          <Text>+528183487629</Text>
        </View>
        </View>
      </View>
      <View style={{marginBottom:30,marginTop:20,justifyContent:"center",alignItems:"center", flexDirection:"row"}}>
       <Text style={styles.regis} onPress={()=>{
          axios.delete("http://10.0.2.2:3001/cita/estado/"+cita.idCita).then(async(res)=>{
           getCitas()
          })
       }}>Cancelar</Text>
        <Button buttonStyle={{backgroundColor: "#FFD46F", width:160,height:35, borderRadius:30, textAlign:"center", marginLeft:70}} titleStyle={{color:"#000000"}}  onPress={() => {
            axios
              .post('http://10.0.2.2:3001/cita/estado/' + cita.idCita + '/confirmada')
              .then(res => {
                getCitas();
              });
          }}
          disabled={cita.estado==="confirmada"}
           title="Confirmar"></Button>
      </View>
    </View>
    
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
      backgroundColor:"#FFFFFF",
      borderColor:"#B7B7B7",
      borderRadius:20,
      marginBottom:35,
      width:380,
      height:380,
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
    width:270,
    height:30
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
    textDecorationLine: 'underline',
    marginLeft:40
  }
};

export default Card;
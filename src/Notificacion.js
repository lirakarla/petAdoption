import React, { useState,useRef,useCallback,useEffect} from 'react';
import InsideHeaderN from './InsideHeaderN';
//mport {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import { ButtonGroup,Button } from 'react-native-elements';
import ReactNativePickerModule from "react-native-picker-module"
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import NumericInput from 'react-native-numeric-input'
import axios from 'axios';
import { AsyncStorage } from 'react-native';


const Notificacion =({navigation,route}) =>{
const [noti,setNoti]=useState([])
const getNoti=async()=>{
  const user= JSON.parse(await AsyncStorage.getItem("user"))
  axios.get("http://10.0.2.2:3001/cita/notificaciones/"+user.correo).then(async(res)=>{
    setNoti(res.data)
  }).catch(error=>console.log(error))
}
useEffect (()=>{
 getNoti()
},[])
  return (
    <View style={styles.container}>
      <InsideHeaderN route={route} navigation={navigation} title={"Notificaciones"} ></InsideHeaderN>
       <View style={{backgroundColor:"white", width:"80%",height:90,justifyContent:"center",padding:10}}>
         <Text style={{textAlign:"center", fontSize:16,fontWeight:"500"}}>Recuerda confirmar tu cita para recoger a tu nuevo integrante</Text>
       </View>
       {
         noti.map(notificacion=>{
           return (
            <View style={{backgroundColor:"white", width:"80%",height:110,justifyContent:"center",padding:10,marginTop:20, flexDirection:"row", alignItems:"center"}}>
              <Image style={{flex:0.6,width:65,height:65, borderRadius:20}}source={{uri:notificacion.urlFotoMascota}}></Image>
              <Text style={{flex:2,textAlign:"center", fontSize:16,fontWeight:"500",color:"#2F2F2F"}}>Tu solicitud fue aprobada para adoptar a: <Text style={{color:"#2F2F2F",fontWeight:"bold"}} onPress={()=>navigation.navigate("Citas")}>{notificacion.nombreMascota}</Text> </Text>
            </View>
           )
         })
       }
      
    </View>    
  )
} 
// estilo =css, es un objeto js
var styles = {
    boton:{
      backgroundColor:"#FFD46F",
      TextColor:"gray"
      
    },
    dropdown:{
        height:40,
        borderColor:"#F3F2EF",
        TextColor:"#8F8F8F",
        marginTop:10,
        marginBottom:20
    },
  container:{
      flex:1,
      backgroundColor:"#F3F2EF",
      alignItems:"center"
  },
  innerContainer:{
    flex:1,
    padding:90,
  },
  cate:{
    fontSize:18,
    fontWeight:"bold",
    paddingTop:18
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

export default Notificacion;
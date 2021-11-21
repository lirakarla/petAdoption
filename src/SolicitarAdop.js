import React, { useState } from 'react';
import {Input, Button,Overlay} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, Image, View, StatusBar, TouchableOpacity, KeyboardAvoidingView,TouchableWithoutFeedback} from 'react-native';
import axios from 'axios';
import { AsyncStorage } from 'react-native';


const SolicitarAdop=({isVisible,toggleOverlay}) =>{
  const [loading,setLoading]=useState (false)
  return (
    <Overlay isVisible={isVisible} onBackdropPress={toggleOverlay} overlayStyle={{width:"95%",height:"50%",padding:30,borderRadius:30}}>
        <View style={{flexDirection:"row",  alignItems:"center", marginRight:20}}>
            <Icon style={{marginRight:20}} name="user-circle" size={44} color="#FFD46F"/>
            <Text style={{fontSize:22, fontWeight:"bold", color:"#242424"}}>Irving Cruz</Text>
        </View>
        <Text style={{fontSize:14, marginTop:10, color:"rgba(36,36,36,0.58)"}}>Estoy de acuerdo con que se analizará mi perfil para la aprobación de la adopción solicitada.</Text>
        <Text style={{fontSize:18, fontWeight:"500", marginTop:20, color:"#242424"}}>Fotos del Espacio</Text>
        <Button  buttonStyle={styles.button} titleStyle={styles.buttonTitle} 
          title="Enviar Solicitud"
          onPress={()=>setVisible(true)}
        />
    </Overlay>
  );
} 
// estilo =css, es un objeto js
var styles = {

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
    width:200
  },
  buttonTitle:{
    color:"#000000",
    fontSize:18,
  },
}

export default SolicitarAdop;
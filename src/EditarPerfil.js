import React, { useState,useRef,useCallback} from 'react';
import InsideHeader from './InsideHeader';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import { ButtonGroup,Button,Input } from 'react-native-elements';
import ReactNativePickerModule from "react-native-picker-module"
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import NumericInput from 'react-native-numeric-input'
import axios from 'axios';
import IconM from 'react-native-vector-icons/Ionicons';

const EditarPerfil =({navigation,route}) =>{

  return (
    <View style={styles.container}>
      <InsideHeader route={route} navigation={navigation} title={"Editar Perfil"} accion={"cancelar"}></InsideHeader>
        <View style={{alignSelf:"center"}}>
             <IconM name="person-circle" size={120} color="#EAC56E" />
        </View>

        <View  style={{alignSelf:"flex-start", marginLeft:20}}>
           <View style={{flexDirection: 'row', justifyContent:"flex-start"}}>
              <Text style={styles.cate}>Nombre</Text>
              <View style={{width:190}}>
              <Input inputStyle={styles.input} 
                 placeholder='nombre y apellido'
              />
            </View>
            
          </View>
           
            <Text style={styles.cate}>Fecha de Nacimiento</Text>
            <Text style={styles.cate}>Ocupación</Text>
            <Text style={styles.cate}>Tipo de Vivienda</Text>
            <Text style={styles.cate}>¿Porqué quier una mascota?</Text>
        </View>
    </View>
    
  );
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
    fontSize:16,
    fontWeight:"500",
    marginRight:50,
    alignSelf:"center"
  },
 
  text:{
    color:"#000000",
    fontSize:18,
    marginTop:40,
  },
  regis:{
    color:"#C88037",
    textDecorationLine: 'underline'
  },
   input:{
    marginRight:20,
    fontSize:14,
    color: "red",
  },
};

export default EditarPerfil;
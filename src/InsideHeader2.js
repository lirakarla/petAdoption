import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { AsyncStorage } from 'react-native';
import {
  
  Text, StyleSheet, Image, View, StatusBar
} from 'react-native';

//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';
const InsideHeader2 =({title,accion, navigation, filtrado,route}) =>{
 
  return (
    <View style={styles.header}>   
    <StatusBar
    animated={true}
    backgroundColor="#FDFCFB"
    barStyle={'dark-content'}
    showHideTransition={'none'}
    hidden={false} />

     <View style={{flexDirection:'row',alignItems:"center"}} >
            <Text style={styles.headerTitulo}>{title}</Text>
            <Text style={styles.link}  onPress={()=>{
               navigation.navigate("PerfilUsuario")
            }}>{accion} </Text>
      </View>
    </View>
  );
} 
// estilo =css, es un objeto js
var styles = {
  link:{
    fontSize: 14,
    color:  '#C88037',
    textAlign:"center",
    fontWeight:"600",
    textDecorationLine: 'underline',
    marginLeft:50
  },
  header:{
      backgroundColor: "#FDFCFB",
      height: 70,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      shadowColor: "#000000",
      width:"100%",
      marginBottom:15,
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 1.0,
    shadowRadius: 1.84,
    elevation: 10,
  },
  headerTitulo: {
    fontSize: 25,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    marginLeft:130,
    color: '#000000',
    fontWeight:"bold"
  },
 
};

export default InsideHeader2;

import React from 'react';

import {Text, StyleSheet, Image, View, StatusBar} from 'react-native';
import { AsyncStorage } from 'react-native';


//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';
const Header =({title}) =>{
  
  return (
    <View style={styles.header}>   
    <StatusBar
    animated={true}
    backgroundColor="#EAC56E"
    barStyle={'dark-content'}
    showHideTransition={'none'}
    hidden={false} />
    <Text style={styles.headerTitulo}>{title}</Text>
    </View>
  );
} 
// estilo =css, es un objeto js
var styles = {
  header:{
      backgroundColor: "#EAC56E",
      height: 100,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 1.0,
    shadowRadius: 1.84,
    elevation: 10,
  },
  headerTitulo: {
    fontSize: 34,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    fontWeight:"bold"
  },
 
};

export default Header;

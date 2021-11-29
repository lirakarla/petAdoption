import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackActions } from '@react-navigation/native';

import {
  
  Text, StyleSheet, Image, View, StatusBar
} from 'react-native';

//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';
const HeaderHome =({title,navigation}) =>{
  
  return (
    <View style={styles.header}>   
    <StatusBar
    animated={true}
    backgroundColor="#EAC56E"
    barStyle={'dark-content'}
    showHideTransition={'none'}
    hidden={false} />
    <Text style={styles.ubicacion}>{"Ubicación"}</Text>

     <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:"center", paddingRight:10}} >

        <View style={{height:20,width:20}}>
        </View>

        <View style={{height:50,width:250}}>
          <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <Icon name="location-pin" size={20} color="#000" />
            <Text style={styles.headerTitulo}>{"Monterrey, N.L"}</Text>
         </View>
        </View>
        
        <View style={{height:20,width:20}}>
          <IconMaterial name="bell-ring-outline" size={20} color="#000" style={{alignSelf:"center"}}  
          onPress={()=> {
            const pushAction = StackActions.push('Notificacion'); 
            navigation.dispatch(pushAction)
          }}>
          </IconMaterial>
        </View>
      </View>
    </View>
  );
} 
// estilo =css, es un objeto js
var styles = {
  ubicacion:{
    fontSize: 16,
    color:  '#6C6B6B',
    textAlign:"center",
    fontWeight:"600"
  },
  header:{
      backgroundColor: "#EAC56E",
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
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    fontWeight:"bold"
  },
 
};

export default HeaderHome;

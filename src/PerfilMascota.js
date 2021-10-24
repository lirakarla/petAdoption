import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  
  Text, StyleSheet, Image, View, StatusBar
} from 'react-native';

//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';
const PerfilMascota =({title}) =>{
  
  return (
    <View style={styles.container}>   
         <Image style={{width:"100%", height:250, resizeMode:"cover"}} source={{uri:"https://petsbioforestal.es/wp-content/uploads/2020/02/cuanto-vive-conejo.jpg"}} ></Image>
        <View style={{flexDirection:"row", paddingTop:10}}>
            <Text style={styles.titulo}>Conejo mix</Text>
            <Icon name="heart-o" size={25} color="#242424" style={{position:"absolute", top:10, right:10}} />
        </View>
        <View style={{flexDirection:"row", justifyContent:"flex-start",margin:10}}>
             <Icon1 name="location-pin" size={20} color="#000" />
            <Text style={{}}>Petco Gonzalitos</Text>
        </View >

        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <View style={styles.tarjeta}>
                <Text style={styles.texto}>Edad</Text>
                <Text style={styles.texto}>3</Text>
            </View>
            <View style={styles.tarjeta}>
                <Text style={styles.texto}>Edad</Text>
                <Text style={styles.texto}>3</Text>
            </View>
            <View style={styles.tarjeta}>
                <Text style={styles.texto}>Edad</Text>
                <Text style={styles.texto}>3</Text>
            </View>
            <View style={styles.tarjeta}>
                <Text style={styles.texto}>Edad</Text>
                <Text style={styles.texto}>3</Text>
            </View>
        </View>
    </View>
  );
} 
// estilo =css, es un objeto js
var styles = {
tarjeta:{
backgroundColor:"red",
borderRadius:10,
padding:10,
width:80,
height:80
},
texto:{
textAlign:"center"
},
 container:{
    flex:1
 },
  link:{
    fontSize: 14,
    color:  '#C88037',
    textAlign:"center",
    fontWeight:"600",
    textDecorationLine: 'underline'
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
 titulo: {
    fontSize: 24,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    fontWeight:"bold"
  },
 
};

export default PerfilMascota;
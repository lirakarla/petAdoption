import React, {useState, useEffect} from 'react';
import HeaderNav from './HeaderNav';
import {Input, Button} from 'react-native-elements';
import IconOcupacion from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from 'react-native';
import {
  Text,
  StyleSheet,
  Image,
  View,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import axios from 'axios';

const PerfilUsuario = ({navigation}) => {
  const [perfil, setPerfil] = useState(null)

  const getPerfil=async()=>{
    const user= JSON.parse(await AsyncStorage.getItem("user"))
    axios.get("http://10.0.2.2:3001/user/perfil/"+user.correo).then((res)=>{
      setPerfil(res.data)
      //setLoading(false);
    })
  }

  useEffect(()=>{
    getPerfil()
  
},[])//parte nueva de react
if(perfil==null){
  return <View></View>
}
else if(!perfil.nombre){
  navigation.navigate("EditarPerfil")
}
  return (
    <View style={styles.container}>
      <HeaderNav title="Perfil" navigation={navigation}></HeaderNav>
      <View style={{flexDirection:"row", justifyContent:"flex-start"}}>
        <Text style={styles.regis} onPress={async()=>{
          await AsyncStorage.removeItem("user")
          navigation.navigate("Login")
          }}>Cerrar Sesión</Text>
        <Text style={styles.regis2} onPress={()=>navigation.navigate("EditarPerfil",{
          getPerfil,
          perfil
          })}>Editar</Text>
      </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <IconM name="person-circle" size={100} color="#EAC56E" />
          <Text style={styles.label}>{perfil.nombre}</Text>
          <Text style={styles.text}>{perfil.edad} años</Text>
        </View>
        <View style={{alignSelf:"flex-start",marginLeft:20,marginTop:20}}>
          <View style={{flexDirection: 'row', padding: 8, justifyContent:"flex-start"}}>
            <IconOcupacion
              name="work"
              size={20}
              color="#3E3E3E"
              style={{alignSelf: 'center', marginRight: 15}}></IconOcupacion>
              <Text style={styles.textOptions}>{perfil.profesion}</Text>
          </View>
          <View style={{flexDirection: 'row', padding: 8}}>
            <IconM
              name="home-sharp"
              size={20}
              color="#3E3E3E"
              style={{alignSelf: 'center', marginRight: 15}}></IconM>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.textOptions}>{perfil.vivienda}</Text>
            </View>
          </View>
          <Text style={{marginTop:30,fontWeight:"600",marginLeft:15, fontSize:16}}>¿Porqué quiero una mascota?</Text>
          <View style={{flex:0.5,marginTop:20, borderRadius:20, backgroundColor:"#E5E5E5",width:350,heigth:800}}>
          <Text style={{margin:9}}>{perfil.descripcion}</Text>
          </View>
        </View>


      <View style={{flexDirection: 'row', position: "absolute",bottom:40,marginTop:8}}>
        <IconM
          onPress={() => navigation.navigate('Home')}
          style={{marginRight: 52}}
          name="ios-home-outline"
          size={34}
          color="#3E3E3E"
        />
        <Icon2
          onPress={() => navigation.navigate('Citas')}
          style={{marginRight: 52}}
          name="calendar-plus-o"
          size={33}
          color="#757574"
        />
        <Icon2
          onPress={() => navigation.navigate('Favoritos')}
          style={{marginRight: 56, marginTop: 4}}
          name="heart-o"
          size={34}
          color="#3E3E3E"
        />
        <Icon2
          style={{marginRight: 11, marginTop: 6}}
          name="user"
          size={30}
          color="#FFD46F"
        />
      </View>
      <View style={{flexDirection: 'row', marginBottom: 5, position: "absolute",bottom:10}}>
        <Text style={{marginRight: 52}}>Inicio</Text>
        <Text style={{marginRight: 44}}>Citas</Text>
        <Text style={{marginRight: 36}}>Favoritos</Text>
        <Text style={{marginRight: 6}}>Perfil</Text>
      </View>
    </View>
  );
};
// estilo =css, es un objeto js
var styles = {
  container: {
    flex: 1,
    backgroundColor: '#F3F2EF',
    alignItems: 'center',
  },

  label: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFD46F',
    borderRadius: 20,
    marginTop: 40,
    width: 270,
  },
  textOptions:{
    color: '#000000',
    fontSize: 16,
  },
  text: {
    color: '#3E3E3E',
    fontSize: 18,
    marginTop: 5,
  },
  regis: {
    color: '#C88037',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 'bold',

  },
  regis2: {
    color: '#C88037',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:"50%"
  },
};
export default PerfilUsuario;

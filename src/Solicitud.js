import React, {useState, useEffect} from 'react';
import HeaderAdmi2 from './HeaderAdmi2';
import {Input, Button} from 'react-native-elements';
import IconOcupacion from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
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

const Solicitud = ({navigation}) => {
  const [perfil, setPerfil] = useState(null)

  const getPerfil=()=>{
    const user={
      correo:"irving@udem.edu"
    }
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
  return (
    <View style={styles.container}>
      <HeaderAdmi2 title={"Solicitud"} navigation={navigation}></HeaderAdmi2>
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
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                 <Image style={{marginTop:20,width:100,height:100}} source={{uri:"https://www.berdinodiaz.com/wp-content/uploads/2019/05/errores-en-patios-delanteros.jpg"}}></Image>
                 <Image style={{marginTop:20,width:100,height:100}} source={{uri:"https://www.berdinodiaz.com/wp-content/uploads/2019/05/errores-en-patios-delanteros.jpg"}}></Image>
                 <Image style={{marginTop:20,width:100,height:100}} source={{uri:"https://www.berdinodiaz.com/wp-content/uploads/2019/05/errores-en-patios-delanteros.jpg"}}></Image>
            </View>
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
    marginLeft: '85%',
  },
};
export default Solicitud;

import React, { useState } from 'react';
import Header from './Header';
import {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {
  
  Text, StyleSheet, Image, View, StatusBar
} from 'react-native';

//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';
const loginBack=(correo, contrasena) =>{
  return new Promise((resolve, reject)=>{
    //simula back
    setTimeout(()=>{
      resolve(false)
    }, 2000)
  })
}
const Login =({navigation}) =>{
  const [loading,setLoading] = useState(false);
  const [correo,setCorreo] = useState(false);
  const [contrasena,setContrasena] = useState(false);
  const [errorMessage, setErrorMessage] =useState("");

  const loginPressed=()=>{
    setLoading(true);
    if(!validateEmail(correo)){
      console.log(correo)
      setErrorMessage("Invalid Email") //variables internas
      setLoading(false)
      return
    }
    loginBack(correo, contrasena).then(result=>{
      navigation.navigate("Location")
      setLoading(false)
      setErrorMessage("Invalid Credential")
    })
  }

  const validateEmail=(email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  const onInputCorreoChanged=(string)=>{
    setCorreo(string);
  }

  const onInputContrasenaChanged=(string)=>{
    setContrasena(string);
  }

  return (
    <View style={styles.container}>   
      <Header title={"Iniciar Sesión"}> </Header>
      <View style={styles.innerContainer}>
        <Input containerStyle={styles.input} labelStyle={styles.label} onChangeText={onInputCorreoChanged} errorMessage={errorMessage==="Invalid Email"?"Ingrese un correo válido":""} 
          label="Correo"
          placeholder='user@email.com'
        />
        <Input secureTextEntry={true}  labelStyle={styles.label}  containerStyle={styles.input} onChangeText={onInputContrasenaChanged} errorMessage={errorMessage==="Invalid Credential"?"El correo y la contraseña no coinciden":""} 
          label="Correo"
          label="Contraseña"
          placeholder='********'
        />
         <Button loading={loading}  buttonStyle={styles.button} titleStyle={styles.buttonTitle} onPress={loginPressed}
          title="Iniciar Sesión"
        />
        <Text style={styles.text}>
           <Text > ¿Aún no tienes cuenta? </Text>
           <Text style={styles.regis} onPress={()=>navigation.navigate("Signup")}> Regístrate </Text>
        </Text>
      </View>
    </View>
  );
} 
// estilo =css, es un objeto js
var styles = {
  container:{
      flex:1
  },
  innerContainer:{
    flex:1,
    padding:40,
  },
  input:{
    marginBottom:30,
    marginTop:30,
  },
  label:{
    fontSize:24,
    color: "#000000",
  },
  button:{
    backgroundColor:"#FFD46F",
    borderRadius:20,
    marginTop:20,
  },
  buttonTitle:{
    color:"#000000",
    fontSize:18,
  },
  text:{
    color:"#000000",
    fontSize:18,
    marginTop:100,
  },
  regis:{
    color:"#C88037",
    textDecorationLine: 'underline'
  }
};

export default Login;

import React, { useState } from 'react';
import Header from './Header';
import {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView,AsyncStorage} from 'react-native';
import axios from "axios";
//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';

const Login =({navigation}) =>{
  const [loading,setLoading] = useState(false);
  const [correo,setCorreo] = useState(false);
  const [contrasena,setContrasena] = useState(false);
  const [errorMessage, setErrorMessage] =useState("");
  const [errorType, setErrorType] =useState("");

  const loginPressed=()=>{
    setLoading(true);
    if(!validateEmail(correo)){
      console.log(correo)
      setErrorMessage("Invalid Email") //variables internas
      setLoading(false)
      return
    }
    else {
      //SIMULACIÓN DEBERIA SER AXIOS
          setLoading(true);
          axios.post("http://10.0.2.2:3001/user/login",{
            correo: correo, contrasenia:contrasena
          }).then(async(res)=>{
            console.log(res.status)
            setLoading(false);
            navigation.navigate("Location")
            //libreria para guardar info del usuario
            await AsyncStorage.setItem("user", JSON.stringify(res.data.login))
          
          })
          .catch(error=>{
            console.log(error.response)
            if(error.response.status===400){
              setErrorMessage("Correo o contraseña incorrectos")
              setErrorType("reapited")
              console.log(error.response.status)
              setLoading(false);
            }
         })
        }
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
          label="Contraseña"
          placeholder='********'
        />
         <Text>{errorType==="reapited"?errorMessage:""} </Text>
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

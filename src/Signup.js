import React, { useState,useEffect } from 'react';
import Header from './Header';
import axios from "axios";
import {useHistory} from "react-router-dom";
import {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView,AsyncStorage} from 'react-native';


//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';

const Signup =({navigation}) =>{
  const [loading,setLoading] = useState(false);
  const [correo,setCorreo] = useState("");
  const [contrasena,setContrasena] = useState("");
  const [confirmContrasena,setConfirmContrasena] = useState("");
  const [errorType, setErrorType] =useState("");
  const [errorMessage, setErrorMessage] =useState("");

  const loginPressed=(values)=>{
    if(!validateEmail(correo)){
      return setErrorMessage("Ingrese un correo válido")
      
    }
    else if(contrasena.length<5 || contrasena!==withoutEmoji(contrasena).join("")){
      return  setErrorType("Invalid Password")
    }
    else if(contrasena!==confirmContrasena){
      return setErrorType("Invalid Confirmation")
  
    }
    else {
    //SIMULACIÓN DEBERIA SER AXIOS
        setLoading(true);
        axios.post("http://10.0.2.2:3001/user/register",{
          correo: correo, contrasenia:contrasena, confirmacionContrasenia:confirmContrasena
        }).then(async(res)=>{
          setLoading(false);
          navigation.navigate("Location")
          //libreria para guardar info del usuario
          await AsyncStorage.setItem("user", JSON.stringify(res.data))
        
        })
        .catch(error=>{
          if(error.response.status===401){
            setErrorMessage("Correo ya existente")
            setErrorType("reapited")
          }
          else if(error.response.status===400){
            setErrorMessage("La confirmación de contraseña no coincide. ")
          }
          else{
            setErrorMessage("Hay un problema, por favor de intentar más tarde")
          }
          setLoading(false);
       })
      }
  }
  useEffect(async()=>{
    const user= JSON.parse(await AsyncStorage.getItem("user"))
    if(user.correo==="admin@huella.com"){
      navigation.navigate("SolicitudesAdmi")
    }
    else if(user){
      navigation.navigate("Location")
    }
},[])//parte nueva de react

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

  const onInputConfirmContrasenaChanged=(values)=>{
    setConfirmContrasena(values);
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : undefined}
    style={styles.container}
    keyboardVerticalOffset={100}
  >
      <Header title={"Registrarse"}> </Header>
      <View style={styles.innerContainer}>
        <Input containerStyle={styles.input} labelStyle={styles.label} onChangeText={onInputCorreoChanged} errorMessage={errorType==="Invalid Email"?errorMessage:""} 
          label="Correo"
          placeholder='user@email.com'
        />
        <Input secureTextEntry={true}  labelStyle={styles.label}  containerStyle={styles.input} onChangeText={onInputContrasenaChanged} errorMessage={errorType==="Invalid Password"?"La contraseña debe ser minímo 5 caracteres y no incluir caracteres especiales":""} 
          label="Contraseña"
          placeholder='********'
        />
         <Input secureTextEntry={true}  labelStyle={styles.label}  containerStyle={styles.input} onChangeText={onInputConfirmContrasenaChanged} errorMessage={errorType==="Invalid Confirmation"?"Las contraseñas no coinciden":""} 
          label="Confirmar contraseña"
          placeholder='********'
        />
        <Text style={styles.aviso}>{errorType==="reapited"?errorMessage:""}</Text>
         <Button loading={loading}  buttonStyle={styles.button} titleStyle={styles.buttonTitle} onPress={loginPressed}
          title="Registrarse"
        />
        <Text style={styles.text}>
           <Text> ¿Ya tienes una cuenta? </Text>
           <Text style={styles.regis} onPress={()=>navigation.navigate("Login")}> Inicia Sesión </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
} 
// estilo =css, es un objeto js
var styles = {
  aviso:{
    color:"red"
  },
  container:{
      flex:1
  },
  innerContainer:{
    flex:1,
    padding:40,
  },
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
    marginTop:10,
  },
  buttonTitle:{
    color:"#000000",
    fontSize:18,
  },
  text:{
    color:"#000000",
    fontSize:18,
    marginTop:60,
  },
  regis:{
    color:"#C88037",
    textDecorationLine: 'underline'
  }
};

export default Signup;
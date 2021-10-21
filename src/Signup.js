import React, { useState } from 'react';
import Header from './Header';
import {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import {
  
  Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView
} from 'react-native';

//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';
const signupBack=(correo, contrasena) =>{
  return new Promise((resolve, reject)=>{
    //simula back
    setTimeout(()=>{
      resolve(false)
    }, 2000)
  })
}
const Signup =({navigation}) =>{
  const [loading,setLoading] = useState(false);
  const [correo,setCorreo] = useState("");
  const [contrasena,setContrasena] = useState("");
  const [confirmContrasena,setConfirmContrasena] = useState("");
  const [errorType, setErrorType] =useState("");
  const [errorMessage, setErrorMessage] =useState("");

  const loginPressed=()=>{
    setLoading(true);
    if(!validateEmail(correo)){
      console.log(correo)
      setErrorType("Invalid Email") //variables internas
      setErrorMessage("Ingrese un correo válido")
      setLoading(false)
      return
    }
    if(contrasena.length<5 || contrasena!==withoutEmoji(contrasena).join("")){
        setErrorType("Invalid Password")
        setLoading(false)
        return
    }
    if(contrasena!==confirmContrasena){
        setErrorType("Invalid Confirmation")
        setLoading(false)
        return
    }
    //SIMULACIÓN DEBERIA SER AXIOS
    signupBack(correo, contrasena).then(result=>{
      navigation.navigate("Home")
      //mensajes del catch
      setLoading(false)
      setErrorType("Invalid Email")
      //ME REGRESA EL BACK 409
      setErrorMessage("Ya existe un usuario con ese correo")
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

  const onInputConfirmContrasenaChanged=(string)=>{
    setConfirmContrasena(string);
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
         <Button loading={loading}  buttonStyle={styles.button} titleStyle={styles.buttonTitle} onPress={loginPressed}
          title="Registrarse"
        />
        <Text style={styles.text}>
           <Text > ¿Ya tienes una cuenta? </Text>
           <Text style={styles.regis} onPress={()=>navigation.navigate("Login")}> Inicia Sesión </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
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
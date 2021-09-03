import React from 'react';
import Header from './Header';
import {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {
  
  Text, StyleSheet, Image, View, StatusBar
} from 'react-native';

//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';
const Login =() =>{
  
  return (
    <View style={styles.container}>   
      <Header title={"Iniciar Sesión"}> </Header>
      <View style={styles.innerContainer}>
        <Input containerStyle={styles.input} labelStyle={styles.label}
          label="Correo"
          placeholder='user@email.com'
        />
        <Input secureTextEntry={true}  labelStyle={styles.label}  containerStyle={styles.input}
          label="Contraseña"
          placeholder='********'
        />
         <Button  buttonStyle={styles.button} titleStyle={styles.buttonTitle}
          title="Iniciar Sesión"
        />
        <Text style={styles.text}>
           <Text > ¿Aún no tienes cuenta? </Text>
           <Text style={styles.regis}> Regístrate </Text>
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

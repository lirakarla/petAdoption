import React,{Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  
  Text, StyleSheet, Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';
class SplashScreeen extends Component{
  
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
  render(){
    return(
      <LinearGradient colors={['#F8F6F2', '#FCDBBA', '#FFD46F']} style={styles.linearGradient}>
      
        <Text style={styles.nombre}>
          Pet Adoption
        </Text>
        <Text style={styles.buttonText}>
          Encuentra a tu mejor amigo
        </Text>
      </LinearGradient>
    )
  }
} 
// estilo =css, es un objeto js
var styles = {
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent:"center",
    paddingBottom: 70
  },
  nombre:{
    fontSize: 38,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    fontWeight:"bold"
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#9D8F6D',
    backgroundColor: 'transparent',
    fontWeight:"bold"
  },
  logo:{
    width: 200,
    height: 200,
    marginBottom:30
  }
};




export default SplashScreeen;
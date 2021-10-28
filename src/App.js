import React,{Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  
  Text, StyleSheet, Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//para el color gradiente
import LinearGradient from 'react-native-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreeen from './SplashScreeen';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Location from './Location';
import Filtro from './Filtro';
import InsideHeader from './InsideHeader';
import PerfilMascota from './PerfilMascota';
const Stack = createNativeStackNavigator();

class App extends Component{
  
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        
       
        
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Filtro" component={Filtro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="PerfilMascota" component={PerfilMascota} />
          <Stack.Screen name="InsideHeader" component={InsideHeader} />
        </Stack.Navigator>
      </NavigationContainer>
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




export default App;

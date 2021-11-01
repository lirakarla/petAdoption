/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import App from './src/App';
import Home from './src/Home';
import Login from './src/Login';
import {name as appName} from './app.json';
import Signup from './src/Signup';
import Location from './src/Location';
import Filtro from './src/Filtro'
import PerfilMascota from './src/PerfilMascota'
AppRegistry.registerComponent(appName, () => App);
SplashScreen.hide();


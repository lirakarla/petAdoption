/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
//import App from './src/App';
import Login from './src/Login';
import {name as appName} from './app.json';
import Signup from './src/Signup';
import Location from './src/Location';
import Home from './src/Home';
AppRegistry.registerComponent(appName, () => Home);
SplashScreen.hide();


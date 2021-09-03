/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
//import App from './src/App';
import Login from './src/Login';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => Login);
SplashScreen.hide();


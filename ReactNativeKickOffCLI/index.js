/**
 * @format
 * 
 * index.js is the main entry point for the JavaScript code. For the project it serves as the starting file where app is
 * registered with React Native framework. It is essential in setting up root component and initialising the app.
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/*
Below code, is very important piece of React Native app's startup process. It is telling React Native which component to
render as the main entry point of the app. For example here we are registering component named App under key appName which
is mapped to a string value in app.json file. This ensures component App will be rendered as the entry point of the
application on both iOS and Android.

AppRegistry
AppRegistry is a module in React Native and it is responsible for managing the lifecycle of root component. AppRegistry
acts as a bridge between the JavaScript code and the native iOS and Android environments, helping React Native apps render
the main component on both platforms.
*/
AppRegistry.registerComponent(appName, () => App);

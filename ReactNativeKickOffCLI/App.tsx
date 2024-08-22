/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Alert, Button, SafeAreaView, Text, View } from 'react-native';
import WelcomePoster from './components/WelcomePoster';
import CustomButton from './components/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import WelcomePage from './screens/WelcomePage';

/*
For Button, color for iOS is applied to the title, whereas for android it applies to background.
*/
export type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/*
While creating navigation stack it was observed that if inside NavigationContainer, SafeAreaView is put, then build won't
show any issues and app will also launch, however app will show blank screen. Once SafeAreaView is removed and placed to
individual screens which are part of navigation stack then it works fine.
*/
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomePage}
          />
          <Stack.Screen
            name='Welcome'
            component={WelcomePage}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

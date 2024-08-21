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

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
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
     </SafeAreaView>
    </NavigationContainer>
    
  );
}

export default App;

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
import ButtonsPage from './screens/ButtonsPage';
import FlatListPage from './screens/FlatListPage';
import FlexPage from './screens/FlexPage';

/*
This type will be used further to create native stack navigator using createNativeStackNavigator and it is supposed to
have view part of navigation stack.
TODO: Explore this more, for a large app do all views need to be added here or one can have multiple stacks also created.
*/
export type RootStackParamList = {
  HomePage: undefined;
  WelcomePage: undefined;
  ButtonsPage: undefined;
  FlexPage: undefined;
  FlatListPage: undefined;
};

/*
Here we are creating a stack navigator using popular library @react-navigation/native-stack. Function createNativeStackNavigator
from library @react-navigation/native-stack creates a stack navigator. Stack navigator organises screens in a stack such
that it allows user to navigate back to previous screens and maintain a navigation history for user interaction.
RootStackParamList is a TypeScript type defining each screen name on stack and type of parameters expected by each screen
on the stack.
*/
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
            name='HomePage'
            component={HomePage}
          />
          <Stack.Screen
            name='WelcomePage'
            component={WelcomePage}
          />
          <Stack.Screen
            name='ButtonsPage'
            component={ButtonsPage}
          />
          <Stack.Screen
            name='FlexPage'
            component={FlexPage}
          />
          <Stack.Screen
            name='FlatListPage'
            component={FlatListPage}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
export

export here is a declaration which is used to export values from a JavaScript module/file. Exported values then can be
imported from other modules/files by using import declaration. One can export functions, objects or components and use
by importing at other place.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
*/
export default App;

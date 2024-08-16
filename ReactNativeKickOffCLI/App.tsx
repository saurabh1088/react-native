/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import WelcomePoster from './components/WelcomePoster';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <WelcomePoster name='Batman' tagline='Because, I am BATMAN'/>
    </SafeAreaView>
  );
}

export default App;

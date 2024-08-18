/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import WelcomePoster from './components/WelcomePoster';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={{padding: 16}}>
        <WelcomePoster name='Batman' tagline='Because, I am BATMAN'/>
      </View>
    </SafeAreaView>
  );
}

export default App;

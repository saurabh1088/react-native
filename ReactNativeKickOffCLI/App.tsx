/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Alert, Button, SafeAreaView, Text, View } from 'react-native';
import WelcomePoster from './components/WelcomePoster';

/*
For Button, color for iOS is applied to the title, whereas for android it applies to background.
*/
function App(): React.JSX.Element {
  const showAlert = () => {
    Alert.alert("Pressed button one")
  }

  function showAnotherAlert() {
    Alert.alert("Pressed button two")
  }

  return (
    <SafeAreaView>
      <View style={{padding: 16}}>
        <WelcomePoster name='Batman' tagline='Because, I am BATMAN'/>
        <View style={{flexDirection: 'row'}}>
          <Button 
            onPress={showAlert} 
            title='Button One'
            color={'red'}
          />
          <Button 
            onPress={showAnotherAlert} 
            title='Button Two'
            color={'green'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;

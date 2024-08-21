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

  function showAlertForCustomButton() {
    Alert.alert("Pressed custom button")
  }

  return (
    <NavigationContainer>
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
          <CustomButton title='Custom Button' onPress={showAlertForCustomButton}/>
        </View>
     </SafeAreaView>
    </NavigationContainer>
    
  );
}

export default App;

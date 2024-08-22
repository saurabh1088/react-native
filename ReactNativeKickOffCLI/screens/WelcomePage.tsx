import { View, Button, Alert } from "react-native"
import WelcomePoster from "../components/WelcomePoster"
import CustomButton from "../components/CustomButton"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

export type WelcomePageNavigationProp = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomePage = ({navigation}: WelcomePageNavigationProp) => {
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
          <CustomButton title='Custom Button' onPress={showAlertForCustomButton}/>
        </View>
      </SafeAreaView>
    )
}

const showAlert = () => {
    Alert.alert("Pressed button one")
}

function showAnotherAlert() {
    Alert.alert("Pressed button two")
}

function showAlertForCustomButton() {
    Alert.alert("Pressed custom button")
}

export default WelcomePage;

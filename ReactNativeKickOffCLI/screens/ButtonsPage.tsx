import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"
import { View, Button, Alert, SafeAreaView } from "react-native";
import CustomButton from "../components/CustomButton";

type ButtonsPageNavigationProp = NativeStackScreenProps<RootStackParamList, 'ButtonsPage'>;

const ButtonsPage = ({navigation}: ButtonsPageNavigationProp) => {
    return (
        <SafeAreaView>
          <View style={{padding: 16}}>
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

export default ButtonsPage;
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"
import { View, Button, Alert } from "react-native";
import CustomButton from "../components/CustomButton";

type ButtonsPageNavigationProp = NativeStackScreenProps<RootStackParamList, 'Buttons'>;

const ButtonsPage = ({navigation}: ButtonsPageNavigationProp) => {
    return (
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
            <CustomButton title='Custom Button' onPress={showAlertForCustomButton}/>
          </View>
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
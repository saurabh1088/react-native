import { View, Button, Alert } from "react-native"
import WelcomePoster from "../components/WelcomePoster"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

export type WelcomePageNavigationProp = NativeStackScreenProps<RootStackParamList, 'WelcomePage'>;

/*
For Button, color for iOS is applied to the title, whereas for android it applies to background.
*/
const WelcomePage = ({navigation}: WelcomePageNavigationProp) => {
    return (
      <SafeAreaView>
        <View style={{padding: 16}}>
          <WelcomePoster name='Batman' tagline='Because, I am BATMAN'/>
        </View>
      </SafeAreaView>
    )
}

export default WelcomePage;

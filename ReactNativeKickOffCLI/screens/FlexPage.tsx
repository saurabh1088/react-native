import { View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

export type FlexPageNavigationProp = NativeStackScreenProps<RootStackParamList, 'FlexPage'>;

const FlexPage = ({navigation}: FlexPageNavigationProp) => {
    return (
        <View>
            <SafeAreaView>
                <View style={{width: 100, height: 300}}>
                    <View style={{flex: 1, backgroundColor: 'red'}}></View>
                    <View style={{flex: 1, backgroundColor: 'blue'}}></View>
                    <View style={{flex: 1, backgroundColor: 'green'}}></View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default FlexPage

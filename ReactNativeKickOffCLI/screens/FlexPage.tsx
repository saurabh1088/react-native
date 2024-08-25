import { View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App";

export type FlexPageNavigationProp = NativeStackScreenProps<RootStackParamList, 'FlexPage'>;

const FlexPage = ({}) => {
    return (
        <View></View>
    )
}

export default FlexPage

import { ScrollView, Text, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

export type FlexPageNavigationProp = NativeStackScreenProps<RootStackParamList, 'FlexPage'>;

const FlexPage = ({navigation}: FlexPageNavigationProp) => {
    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <Text>Default Flex Behaviour : Arranged in column</Text>
                    <View style={{width: 100, height: 300}}>
                        <View style={{flex: 1, backgroundColor: 'red'}}></View>
                        <View style={{flex: 1, backgroundColor: 'blue'}}></View>
                        <View style={{flex: 1, backgroundColor: 'green'}}></View>
                    </View>

                    <Text>Flex customised for row alignment</Text>
                    <View style={{flexDirection: 'row', width: 300, height: 100}}>
                        <View style={{flex: 1, backgroundColor: 'red'}}></View>
                        <View style={{flex: 1, backgroundColor: 'blue'}}></View>
                        <View style={{flex: 1, backgroundColor: 'green'}}></View>
                    </View>

                    <Text>Flex customised for different fill</Text>
                    <View style={{flexDirection: 'row', width: 300, height: 100}}>
                        <View style={{flex: 1, backgroundColor: 'red'}}></View>
                        <View style={{flex: 2, backgroundColor: 'blue'}}></View>
                        <View style={{flex: 4, backgroundColor: 'green'}}></View>
                    </View>

                    <Text>Flex customised for reverse direction</Text>
                    <View style={{flexDirection: 'row-reverse', width: 300, height: 100}}>
                        <View style={{flex: 1, backgroundColor: 'red'}}></View>
                        <View style={{flex: 2, backgroundColor: 'blue'}}></View>
                        <View style={{flex: 4, backgroundColor: 'green'}}></View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default FlexPage

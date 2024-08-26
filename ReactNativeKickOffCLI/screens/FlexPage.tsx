import { ScrollView, Text, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

export type FlexPageNavigationProp = NativeStackScreenProps<RootStackParamList, 'FlexPage'>;

const FlexPage = ({navigation}: FlexPageNavigationProp) => {
    return (
        <View>
            <SafeAreaView>
                {/* ScrollView will load all the elements, for lazy loading FlatList can be used */}
                <ScrollView>
                    {/* By default flex in mobile platforms will align elements in column */}
                    <Text>Default Flex Behaviour : Arranged in column</Text>
                    <View style={{width: 100, height: 300}}>
                        <View style={{flex: 1, backgroundColor: 'red'}}></View>
                        <View style={{flex: 1, backgroundColor: 'blue'}}></View>
                        <View style={{flex: 1, backgroundColor: 'green'}}></View>
                    </View>

                    {/* To align elements in row flexDirection needs to be set to row */}
                    <Text>Flex customised for row alignment</Text>
                    <View style={{flexDirection: 'row', width: 300, height: 100}}>
                        <View style={{flex: 1, backgroundColor: 'red'}}></View>
                        <View style={{flex: 1, backgroundColor: 'blue'}}></View>
                        <View style={{flex: 1, backgroundColor: 'green'}}></View>
                    </View>

                    {/* Here flexDirection is row, so the three elements will be filled in ratio as per flex value
                        For example total value here is 1+2+4 = 7, so ration in which width will be divided will be 
                        1/7, 2/7 and 4/7
                     */}
                    <Text>Flex customised for different fill</Text>
                    <View style={{flexDirection: 'row', width: 300, height: 100}}>
                        <View style={{flex: 1, backgroundColor: 'red'}}></View>
                        <View style={{flex: 2, backgroundColor: 'blue'}}></View>
                        <View style={{flex: 4, backgroundColor: 'green'}}></View>
                    </View>

                    {/* flexDirection here is set to row reverse, means all elements will be arranged in row, in the
                        reverse direction of which those are declared.
                    */}
                    <Text>Flex customised for reverse direction</Text>
                    <View style={{flexDirection: 'row-reverse', width: 300, height: 100}}>
                        <View style={{flex: 1, backgroundColor: 'red'}}></View>
                        <View style={{flex: 2, backgroundColor: 'blue'}}></View>
                        <View style={{flex: 4, backgroundColor: 'green'}}></View>
                    </View>

                    {/* justifyContent set to flex-end
                    */}
                    <Text>Flex with justifyContent flex-end</Text>
                    <View style={{justifyContent: 'flex-end', width: 100, height: 300, backgroundColor: 'yellow'}}>
                        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                        <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
                    </View>

                    {/* justifyContent set to center
                    */}
                    <Text>Flex with justifyContent center</Text>
                    <View style={{justifyContent: 'center', width: 100, height: 300, backgroundColor: 'yellow'}}>
                        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                        <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
                    </View>

                    {/* justifyContent set to space-between
                    */}
                    <Text>Flex with justifyContent space-between</Text>
                    <View style={{justifyContent: 'space-between', width: 100, height: 300, backgroundColor: 'yellow'}}>
                        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                        <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
                    </View>

                    {/* justifyContent set to space-around
                    */}
                    <Text>Flex with justifyContent space-around</Text>
                    <View style={{justifyContent: 'space-around', width: 100, height: 300, backgroundColor: 'yellow'}}>
                        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                        <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default FlexPage

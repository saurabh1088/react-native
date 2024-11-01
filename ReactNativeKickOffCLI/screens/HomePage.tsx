import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, Modal, Text, View } from "react-native"
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'HomePage'>;

const HomePage = ({navigation}: HomeScreenNavigationProp) => {
    const [showModalView, setShowModalView] = useState(false)
    const [apiResultValue, setApiResultValue] = useState('Tap [Call API] to update me')
    return (
        <SafeAreaView>
            <Button
                title="Welcome"
                onPress={() =>
                    navigation.navigate('WelcomePage')
                }
            />
            <Button
                title="Buttons"
                onPress={() =>
                    navigation.navigate('ButtonsPage')
                }
            />
            <Button
                title="Flex"
                onPress={() =>
                    navigation.navigate('FlexPage')
                }
            />
            <Button
                title="Modal"
                onPress={() =>
                    setShowModalView(true)
                }
            />
            <Button
                title="Call API"
                onPress={() => {
                    fetch('https://catfact.ninja/fact')
                        .then(response => response.json())
                        .then(json => {
                            console.log('Received response')
                            setApiResultValue(json.fact)
                            return json.fact;
                        })
                        .catch(error => {
                            console.error(error);
                        });
                    }
                }
            />
            <Text>{apiResultValue}</Text>
            <Modal animationType="slide" visible={showModalView}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text>This is a modal view</Text>
                    <Button
                        title="Dismiss"
                        onPress={() =>
                            setShowModalView(false)
                        }
                    />
                </View>
            </Modal>
        </SafeAreaView>
    )
}

/*
function HomePage({navigation}: HomeScreenNavigationProp) {
    return (
        <Button
            title="Welcome"
            onPress={() =>
                navigation.navigate('Welcome')
            }
        />
    )
}
*/

export default HomePage;

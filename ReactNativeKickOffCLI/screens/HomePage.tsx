import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ActivityIndicator, Button, Modal, Text, View } from "react-native"
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'HomePage'>;

const HomePage = ({navigation}: HomeScreenNavigationProp) => {
    const [showModalView, setShowModalView] = useState(false)
    const [apiResultValue, setApiResultValue] = useState('Tap [Call API] to update me')
    const [isLoading, setIsLoading] = useState(false)
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
                onPress={async () => {
                    setIsLoading(true)
                    try {
                        const response = await fetch('https://catfact.ninja/fact');
                        const json = await response.json();
                        console.log('Received response');
                        setApiResultValue(json.fact);
                    } catch (error) {
                        console.error(error);
                    } finally {
                        setIsLoading(false)
                    }
                }}
            />
            <Button
                title="Flat List"
                onPress={() =>
                    navigation.navigate('FlatListPage')
                }
            />
            {isLoading ? (
                <ActivityIndicator size="large" color="#00ff00" />
            ) : (
                <Text>{apiResultValue}</Text>
            )
            }
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

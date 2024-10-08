import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button } from "react-native"
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

export type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'HomePage'>;

const HomePage = ({navigation}: HomeScreenNavigationProp) => {
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

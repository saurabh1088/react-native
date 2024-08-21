import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button } from "react-native"
import { RootStackParamList } from "../App";

export type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomePage = ({navigation}: HomeScreenNavigationProp) => {
    return (
        <Button
            title="Welcome"
            onPress={() =>
                navigation.navigate('Welcome')
            }
        />
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

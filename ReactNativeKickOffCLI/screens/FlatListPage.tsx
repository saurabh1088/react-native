import { View, Button, Alert, Text } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

export type FlatListPageNavigationProp = NativeStackScreenProps<RootStackParamList, 'FlatListPage'>;

/*
For Button, color for iOS is applied to the title, whereas for android it applies to background.
*/
const FlatListPage = ({navigation}: FlatListPageNavigationProp) => {
    return (
      <SafeAreaView>
        <View style={{padding: 16}}>
            <Text>Example for FlatList</Text>
        </View>
      </SafeAreaView>
    )
}

export default FlatListPage;

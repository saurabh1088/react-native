import { View, Button, Alert, Text, FlatList } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

export type FlatListPageNavigationProp = NativeStackScreenProps<RootStackParamList, 'FlatListPage'>;

type DCHero = {
    id: string;
    name: string;
    powers: string;
}

const FlatListPage = ({navigation}: FlatListPageNavigationProp) => {

    // Sample data for Flat List
    const justiceLeague: DCHero[] = [
        { id: '1', name: 'Batman', powers: 'Rich and greatest detective' },
        { id: '2', name: 'Superman', powers: 'Fly, strongest and laser eyes' },
        { id: '3', name: 'Wonder Woman', powers: 'Lasso, power bracelets and immortal' },
        { id: '4', name: 'Flash', powers: 'Super fast' },
    ];

    const renderSuperHero = ({ item }: { item: DCHero }) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.powers}</Text>
        </View>
    );

    return (
      <SafeAreaView>
        <View style={{padding: 16}}>
            <Text>Example for FlatList</Text>
            <FlatList
                data={justiceLeague}
                keyExtractor={(hero) => hero.id}
                renderItem={renderSuperHero}
            />
        </View>
      </SafeAreaView>
    )
}

export default FlatListPage;

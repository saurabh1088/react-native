import { View, Button, Alert, Text, FlatList, StyleSheet } from "react-native"
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
        { id: '5', name: 'Aquaman', powers: 'Underwater breathing and control of sea creatures' },
        { id: '6', name: 'Cyborg', powers: 'Enhanced strength, technopathy, and advanced technology' },
        { id: '7', name: 'Green Lantern', powers: 'Power ring that creates energy constructs' },
        { id: '8', name: 'Martian Manhunter', powers: 'Shape-shifting, telepathy, and invisibility' },
        { id: '9', name: 'Green Arrow', powers: 'Master archer and tactician' },
        { id: '10', name: 'Hawkgirl', powers: 'Flight, combat skills, and Nth metal weaponry' },
    ];

    const renderSuperHero = ({ item }: { item: DCHero }) => (
        <View style={styles.superHeroDetailsContainer}>
            <Text style={styles.superHeroName}>{item.name}</Text>
            <Text style={styles.superHeroPowers}>{item.powers}</Text>
        </View>
    );

    return (
      <SafeAreaView>
        <View style={{padding: 16}}>
            <Text style={styles.flatListHeader}>Example for FlatList</Text>
            <FlatList
                data={justiceLeague}
                keyExtractor={(hero) => hero.id}
                renderItem={renderSuperHero}
            />
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    superHeroDetailsContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    superHeroName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    superHeroPowers: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    flatListHeader: {
        fontSize: 32,
        fontWeight: 'bold'
    }
});

export default FlatListPage;

import { View, Button, Alert, Text, FlatList, StyleSheet } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageLabelDetailCell from "../components/ImageLabelDetailCell";

export type FlatListPageNavigationProp = NativeStackScreenProps<RootStackParamList, 'FlatListPage'>;

type DCHero = {
    id: string;
    name: string;
    powers: string;
    iconName: string;
}

const FlatListPage = ({navigation}: FlatListPageNavigationProp) => {

    // Sample data for Flat List

    const justiceLeague: DCHero[] = [
        { id: '1', name: 'Batman', powers: 'Rich and greatest detective', iconName: 'dc_batman.jpeg' },
        { id: '2', name: 'Superman', powers: 'Fly, strongest and laser eyes', iconName: 'dc_superman.jpeg' },
        { id: '3', name: 'Wonder Woman', powers: 'Lasso, power bracelets and immortal', iconName: 'dc_wonder_woman.jpeg' },
        { id: '4', name: 'Flash', powers: 'Super fast', iconName: 'dc_flash.jpeg' },
        { id: '5', name: 'Aquaman', powers: 'Underwater breathing and control of sea creatures', iconName: 'dc_aquaman.jpeg' },
        { id: '6', name: 'Cyborg', powers: 'Enhanced strength, technopathy, and advanced technology', iconName: 'dc_cyborg.jpeg' },
        { id: '7', name: 'Green Lantern', powers: 'Power ring that creates energy constructs', iconName: 'dc_green_lantern.jpeg' },
        { id: '8', name: 'Martian Manhunter', powers: 'Shape-shifting, telepathy, and invisibility', iconName: 'dc_martian_manhunter.jpeg' },
        { id: '9', name: 'Green Arrow', powers: 'Master archer and tactician', iconName: 'dc_green_arrow.jpeg' },
        { id: '10', name: 'Hawkgirl', powers: 'Flight, combat skills, and Nth metal weaponry', iconName: 'dc_hawkgirl.jpeg' },
    ];

    const renderSuperHero = ({ item }: { item: DCHero }) => (
        <ImageLabelDetailCell
            label={item.name}
            detail={item.powers}
            imageName={item.iconName}
        />
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
    flatListHeader: {
        fontSize: 32,
        fontWeight: 'bold'
    }
});

export default FlatListPage;

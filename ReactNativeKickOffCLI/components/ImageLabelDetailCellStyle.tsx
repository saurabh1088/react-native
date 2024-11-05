import React from "react";
import { StyleSheet } from "react-native";

const imageLabelDetailCellStyle = StyleSheet.create({
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
    }
})

export default imageLabelDetailCellStyle;

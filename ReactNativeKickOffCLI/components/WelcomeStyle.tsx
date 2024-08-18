import React from "react";
import { StyleSheet } from "react-native";

const welcomeStyle = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        padding: 16,
        backgroundColor: '#D7C3F1',
        borderRadius: 10
    },
    image: {
        width: 100,
        height: 100,
    },
    innerContainer: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        backgroundColor: '#BDE8CA',
        padding: 8
    },
    subtitle: {
        flex: 1,
        backgroundColor: '#41B3A2',
        padding: 8
    }
})

export default welcomeStyle;

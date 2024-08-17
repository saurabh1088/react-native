import React from "react";
import { StyleSheet } from "react-native";

const welcomeStyle = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column'
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
        backgroundColor: 'red'
    },
    subtitle: {
        flex: 1,
        backgroundColor: 'green'
    }
})

export default welcomeStyle;

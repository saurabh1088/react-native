import React from "react";
import { Text, Image } from "react-native";
import welcomeStyle from "./WelcomeStyle";

function WelcomePoster(): React.JSX.Element {
    return (
        <>
            <Image 
                style={welcomeStyle.image} 
                source={{uri: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5'}}
            />
            <Text>Welcome to learning React Native!!!</Text>
        </>
    )
}

export default WelcomePoster;

import React from "react";
import type { PropsWithChildren } from "react";
import { Text, Image, View } from "react-native";
import welcomeStyle from "./WelcomeStyle";

type WelcomeProps = PropsWithChildren<{
    name: string;
    tagline: string;
}>;

/*
Here we are using props and also giving type information for the prop which is requires as the project is using TypeScript.
TypeScript add type safety on top of JavaScript hence this type declaration is required.
*/
function WelcomePoster(props: WelcomeProps): React.JSX.Element {
    return (
        /*
        style here is a prop being sent to component View. All of the core components in react native accept a prop named
        style.
        */
        <View style={welcomeStyle.mainContainer}>
            <View style={welcomeStyle.innerContainer}>
                <Image 
                    style={welcomeStyle.image} 
                    source={{uri: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5'}}
                />
                <View>
                    <Text style={welcomeStyle.title}>Welcome {props.name} to learning React Native!!!</Text>
                    <Text style={welcomeStyle.subtitle}>{props.tagline}</Text>
                </View>
            </View>
            
        </View>
    )
}

export default WelcomePoster;

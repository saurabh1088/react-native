import React from "react";
import type { PropsWithChildren } from "react";
import { Touchable, TouchableOpacity, Text } from "react-native";
import customButtonStyle from "./CustomButtonStyle";

type CustomButtonProps = PropsWithChildren<{
    title: string,
    onPress: () => void
}>;

function CustomButton(props: CustomButtonProps): React.JSX.Element {
    return(
        <TouchableOpacity style={customButtonStyle.button} onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;

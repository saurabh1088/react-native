import React from "react";
import { Touchable, TouchableOpacity, Text } from "react-native";
import customButtonStyle from "./CustomButtonStyle";

function CustomButton(): React.JSX.Element {
    return(
        <TouchableOpacity style={customButtonStyle.button}>
            <Text>Custom Button</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;
import React from "react";
import type { PropsWithChildren } from "react";
import {  Text, View } from "react-native";
import imageLabelDetailCellStyle from "./ImageLabelDetailCellStyle";

type ImageLabelDetailCellProps = PropsWithChildren<{
    label: string,
    detail: string,
    imageName: string
}>;

function ImageLabelDetailCell(props: ImageLabelDetailCellProps): React.JSX.Element {
    return(
        <View style={imageLabelDetailCellStyle.superHeroDetailsContainer}>
            <Text style={imageLabelDetailCellStyle.superHeroName}>{props.label}</Text>
            <Text style={imageLabelDetailCellStyle.superHeroPowers}>{props.detail}</Text>
        </View>
    )
}

export default ImageLabelDetailCell;

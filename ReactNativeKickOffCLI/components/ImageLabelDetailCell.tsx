import React from "react";
import type { PropsWithChildren } from "react";
import {  Text, View, Image } from "react-native";
import imageLabelDetailCellStyle from "./ImageLabelDetailCellStyle";
import { images } from "../screens/FlatListPage"

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
            <Image
                source={images[props.imageName as keyof typeof images]}
                style={{ width: 100, height: 100 }}
            />
        </View>
    )
}

export default ImageLabelDetailCell;

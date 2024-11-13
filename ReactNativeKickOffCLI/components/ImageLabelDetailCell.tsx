import React from "react";
import type { PropsWithChildren } from "react";
import {  Text, View, Image } from "react-native";
import imageLabelDetailCellStyle from "./ImageLabelDetailCellStyle";

type ImageLabelDetailCellProps = PropsWithChildren<{
    label: string,
    detail: string,
    imageName: string
}>;

// This mapping here is necessary as require doesn't takes arguments hence can't be buit dynamically
export const images: { [key: string]: any } = {
    aquaman: require('../assets/images/dc_aquaman.jpeg'),
    batman: require('../assets/images/dc_batman.jpeg'),
    cyborg: require('../assets/images/dc_cyborg.jpeg'),
    flash: require('../assets/images/dc_flash.jpeg'),
    greenArrow: require('../assets/images/dc_green_arrow.jpeg'),
    greenLantern: require('../assets/images/dc_green_lantern.jpeg'),
    hawkgirl: require('../assets/images/dc_hawkgirl.jpeg'),
    martianManhunter: require('../assets/images/dc_martian_manhunter.jpeg'),
    superman: require('../assets/images/dc_superman.jpeg'),
    wonderWoman: require('../assets/images/dc_wonder_woman.jpeg'),
};

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

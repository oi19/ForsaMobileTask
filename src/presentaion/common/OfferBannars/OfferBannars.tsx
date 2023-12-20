import React from "react";
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import { styles } from "./styles";

export const OfferBannars = () => {

    const renderWritingBannar = () => {
        return (
            <View style={styles.writingBannarContainer}>
                <Image style={styles.writingIconStyle} source={require('../../../assets/icons/writing_icon.png')} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Get your limit</Text>
                    <Text style={styles.description} >Complete your infoand get up to EGP 100,000</Text>
                </View>
            </View>
        )
    }

    const renderVisualBannar = () => {
        return (
            <View style={{ flex: 1 }} >
                <FlatList
                    data={[1, 2]}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={renderOfferItem}
                    onEndReachedThreshold={0.01}
                    horizontal
                    style={{ flexGrow: 1, paddingStart: 26 }}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    const renderOfferItem = () => {
        return (
            <TouchableOpacity
                onPress={() => { }}
                style={styles.visualBannarContainerStyle}>
                <ImageBackground
                    style={styles.backgroundImageStyle}
                    source={require('../../../assets/images/offersBannar.png')}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {renderWritingBannar()}
            {renderVisualBannar()}
        </View>
    )

}



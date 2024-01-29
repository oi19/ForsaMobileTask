import React from "react";
import { View } from "react-native";
import Header from "../../components/common/Header/Header";


export const OffersScreen = () => {
    return (
        <View>
            <Header
                title="Offers"
                searchBarVisible={false}
                isLogoVisible={false}
                isLongBackgroundContainer={false}
            />
        </View>
    )
}
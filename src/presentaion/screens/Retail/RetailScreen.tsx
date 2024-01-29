import React from "react";
import { View } from "react-native";
import Header from "../../components/common/Header/Header";


export const Retail = () => {
    return (
        <View>
            <Header
                title="Retail"
                searchBarVisible={false}
                isLogoVisible={false}
                isLongBackgroundContainer={false}
            />
        </View>
    )
}
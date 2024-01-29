import React from "react";
import { View, Text } from "react-native"

import BlurProgressView from "../../components/common/blur-activity-indicator/BlurProgressView";
import RenderHomeScreen from "../../components/common/renderHomeScreen/RenderHomeScreen";

import useHomeScreenDataFetch from "../../../hooks/useHomeScreenDataFetch";

const HomeScreen = () => {

    const { isLoading, isError, data } = useHomeScreenDataFetch()

    return (
        <View style={{ flex: 1 }}>
            {isLoading ?
                <BlurProgressView />
                : isError ? <Text>{isError}</Text>
                    : <RenderHomeScreen {...data} />
            }
        </View>
    )
}

export default HomeScreen
import React, { useState } from "react";
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import styles from "./styles";
import { serviceItem } from "../../../domain/services";
import { OFFERS_ITEM } from "../../../domain/offers";

export const OffersList = (props: any) => {
    const { offers } = props

    const renderOffersList = () => {
        return (
            <View style={styles.servicesContainerStyle}>
                <FlatList
                    numColumns={2}
                    data={offers}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => renderOfferItem(item)}
                    onEndReachedThreshold={0.01}
                    contentContainerStyle={styles.rowContainerStyle}
                    style={{ flex: 1 }}
                />
            </View>
        )
    }

    const renderOfferItem = (item: OFFERS_ITEM) => {
        return (
            <TouchableOpacity
                onPress={() => { }}
                style={styles.serviceItemContainer}>
                <View>
                    <ImageBackground style={styles.serviceItemBackgroundStyle}
                        source={!item.thumbnail ? require('../../../assets/images/offerImage.png')
                            : { uri: item.thumbnail }} />
                </View>
                <View style={styles.textContainerStyle}>
                    <View >
                        <Text style={styles.sectorTitleStyle}>{item?.brand?.sector?.title}</Text>
                        <Text style={styles.brandTitleStyle}>{item?.brand?.title}</Text>
                    </View>
                    <Text style={styles.categoryDescriptionStyle}>{item.category.label}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderHeadSection = () => {
        return (
            <View style={styles.headSectionContainer}>
                <Text style={styles.headSectionTitle}>Offers Select for You </Text>
                <TouchableOpacity><Text style={styles.seeLessTextStyle}>See All</Text></TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ marginTop: 40 }}>
            {renderHeadSection()}
            {renderOffersList()}
        </View>
    )

}



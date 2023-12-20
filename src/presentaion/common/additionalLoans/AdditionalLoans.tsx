import React, { useState } from "react";
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import styles from "./styles";
import { serviceItem } from "../../../domain/services";

export const AdditionalLoans = (props: any) => {
    const { services } = props
    const [isShowLess, setShowLess] = useState<boolean>(true)

    const renderAdditionalLoansList = () => {
        return (
            <View style={styles.servicesContainerStyle}>
                <FlatList
                    numColumns={2}
                    data={services}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index }) => renderAdditionalLoansItem(item, index > 4 ? 1 : index + 1)}
                    onEndReachedThreshold={0.01}
                    contentContainerStyle={styles.rowContainerStyle}
                    ListFooterComponent={() => { return <View style={{ height: 10 }} /> }}
                />
            </View>
        )
    }

    const serviceItemBackground = (index) => {
        switch (index) {
            case 1:
                return require('../../../assets/images/serviceItem_1.png')
            case 2:
                return require('../../../assets/images/serviceItem_2.png')
            case 3:
                return require('../../../assets/images/serviceItem_3.png')
            case 4:
                return require('../../../assets/images/serviceItem_4.png')
        }
    }

    const renderAdditionalLoansItem = (item: serviceItem, index) => {
        return (
            <TouchableOpacity
                onPress={() => { }}
                style={styles.serviceItemContainer}>
                <ImageBackground style={styles.serviceItemBackgroundStyle} source={serviceItemBackground(index)} >
                    <Text style={styles.serviceTitleText}>{item?.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderHeadSection = () => {
        return (
            <View style={styles.headSectionContainer}>
                <Text style={styles.headSectionTitle}>Request Additional Loan</Text>
                <TouchableOpacity><Text style={styles.seeLessTextStyle}>See Less</Text></TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ marginTop: 80 }}>
            {renderHeadSection()}
            {renderAdditionalLoansList()}
        </View>
    )

}



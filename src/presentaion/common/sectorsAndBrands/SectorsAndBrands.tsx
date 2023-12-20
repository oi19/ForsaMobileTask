import React, { useState } from "react";
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import styles from "./styles";
import { SectorItem, SectorsList } from "../../../domain/sectors";
import { BrandItem, BrandsList } from "../../../domain/brands";

export const SectorsAndBrands = (props: any) => {
    const { sectors, brands } = props
    const [selectedSector, setSelectedSector] = useState<string | null>(null)

    const renderSectorItem = (item: SectorItem) => {
        return (
            <TouchableOpacity
                onPress={() => { setSelectedSector(item?.value) }}
                style={selectedSector == item?.value ? styles.selectedSectorStyle : styles.unselectedSectorStyle}>
                <Text style={selectedSector == item.value ? styles.selectedSectorTextStyle : styles.unselectedSectorTextStyle}>{item?.label}</Text>
            </TouchableOpacity>
        )
    }

    const renderSectorsSection = () => {
        return (
            <View style={styles.sectorSectionContainer}>
                {sectors &&
                    <FlatList
                        data={[{ value: null, label: 'All' }, ...sectors]}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => renderSectorItem(item)}
                        onEndReachedThreshold={0.01}
                        horizontal
                        contentContainerStyle={styles.sectorTitleContainerStyle}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ width: 9 }} />}
                    />}
            </View>
        )
    }

    const renderBrandItem = (item: BrandItem) => {
        return (
            <TouchableOpacity
                onPress={() => { }}
                style={styles.brandTitleContainerStyle}>
                <Image style={styles.brandImageStyle} source={{ uri: item.thumbnail }} />
            </TouchableOpacity>
        )
    }

    const renderBrandsList = () => {
        return (
            <View>
                {brands &&
                    <FlatList
                        data={brands}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => renderBrandItem(item)}
                        onEndReachedThreshold={0.01}
                        horizontal
                        style={{ flex: 1, }}
                        contentContainerStyle={{ marginStart: 25 }}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ width: 3 }} />}
                    />}
            </View>
        )
    }

    const renderHeadSection = () => {
        return (
            <View style={styles.headSectionContainer}>
                <Text style={styles.headSectionTitle}>Top brands in retail</Text>
                <TouchableOpacity><Text>View all</Text></TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, paddingTop: 100 }}>
            {renderHeadSection()}
            {renderSectorsSection()}
            {renderBrandsList()}
        </View>
    )

}



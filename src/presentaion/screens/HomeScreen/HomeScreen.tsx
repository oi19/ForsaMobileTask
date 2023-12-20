import React from "react";
import { View, SafeAreaView, Image, Text, ScrollView } from "react-native"
import styles from "./styles";
import Header from "../../common/Header/Header";
import { OfferBannars } from "../../common/OfferBannars/OfferBannars";
import { useQueries } from "react-query";
import { fetchData } from "../../../infrastructure/api/api";
import { Endpoints } from "../../../shared/constants";
import BlurProgressView from "../../common/blur-activity-indicator/BlurProgressView";
import { SectorsAndBrands } from "../../common/sectorsAndBrands/SectorsAndBrands";
import { AdditionalLoans } from "../../common/additionalLoans/AdditionalLoans";
import { OffersList } from "../../common/offerList/OffersList";

const HomeScreen = () => {

    const results = useQueries([
        { queryKey: ["sectors"], queryFn: () => fetchData(Endpoints.SECTORS) },
        { queryKey: ["brands"], queryFn: () => fetchData(Endpoints.BRANDS) },
        { queryKey: ["additionalLoans"], queryFn: () => fetchData(Endpoints.ADDITIONAL_LOANS) },
        { queryKey: ["offers"], queryFn: () => fetchData(Endpoints.OFFERS) }
    ]);

    const isLoading = results.some((query) => query.isLoading);
    const isError = results.some((query) => query.error);
    const isAllSuccess = results.some((query) => query.data !== undefined);

    return (
        <View style={{ flex: 1 }}>
            {isError && <Text>{isError}</Text>}
            {isLoading && <BlurProgressView />}
            {isAllSuccess &&
                <>
                    <Header
                        searchBarVisible={true}
                        isLogoVisible={true}
                        isLongBackgroundContainer={true}
                    />
                    <View style={styles.arrowImageContainerStyle}>
                        <Image style={styles.arrowImageStyle} source={require('../../../assets/images/arrows.png')} />
                    </View>
                    <View style={styles.offerBannarsContainer}>
                        <OfferBannars />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1, marginTop: -80 }}>
                        <SectorsAndBrands
                            sectors={results[0]?.data?.results}
                            brands={results[1]?.data?.results}
                        />
                        <AdditionalLoans services={results[2]?.data?.results} />
                        <OffersList offers={results[3]?.data?.results} />
                    </ScrollView>
                </>
            }
        </View>
    )
}

export default HomeScreen
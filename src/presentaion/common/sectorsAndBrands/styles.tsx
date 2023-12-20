import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headSectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: -85
    },
    headSectionTitle: {
        color: '#072040',
        fontFamily: 'Segoe UI',
        fontSize: 18,
        fontweight: '700',
    },
    viewAllText: {
        fontSize: 12,
        fontweight: '400',
    },
    sectorSectionContainer: {
        marginTop: 10,
        marginEnd: 10,
    },
    sectorTitleContainerStyle: {
        alignItems: 'center',
        marginStart: 25,
    },
    selectedSectorStyle: {
        backgroundColor: '#3EBDAC',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        borderRadius: 5
    },
    unselectedSectorStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandTitleContainerStyle: {
        marginTop: 20,
        marginEnd: 22,
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        borderWidth: 1,
        marginBottom: 2,
        elevation: 8,
        borderColor: '#D4D4D4',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'lightgrey',
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    brandImageStyle: {
        resizeMode: 'contain',
        width: '100%',
        height: "100%",
        borderRadius: 8
    },
    selectedSectorTextStyle: {
        color: 'white'
    },
    unselectedSectorTextStyle: {}
})

export default styles
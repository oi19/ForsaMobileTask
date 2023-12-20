import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headSectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: -40
    },
    headSectionTitle: {
        color: '#072040',
        fontFamily: 'Segoe UI',
        fontSize: 18,
        fontweight: '700',
    },
    servicesContainerStyle: {
        flex: 1,
        marginTop: 10,
    },
    rowContainerStyle: {
        borderRadius: 1,
        marginStart: 20,
    },
    serviceItemContainer: {
        flex: 1,
        backgroundColor: 'white',
        height: 280,
        borderWidth: .5,
        justifyContent: 'space-between',
        marginEnd: 20,
        marginBottom: 10,
        marginVertical: 4,
        borderColor: 'lightgrey',
        borderRadius: 14,
        elevation: 4,
        shadowColor: 'lightgrey',
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    serviceItemBackgroundStyle: {
        resizeMode: 'contain',
        width: 156,
        height: 156,
        justifyContent: 'center',
        borderRadius: 12,
        overflow: 'hidden',
    },
    serviceTitleText: {
        color: 'white',
        fontFamily: 'Segoe UI',
        fontSize: 18,
        fontweight: '600',
        textAlign: 'center'
    },

    seeLessTextStyle: {
        fontSize: 18
    },
    seperator: {
        height: 4,
        width: '100%',
        alignSelf: 'center',
        marginTop: 4
    },
    textContainerStyle: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 18,
        alignItems: 'center',
        paddingVertical: 12,
        padding: 4,
        borderColor: 'lightgrey',
        shadowColor: 'lightgrey',
        shadowOffset: { width: -2, height: -2 },
        elevation: 4,
        shadowOpacity: 1,
        shadowRadius: 4,
        marginTop: -40
    },
    sectorTitleStyle: {
        color: '#969DA7',
        fontSize: 12,
        fontFamily: 'Segoe UI',
        textAlign: 'center',
    },
    brandTitleStyle: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Segoe UI',
        textAlign: 'center',
    },
    categoryDescriptionStyle: {
        color: '#969DA7',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 15,
        paddingHorizontal: 8
    },

})

export default styles
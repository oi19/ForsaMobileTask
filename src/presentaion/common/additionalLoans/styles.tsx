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
        marginStart: 20
    },
    rowContainerStyle: {
        paddingBottom: 12
    },
    serviceItemContainer: {
        flex: 1,
        height: 56,
        alignItems: 'center',
        marginEnd: 20,
        marginVertical: 4,
    },
    serviceItemBackgroundStyle: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
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
    }
})

export default styles
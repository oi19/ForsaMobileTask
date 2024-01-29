import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    writingBannarContainer: {
        height: 51,
        paddingHorizontal: 16,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: "#FFC709",
        borderRadius: 12,
        flexDirection: 'row',
        marginHorizontal: 26
    },
    writingIconStyle: {
        width: 36,
        height: 40,
    },
    textContainer: {
        marginStart: 11,
        justifyContent: 'space-between'
    },
    title: {
        color: '#FFC709',
        fontFamily: 'Segoe UI',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
    },
    description: {
        color: '#FFC709',
        fontFamily: 'Segoe UI',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '300',
    },
    visualBannarContainerStyle: {
        flex: 1,
        marginEnd: 26,
        height: 138,
        width: Dimensions.get('screen').width - 35,
        marginTop: 18,
        borderWidth: 2,
        borderColor: '#3EBDAC',
        borderRadius: 20,
    },
    backgroundImageStyle: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        overflow: 'hidden',
    }
})
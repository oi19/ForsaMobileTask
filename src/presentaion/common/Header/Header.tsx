import React from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./styles";

interface inputProps {
    searchBarVisible: boolean,
    isLogoVisible: boolean,
    isLongBackgroundContainer: boolean,
    isRightIconsVisible?: boolean | null,
    title?: string | null,
}

const Header = (props: inputProps) => {
    const { searchBarVisible, isLogoVisible, isLongBackgroundContainer, isRightIconsVisible, title } = props


    const renderMiddleSection = () => {
        return (
            <View style={styles.middleSectionContainer}>
                {isLogoVisible ?
                    <Image style={styles.logoStyle} source={require('../../../assets/images/logo.png')} />
                    :
                    <Text style={styles.titleStyle}>{title}</Text>
                }
            </View>
        )
    }

    const renderRightSection = () => {
        return (
            <>
                {isRightIconsVisible !== false &&
                    <View style={styles.rightIconsContainerStyle} >
                        <TouchableOpacity onPress={() => { }}>
                            <Image
                                style={styles.heartIconStyle}
                                source={require("../../../assets/icons/heart_icon_off.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Image
                                style={styles.notifIconStyle}
                                source={require("../../../assets/icons/notif_icon_on.png")}
                            />
                        </TouchableOpacity>
                    </View>}
            </>
        )
    }

    const renderLeftSection = () => {
        return (
            <>
                {searchBarVisible &&
                    <TouchableOpacity style={styles.leftIconsContainerStyle} onPress={() => { }}>
                        <Image style={styles.searchIconStyle} source={require("../../../assets/icons/search_icon.png")} />
                    </TouchableOpacity>
                }
            </>
        )
    }

    return (
        <ImageBackground
            style={isLongBackgroundContainer ? styles.backgroundImageStyle : [styles.backgroundImageStyle, { height: 180 }]}
            resizeMode={'cover'}
            source={require('../../../assets/images/headerBackgroundImage.png')}>
            <KeyboardAwareScrollView>
                <View style={styles.subContainer}>
                    {renderLeftSection()}
                    {renderRightSection()}
                </View>
                {renderMiddleSection()}
            </KeyboardAwareScrollView>
        </ImageBackground>
    )
};

export default Header;
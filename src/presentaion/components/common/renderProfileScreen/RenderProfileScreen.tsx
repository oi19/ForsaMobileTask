import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../../../components/common/Header/Header";
import styles from "./styles";

type inputProps = {
    username: string,
    currentLanguage: string,
    onLanguageChangeHanlder: any
}

const RenderProfileScreen = (props: inputProps) => {

    const { username, currentLanguage, onLanguageChangeHanlder } = props

    return (
        <View style={{ flex: 1 }}>
            <Header
                title="Profile"
                searchBarVisible={false}
                isLogoVisible={false}
                isLongBackgroundContainer={false}
            />
            <View style={styles.profileSectionContainerStyle}>
                <View style={styles.ProfilePicContainerStyle}>
                    <Image style={styles.profilePicStyle} source={require('../../../../assets/images/profilePic.png')} />
                </View>
                <Text style={styles.profileNameStyle}>{username}</Text>
            </View>
            <View style={styles.profileBodyContainerStyle}>
                <View >
                    <Text style={styles.shareTextStyle}>Share The App</Text>
                </View>
                <View style={styles.langContainerStyle}>
                    <Text style={styles.shareTextStyle}>Change Language</Text>
                    <View style={styles.langContainerStyle}>
                        <TouchableOpacity style={styles.langContainerStyle} onPress={onLanguageChangeHanlder}>
                            <Text style={styles.shareTextStyle}>{currentLanguage}</Text>
                            <Image style={styles.arrowIconStyle} source={require('../../../../assets/icons/arrow_icon.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RenderProfileScreen
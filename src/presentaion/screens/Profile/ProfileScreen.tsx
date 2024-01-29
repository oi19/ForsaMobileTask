import React from "react";
import RenderProfileScreen from "../../components/common/renderProfileScreen/RenderProfileScreen";

export const ProfileScreen = () => {

    // const userData = useProfileData()

    return (
        <RenderProfileScreen
            username="Omar Khaled"
            onLanguageChangeHanlder={() => { }}
            currentLanguage="English"
        />
    )
}
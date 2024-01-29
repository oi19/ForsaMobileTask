import React from "react";
import MainStack from "../../navigation/main";
import { AuthStack } from "../../navigation/auth";

const Splash = () => {

    const currentUser = ''

    console.warn('splash')
    console.warn(!!currentUser)

    return (
        <>
            {currentUser ? <MainStack /> : <AuthStack />}
        </>
    )
}

export default Splash
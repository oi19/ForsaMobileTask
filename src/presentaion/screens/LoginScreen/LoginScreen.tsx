import React from "react";

import useLoginHook from "../../../hooks/auth/useLoginHook";
import RenderLoginScreen from "../../components/common/renderLoginScreen/RenderLoginScreen";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

    const navigation = useNavigation()
    const { onSuccess, control, errors, isSubmitting } = useLoginHook('', navigation)

    return <RenderLoginScreen
        onSubmitCallback={onSuccess}
        errors={errors}
        isSubmitting={isSubmitting}
        control={control}
    />
}

export default LoginScreen
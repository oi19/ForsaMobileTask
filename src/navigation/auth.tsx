import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from "../presentaion/screens/OnboardingScreen/OnboardingScreen";
import LoginScreen from "../presentaion/screens/LoginScreen/LoginScreen";
import RegistrationScreen from "../presentaion/screens/RegisterationScreen/RegistrationScreen";
import MainStack from "./main";

const Stack = createStackNavigator()

export function AuthStack(props) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="onboardin" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} initialParams={{ ...props }} />
            <Stack.Screen name="Registration" component={RegistrationStack} />
            <Stack.Screen name="Home" component={MainStack} />
        </Stack.Navigator>
    );
}

export function RegistrationStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Registration"}>
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={MainStack} />
        </Stack.Navigator>
    );
}
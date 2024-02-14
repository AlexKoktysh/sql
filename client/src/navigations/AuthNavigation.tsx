import { AuthScreen } from "@/screens/AppScreens";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

export const AuthNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="SignIn" component={AuthScreen} />
            <Stack.Screen name="SignUp" component={AuthScreen} />
        </Stack.Navigator>
    );
};

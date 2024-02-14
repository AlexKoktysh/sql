import { ChatHeader } from "@/components/Chat/ChatHeader";
import { Header } from "@/components/TabNavigation/Header";
import { HomeScreen } from "@/screens/CoreScreens";
import { ChatScreen } from "@/screens/HomeScreens/ChatScreen";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

export const HomeNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="ChatsList"
            screenOptions={{
                cardStyle: { backgroundColor: "#383535" },
                header: () => <Header />,
            }}
        >
            <Stack.Screen name="ChatsList" component={HomeScreen} />
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    header: () => <ChatHeader />,
                    cardStyle: { backgroundColor: "#575353" },
                }}
            />
        </Stack.Navigator>
    );
};

import React, { FC } from "react";
import { CoreScreens } from "@Screens/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "@/components/TabNavigation/Header";
import { HomeNavigation } from "./HomeNavigation";

interface IAntDesignIcon {
    color: string;
    name: "home" | "pluscircle" | "user";
    size: number;
}

const AntDesignIcon: FC<IAntDesignIcon> = ({ color, name, size }) => {
    return <AntDesign name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

export const BottomTabNavigation: FC = () => {
    const { ProfileScreen, AddScreen } = CoreScreens;

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#5CFF18",
                header: () => <Header />,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 100,
                    borderTopEndRadius: 40,
                    borderTopStartRadius: 40,
                    backgroundColor: "#383535",
                    position: "absolute",
                    borderTopWidth: 0,
                },
            }}
            sceneContainerStyle={{
                backgroundColor: "#383535",
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ color }) =>
                        AntDesignIcon({ color, name: "home", size: 25 }),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Add"
                component={AddScreen}
                options={{
                    tabBarIcon: ({ color }) =>
                        AntDesignIcon({ color, name: "pluscircle", size: 50 }),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) =>
                        AntDesignIcon({ color, name: "user", size: 25 }),
                }}
            />
        </Tab.Navigator>
    );
};

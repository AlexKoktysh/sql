import { FC, useContext, useEffect } from "react";
import { AppScreens } from "@Screens/index";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigation } from "@Navigations/BottomTabNavigation";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "@/providers/AuthProviders";
import { AuthNavigation } from "@Navigations/AuthNavigation";

const Stack = createStackNavigator();

export const AppNavigation: FC = () => {
    const { SplashScreen } = AppScreens;

    const navigation = useNavigation();
    const { isAuth, isLoading } = useContext(AuthContext);

    useEffect(() => {
        if (isLoading) return navigation.navigate("Splash");
        isAuth
            ? navigation.navigate("Core", {
                  screen: "Home",
                  params: { screen: "ChatsList" },
              })
            : navigation.navigate("Auth", { screen: "SignIn" });
    }, [isAuth, isLoading]);

    return (
        <Stack.Navigator
            initialRouteName="Core"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Auth" component={AuthNavigation} />
            <Stack.Screen name="Core" component={BottomTabNavigation} />
        </Stack.Navigator>
    );
};

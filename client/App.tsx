import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import {
    SafeAreaInsetsContext,
    SafeAreaProvider,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "@Navigations/AppNavigation";
import { setupStore } from "@Store/index";
import { FC } from "react";
import { AuthProvider } from "@/providers/AuthProviders";

const store = setupStore();

const AppWrapper: FC = () => {
    return (
        <AuthProvider>
            <PaperProvider>
                <SafeAreaInsetsContext.Consumer>
                    {(insets) => (
                        <View
                            style={{
                                paddingTop: insets?.top,
                                paddingLeft: insets?.left,
                                paddingBottom: insets?.bottom,
                                paddingRight: insets?.right,
                                flex: 1,
                            }}
                        >
                            <AppNavigation />
                        </View>
                    )}
                </SafeAreaInsetsContext.Consumer>
            </PaperProvider>
        </AuthProvider>
    );
};

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <StatusBar backgroundColor="#383535" />
                    <AppWrapper />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
}

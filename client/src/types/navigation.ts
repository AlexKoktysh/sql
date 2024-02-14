import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Splash: undefined;
    Auth: NavigatorScreenParams<AuthTabParamList>;
    Core: NavigatorScreenParams<CoreTabParamList>;
};

export type AuthStackScreenProps = StackScreenProps<AuthTabParamList>;
export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>;

export type AuthTabParamList = {
    SignIn: undefined;
    SignUp: undefined;
};
export type CoreTabParamList = {
    Home: NavigatorScreenParams<HomeTabParamList>;
    Add: undefined;
    Profile: undefined;
};
export type HomeTabParamList = {
    ChatsList: undefined;
    Chat: {
        id: number;
    };
};
export type CoreTabScreenProps<T extends keyof CoreTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<CoreTabParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;
export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<HomeTabParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

import { createContext, useState, useMemo, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthParamsType } from "@/types/types";
import { useAppSelector } from "@/hooks/useRedux";
import { useActions } from "@/hooks/useActions";
import { authAPI } from "@/api/services/AuthService";
import { useNavigation } from "@react-navigation/native";
import { usersAPI } from "@/api/services/UsersService";

interface IContext {
    isLoading: boolean;
    isAuth: boolean;
    signInFunction: (params: AuthParamsType) => Promise<void>;
    signUpFunction: (params: AuthParamsType) => Promise<void>;
    signOutFunction: () => Promise<void>;
}

export const AuthContext = createContext({} as IContext);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const isAuth = useAppSelector((state) => state.isAuth).isAuth;
    const [loading, setLoading] = useState(true);

    const { setAuth } = useActions();
    const navigation = useNavigation();

    isAuth && usersAPI.useGetProfileInfoQuery(null);
    const [
        signIn,
        {
            isSuccess: isSuccess_signIn,
            isLoading: isLoading_signIn,
            isError: isError_signIn,
        },
    ] = authAPI.useSignInMutation();
    const [
        signUp,
        {
            isSuccess: isSuccess_signUp,
            isLoading: isLoading_signUp,
            isError: isError_signUp,
        },
    ] = authAPI.useSignUpMutation();
    const [
        signOut,
        { isSuccess: isSuccess_signOut, isLoading: isLoading_signOut },
    ] = authAPI.useLogoutMutation();

    const signInFunction = async (params: AuthParamsType) => {
        await signIn(params);
    };
    const signUpFunction = async (params: AuthParamsType) => {
        await signUp(params);
    };
    const signOutFunction = async () => {
        await signOut(null);
    };

    useEffect(() => {
        const getAsyncStorage = async () => {
            const value = await AsyncStorage.getItem("isAuth");
            setAuth(value != null ? JSON.parse(value) : false);
            setLoading(false);
        };
        getAsyncStorage();
    }, []);

    useEffect(() => {
        const setAsyncStorage = async () => {
            await AsyncStorage.setItem("isAuth", "true");
            setAuth(true);
            setLoading(false);
        };
        if (isSuccess_signIn || isSuccess_signUp) setAsyncStorage();
    }, [isSuccess_signIn, isSuccess_signUp]);

    useEffect(() => {
        const setAsyncStorage = async () => {
            await AsyncStorage.setItem("isAuth", "false");
            setAuth(false);
            setLoading(false);
        };
        if (isSuccess_signOut) setAsyncStorage();
    }, [isSuccess_signOut]);

    useEffect(() => {
        if (isLoading_signIn || isLoading_signUp || isLoading_signOut) {
            return setLoading(
                isLoading_signIn || isLoading_signUp || isLoading_signOut,
            );
        }
    }, [isLoading_signIn, isLoading_signUp, isLoading_signOut]);

    useEffect(() => {
        if (isError_signIn && isError_signUp) {
            navigation.navigate("Auth", { screen: "SignIn" });
        }
    }, [isError_signIn, isError_signUp]);

    const value = useMemo(
        () => ({
            isLoading: loading,
            isAuth,
            signInFunction,
            signUpFunction,
            signOutFunction,
        }),
        [loading, isAuth],
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

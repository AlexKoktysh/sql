import { baseApi } from "@Api/index";
import { AuthParamsType, AuthDto } from "@/types/types";

export const authAPI = baseApi.injectEndpoints({
    endpoints: (build) => ({
        signIn: build.mutation<AuthDto, AuthParamsType>({
            query: (body) => ({
                url: "/auth/signin",
                method: "POST",
                body,
            }),
        }),
        signUp: build.mutation<AuthDto, AuthParamsType>({
            query: (body) => ({
                url: "/auth/signup",
                method: "POST",
                body,
            }),
        }),
        logout: build.mutation<AuthDto, null>({
            query: () => ({
                url: "/auth/signout",
                method: "GET",
            }),
        }),
    }),
    overrideExisting: true,
});

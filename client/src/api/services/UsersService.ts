import { UserType } from "@/types/types";
import { baseApi } from "@Api/index";

export const usersAPI = baseApi
    .enhanceEndpoints({ addTagTypes: ["profileInfo"] })
    .injectEndpoints({
        endpoints: (build) => ({
            getProfileInfo: build.query<UserType, null>({
                query: () => ({
                    url: "/user/profile",
                }),
                providesTags: ["profileInfo"],
            }),
        }),
        overrideExisting: true,
    });

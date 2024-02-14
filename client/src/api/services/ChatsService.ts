import { ChatType } from "@/types/types";
import { baseApi } from "@Api/index";

export const chatsAPI = baseApi
    .enhanceEndpoints({ addTagTypes: ["chats"] })
    .injectEndpoints({
        endpoints: (build) => ({
            getChats: build.query<ChatType[], null>({
                query: () => ({
                    url: "/chat",
                }),
                providesTags: ["chats"],
            }),
            createChat: build.mutation<ChatType[], { name: string }>({
                query: (body) => ({
                    url: "/chat",
                    method: "POST",
                    body,
                }),
                invalidatesTags: ["chats"],
            }),
        }),
        overrideExisting: true,
    });

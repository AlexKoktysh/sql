import { chatsAPI } from "@/api/services/ChatsService";
import { ChatType } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ChatType[] | [] = [];

export const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            chatsAPI.endpoints.getChats.matchFulfilled,
            (state, { payload }) => {
                console.log("payload", payload);
                state = payload;
            },
        );
    },
});

export const chatsActions = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;

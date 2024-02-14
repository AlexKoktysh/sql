import { usersAPI } from "@/api/services/UsersService";
import { UserType } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserType = {
    id: null,
    first_name: "",
    last_name: "",
    email: "",
};

export const profileSlice = createSlice({
    name: "profileInfo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            usersAPI.endpoints.getProfileInfo.matchFulfilled,
            (state, { payload }) => {
                state.id = payload.id;
                state.email = payload.email;
                state.first_name = payload.first_name ?? "";
                state.last_name = payload.last_name ?? "";
            },
        );
    },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;

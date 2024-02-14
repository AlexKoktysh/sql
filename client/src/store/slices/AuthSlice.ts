import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Record<"isAuth", boolean> = {
    isAuth: true,
};

export const authSlice = createSlice({
    name: "isAuth",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

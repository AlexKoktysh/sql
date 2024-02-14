import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@Api/index";
import { authReducer } from "./slices/AuthSlice";
import { profileReducer } from "./slices/ProfileSlice";
import { chatsReducer } from "./slices/ChatsSlice";

const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    isAuth: authReducer,
    profileInfo: profileReducer,
    chats: chatsReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ serializableCheck: false }).concat([
                baseApi.middleware,
            ]),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

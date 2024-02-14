import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { authActions } from "@/store/slices/AuthSlice";
import { profileActions } from "@/store/slices/ProfileSlice";
import { chatsActions } from "@/store/slices/ChatsSlice";

const actions = {
    ...authActions,
    ...profileActions,
    ...chatsActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

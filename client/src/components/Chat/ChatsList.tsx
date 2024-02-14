import { FC } from "react";
import { FlatList } from "react-native";
import { ChatItem } from "./ChatItem";

interface IProps {
    chats: { id: number; name: string; message: string }[];
}

export const ChatsList: FC<IProps> = ({ chats }) => {
    return (
        <FlatList
            data={chats}
            renderItem={(chat) => <ChatItem {...chat.item} />}
        />
    );
};

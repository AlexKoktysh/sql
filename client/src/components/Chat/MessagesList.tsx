import { FC } from "react";
import { FlatList } from "react-native";
import { MessageItem } from "@/components/Chat/MessageItem";
import { messages } from "@/constants/api";

export const MessagesList: FC = () => {
    return (
        <FlatList
            inverted
            style={{
                marginBottom: 100,
            }}
            data={messages.sort((a, b) => b.id - a.id)}
            renderItem={(message) => <MessageItem {...message.item} />}
        />
    );
};

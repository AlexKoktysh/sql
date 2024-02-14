import { FC } from "react";
import { BaseScreenLayout } from "@/layouts/BaseScreenLayout";
import { ChatsList } from "@/components/Chat/ChatsList";
import { chats } from "@/constants/api";

export const HomeScreen: FC = () => {
    return (
        <BaseScreenLayout>
            <ChatsList chats={chats} />
        </BaseScreenLayout>
    );
};

import { FC } from "react";
import { TextComponent } from "@/components/common/TextComponent";
import { BaseScreenLayout } from "@/layouts/BaseScreenLayout";

export const ProfileScreen: FC = () => {
    return (
        <BaseScreenLayout>
            <TextComponent text="Profile Screen" />
        </BaseScreenLayout>
    );
};

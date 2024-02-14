import { FC } from "react";
import { TextComponent } from "@/components/common/TextComponent";
import { BaseScreenLayout } from "@/layouts/BaseScreenLayout";

export const AddScreen: FC = () => {
    return (
        <BaseScreenLayout>
            <TextComponent text="Add Screen" />
        </BaseScreenLayout>
    );
};

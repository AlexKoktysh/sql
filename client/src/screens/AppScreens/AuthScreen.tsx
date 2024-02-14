import { FC } from "react";
import { AuthForm } from "@/components/Form/AuthForm";
import { AuthRedirect } from "@/components/Auth/AuthRedirect";
import { CustomSafeArea } from "@/components/App/CustomSafeArea";
import { KeyboardAvoidingLayout } from "@/components/App/KeyboardAvoidingLayout";

export const AuthScreen: FC = () => {
    return (
        <CustomSafeArea>
            <KeyboardAvoidingLayout>
                <AuthForm />
                <AuthRedirect />
            </KeyboardAvoidingLayout>
        </CustomSafeArea>
    );
};

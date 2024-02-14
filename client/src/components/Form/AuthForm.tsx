import { AuthContext } from "@/providers/AuthProviders";
import { AuthStackScreenProps } from "@/types/navigation";
import { useRoute } from "@react-navigation/native";
import { FC, ChangeEvent, useContext } from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { button, rules } from "@/constants";
import { FormController } from "@/components/common/FormController";
import { ButtonComponent } from "@/components/common/ButtonComponent";

type InputsType = {
    password: string;
    email: string;
    onSubmit: (value: ChangeEvent<HTMLInputElement>) => void;
};

export const AuthForm: FC = () => {
    const route = useRoute<AuthStackScreenProps["route"]>();
    const { signInFunction, signUpFunction } = useContext(AuthContext);

    const { ...methods } = useForm<InputsType>({
        mode: "onSubmit",
        defaultValues: { password: "", email: "" },
    });
    const {
        formState: { dirtyFields },
        handleSubmit,
    } = methods;

    const onSubmit: SubmitHandler<InputsType> = ({ ...fields }) => {
        if (route.name === "SignIn") return signInFunction(fields);
        signUpFunction(fields);
    };

    return (
        <View style={styles.container}>
            <FormProvider {...methods}>
                <FormController
                    name="email"
                    placeholder="Login name"
                    rules={rules.email}
                />
                <FormController
                    name="password"
                    placeholder="Password"
                    rules={rules.password}
                    secure
                />
            </FormProvider>
            <ButtonComponent
                onSubmit={handleSubmit(onSubmit)}
                buttonColor="#62CE7B"
                disabled={!(dirtyFields.password && dirtyFields.email)}
                text={button[route.name].text}
                style={styles.button}
                labelStyle={styles.button_label}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 25,
        alignItems: "center",
        height: 200,
        justifyContent: "space-between",
    },
    button: {
        width: "70%",
        borderRadius: 20,
    },
    button_label: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 28,
    },
});

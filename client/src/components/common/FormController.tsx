import { FC } from "react";
import {
    UseControllerProps,
    useController,
    useFormContext,
} from "react-hook-form";
import { View, StyleSheet, Text } from "react-native";
import { TextInputProps as RNTextInputProps } from "react-native-paper";
import { InputComponent } from "@/components/common/InputComponent";

interface TextInputProps extends RNTextInputProps, UseControllerProps {
    name: string;
    defaultValue?: string;
    secure?: boolean;
}

export const FormController: FC<TextInputProps> = (props) => {
    const { name, rules, defaultValue } = props;
    const {
        formState: { errors },
    } = useFormContext();

    const { field } = useController({ name, rules, defaultValue });

    return (
        <View style={styles.base}>
            <InputComponent
                {...props}
                value={field.value}
                onChangeText={field.onChange}
            />
            {!!errors[name] && (
                <View style={styles.errorContainer}>
                    <Text style={styles.error}>
                        {errors[name]?.message as string}
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        width: "100%",
        alignItems: "center",
    },
    container: {
        width: "70%",
        paddingVertical: 3,
        justifyContent: "center",
    },
    content: {
        fontSize: 20,
        lineHeight: 20,
        color: "#3A3A3A",
    },
    errorContainer: {
        flex: -1,
    },
    error: {
        color: "red",
    },
});

import { FC, useState } from "react";
import { StyleSheet } from "react-native";
import {
    TextInput,
    TextInputProps as RNTextInputProps,
} from "react-native-paper";

interface TextInputProps extends RNTextInputProps {
    secure?: boolean;
}

export const InputComponent: FC<TextInputProps> = ({
    placeholder,
    value,
    onChangeText,
    secure = false,
}) => {
    const [secureText, setSecureText] = useState(secure);

    return (
        <TextInput
            dense
            mode="outlined"
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureText}
            right={
                secure && (
                    <TextInput.Icon
                        icon={secureText ? "eye" : "eye-off"}
                        onPress={() => setSecureText(!secureText)}
                    />
                )
            }
            style={styles.container}
            outlineStyle={{ borderWidth: 0 }}
            contentStyle={styles.content}
            theme={{
                roundness: 20,
                colors: {
                    onSurfaceVariant: "#9c9c9c",
                },
            }}
        />
    );
};

const styles = StyleSheet.create({
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
});

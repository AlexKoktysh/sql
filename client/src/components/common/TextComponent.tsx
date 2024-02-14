import { FC } from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

interface IProps {
    text: string;
    size?: number;
    color?: string;
    style?: StyleProp<TextStyle>;
}

export const TextComponent: FC<IProps> = ({
    text,
    size = 14,
    color = "white",
    style = {},
}) => {
    return (
        <Text style={[styles.text, { fontSize: size, color }, style]}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {},
});

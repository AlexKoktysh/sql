import { FC } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { Button } from "react-native-paper";

interface IProps {
    text: string;
    onSubmit: () => void;
    disabled?: boolean;
    buttonColor?: string;
    disabledColor?: string;
    style?: ViewStyle | ViewStyle[];
    labelStyle?: TextStyle | TextStyle[];
}

export const ButtonComponent: FC<IProps> = ({
    text,
    onSubmit,
    disabled = false,
    buttonColor = "green",
    disabledColor = "#94daae",
    style = {},
    labelStyle = {},
}) => {
    return (
        <Button
            mode="contained"
            compact
            buttonColor={buttonColor}
            onPress={onSubmit}
            disabled={disabled}
            style={[
                style,
                { backgroundColor: disabled ? disabledColor : buttonColor },
            ]}
            labelStyle={[labelStyle, disabled && { color: "#FFF" }]}
        >
            {text}
        </Button>
    );
};

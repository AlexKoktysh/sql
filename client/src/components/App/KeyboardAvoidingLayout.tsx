import { FC, ReactElement } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    View,
    StyleSheet,
    Platform,
} from "react-native";

interface IProps {
    children: ReactElement[];
}

export const KeyboardAvoidingLayout: FC<IProps> = ({ children }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                    }}
                >
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});

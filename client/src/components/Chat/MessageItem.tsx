import { FC } from "react";
import { TextComponent } from "../common/TextComponent";
import { useAppSelector } from "@/hooks/useRedux";
import { StyleSheet, View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
    text: string;
    userId: number;
}

export const MessageItem: FC<IProps> = ({ text, userId }) => {
    const id = useAppSelector((state) => state.profileInfo.id);

    return (
        <View style={[styles.container, userId === id && styles.myContainer]}>
            <TextComponent text={text} style={styles.text} />
            <View style={styles.actions}>
                <TextComponent size={10} text="22:15" />
                {userId !== id && (
                    <Ionicons
                        name="checkmark-done-outline"
                        size={16}
                        color="white"
                        style={{ marginLeft: 5 }}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-start",
        flexDirection: "row",
        backgroundColor: "#989898",
        margin: 10,
        paddingHorizontal: 10,
        borderRadius:
            Math.round(
                Dimensions.get("window").width +
                    Dimensions.get("window").height,
            ) / 2,
    },
    myContainer: {
        alignSelf: "flex-end",
        backgroundColor: "#4682B4",
    },
    text: {
        padding: 10,
        textAlign: "left",
        maxWidth: Dimensions.get("window").width * 0.7,
    },
    actions: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        marginLeft: 5,
        paddingBottom: 5,
        width: 50,
    },
});

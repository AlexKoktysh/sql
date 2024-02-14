import { FC } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { TextComponent } from "@/components/common/TextComponent";
import { useNavigation } from "@react-navigation/native";

interface IProps {
    id: number;
    name: string;
    message: string;
}

export const ChatItem: FC<IProps> = ({ name, message, id }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.chatContainer}
            onPress={() =>
                navigation.navigate("Core", {
                    screen: "Home",
                    params: { screen: "Chat", params: { id } },
                })
            }
        >
            <Avatar.Image
                size={50}
                source={require("@Assets/image/avatar.png")}
            />
            <View style={styles.description}>
                <TextComponent text={name} size={16} style={styles.title} />
                <TextComponent text={message} color="#989898" />
            </View>
            <View style={styles.actions}>
                <TextComponent text="11:44" color="#E8E8E8" />
                <View style={styles.count}>
                    <TextComponent size={16} style={styles.title} text="5" />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    chatContainer: {
        flexDirection: "row",
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    description: {
        flex: 1,
        marginLeft: 10,
        gap: 6,
    },
    actions: {
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 6,
    },
    title: {
        fontWeight: "900",
    },
    count: {
        backgroundColor: "red",
        minHeight: 25,
        minWidth: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:
            Math.round(
                Dimensions.get("window").width +
                    Dimensions.get("window").height,
            ) / 2,
    },
});

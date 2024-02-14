import { FC } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextComponent } from "@/components/common/TextComponent";
import { Ionicons } from "@expo/vector-icons";
import { HomeTabScreenProps } from "@/types/navigation";
import { chats } from "@/constants/api";

export const ChatHeader: FC = () => {
    const navigation = useNavigation();
    const route = useRoute<HomeTabScreenProps<"Chat">["route"]>();

    return (
        <View style={style.container}>
            <TouchableOpacity
                style={style.logo}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={24} color="white" />
                <TextComponent text="Back" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            <View style={style.name}>
                <TextComponent
                    text={
                        chats.find((el) => el.id === route.params.id)?.name ??
                        ""
                    }
                />
                <TextComponent text="last seen recently" color="#989898" />
            </View>
            <Avatar.Image
                size={35}
                style={style.avatar}
                source={require("@Assets/image/avatar.png")}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#383535",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    logo: {
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        alignItems: "center",
        flex: 1,
    },
    avatar: {
        width: 70,
        alignItems: "center",
        backgroundColor: "#383535",
    },
});

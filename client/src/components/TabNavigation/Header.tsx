import { FC } from "react";
import { View, StyleSheet } from "react-native";
import { TextComponent } from "@/components/common/TextComponent";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export const Header: FC = () => {
    return (
        <View style={style.container}>
            <View style={style.logo}>
                <FontAwesome name="whatsapp" size={35} color="green" />
                <TextComponent text="What's App" style={{ marginLeft: 15 }} />
            </View>
            <AntDesign name="search1" size={24} color="white" />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    logo: {
        flexDirection: "row",
        alignItems: "center",
    },
});

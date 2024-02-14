import { redirect } from "@/constants";
import { AuthStackScreenProps } from "@/types/navigation";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FC } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const AuthRedirect: FC = () => {
    const navigation = useNavigation();
    const route = useRoute<AuthStackScreenProps["route"]>();
    const handlerRedirect = () => {
        navigation.navigate("Auth", {
            screen: redirect[route.name].redirectUrl,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{redirect[route.name].text}</Text>
            <TouchableOpacity style={styles.button} onPress={handlerRedirect}>
                <Text style={[styles.text, styles.button_text]}>
                    {redirect[route.name].button}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    button: {
        marginLeft: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "700",
    },
    button_text: {
        color: "#62CE7B",
    },
});

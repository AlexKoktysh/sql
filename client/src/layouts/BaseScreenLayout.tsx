import { FC, ReactElement } from "react";
import { View, StyleSheet } from "react-native";

interface IProps {
    children: ReactElement | ReactElement[];
}

export const BaseScreenLayout: FC<IProps> = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#575353",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingHorizontal: 30,
    },
});

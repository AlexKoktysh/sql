import { FC, ReactElement } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IProps {
    children: ReactElement | ReactElement[];
}

export const CustomSafeArea: FC<IProps> = ({ children }) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                {
                    paddingTop: insets.top,
                    flex: 1,
                },
            ]}
        >
            {children}
        </View>
    );
};

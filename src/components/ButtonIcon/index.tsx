import React from "react";
import { Image, View, Text, TouchableOpacityProps } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Discord } from "../../assets";
import { styles } from "./styles";

type ButtonIconProps = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={Discord} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}

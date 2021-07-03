import React from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from "react-native";
import { Discord } from "../../assets";
import { styles } from "./styles";

type ButtonIconProps = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={Discord} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

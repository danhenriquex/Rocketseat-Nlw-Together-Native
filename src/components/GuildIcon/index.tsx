import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";
import { Discord } from "../../assets";
import { CDN_IMAGE } from "../../configs";

// const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
};
// { guildId, iconId }: Props
export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  // "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-icone.png";

  return (
    <View style={styles.container}>
      {iconId !== null ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <Discord width={40} height={40} />
      )}
    </View>
  );
}

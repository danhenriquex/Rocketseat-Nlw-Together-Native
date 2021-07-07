import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { Banner } from "../../assets";
import {
  Background,
  Header,
  ListHeader,
  Member,
  ListDivider,
  ButtonIcon,
} from "../../components";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Danilo",
      avatar_url: "https://github.com/danhenriquex.png",
      status: "online",
    },
    {
      id: "2",
      username: "Daniel",
      avatar_url: "https://github.com/danhenriquex.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={Banner} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}

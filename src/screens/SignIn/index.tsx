import React from "react";
import { Alert, Image, Text, View, ActivityIndicator } from "react-native";
import { LeeSin } from "../../assets";
import { ButtonIcon, Background } from "../../components";
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";

export function SignIn() {
  const { user, SignIn, loading } = useAuth();

  async function handleSignIn() {
    try {
      await SignIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={LeeSin} style={styles.image} resizeMode="stretch" />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`} e organize suas {`\n`} jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}

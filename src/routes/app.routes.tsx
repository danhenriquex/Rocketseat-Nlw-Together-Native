import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { theme } from "../global/styles/theme";
import { AppointmentCreate, AppointmentDetails, Home } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.secondary100 },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  );
}

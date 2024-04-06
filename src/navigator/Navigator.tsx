import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeContext } from "../context/themeContext/ThemeContext";

import HomeScreen from "../screens/HomeScreen";
import LocationScreen from "../screens/LocationScreen";
import ChangeTheme from "../screens/ChangeTheme";
import { NavigationContainer } from "@react-navigation/native";
import { MainTabs } from "./MainTabs";
import { styles } from "../theme/appTheme";

const Stack = createStackNavigator();

export function Navigator() {
  const { theme } = useContext(ThemeContext);

  const {
    theme: { colors },
  } = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"HomeScreen"}
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="PersonajeScreen"
        component={LocationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

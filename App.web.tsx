import React, { useContext } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { Platform, StyleSheet } from "react-native";
import { Navigator } from "./src/navigator/Navigator";
import { ThemeProvider } from "./src/context/themeContext/ThemeContext";

import { MainTabs } from "./src/navigator/MainTabs";

import { ThemeContext } from "./src/context/themeContext/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);  
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer theme={theme}>
      <AppState>
        {Platform.OS === "web" ? <Navigator></Navigator> : <MainTabs />}
      </AppState>
    </NavigationContainer>
  </ThemeProvider>
  );
};

const AppState = ({ children }: any) => {
  return children;
};

export default App;

import { createContext, useEffect, useReducer } from "react";
import {
  ThemeReducer,
  ThemeState,
  lightTheme,
  darkTheme,
} from "./themeReducer";
import { AppState, Appearance, useColorScheme } from "react-native";

interface ThemeContextProps {
  theme: ThemeState; ///theme de reducer
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  //const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    ThemeReducer,
    Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme
    //colorScheme === 'dark' ? darkTheme : lightTheme,
  ); ///todo: tema por defecto de dispositivo

  //////ANDROID
  useEffect(() => {
    AppState.addEventListener("change", (status) => {
      if (status === "active") {
        Appearance.getColorScheme() === "light"
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  ///IOS
  /* useEffect(() => {
    colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  }, [colorScheme]); */

  const setDarkTheme = () => {
    dispatch({ type: "set_dark_theme" });
    console.log("setDarkTheme");
  };
  const setLightTheme = () => {
    dispatch({ type: "set_light_theme" });
    console.log("setLightTheme");
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React, { useContext } from "react";
import { View, Text, Switch } from "react-native";
import { styles } from "../theme/appTheme";
import { ThemeContext } from "../context/themeContext/ThemeContext";

interface Props {
  title: string;
}

const HeaderTitle = ({ title }: Props) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  return (
    <View style={{ marginTop: 25 }}>
      <Text style={{ ...styles.globalTitle, color: colors.text, }}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;

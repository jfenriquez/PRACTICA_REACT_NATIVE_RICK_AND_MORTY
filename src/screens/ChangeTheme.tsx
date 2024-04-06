import React, {useContext, useEffect, useState} from 'react';

import {View, TouchableOpacity, Text, useColorScheme} from 'react-native';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

import Icon from 'react-native-vector-icons/Ionicons';
const ChangeTheme = () => {
  const {setDarkTheme, setLightTheme} = React.useContext(ThemeContext);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    isOn ? setLightTheme() : setDarkTheme();
  }, [isOn]);

  return (
    <View
      style={{
        ...styles.globalMargin,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => setIsOn(!isOn)}
        style={{
          width: 32,
          height: 32,
          borderRadius: 50,
          backgroundColor: colors.text,
          justifyContent: 'center',
        }}>
        {isOn ? (
          <Icon
            style={{
              color: colors.background,
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            name="moon-outline"
          />
        ) : (
          <Icon
            style={{
              color: colors.background,
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            name="sunny-outline"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ChangeTheme;

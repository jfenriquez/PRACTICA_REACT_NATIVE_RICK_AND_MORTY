import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ChangeTheme = () => {
  const {setDarkTheme, setLightTheme} = React.useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="CHANGE THEME" />
      <TouchableOpacity
        onPress={setLightTheme}
        style={{
          width: 150,
          height: 150,
          borderRadius: 20,
          backgroundColor: '#5856D6',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Light
        </Text>
      </TouchableOpacity>
      {/* DARK */}
      <TouchableOpacity
        onPress={setDarkTheme}
        style={{
          width: 150,
          height: 150,
          borderRadius: 20,
          backgroundColor: '#5856D6',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          DARK
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeTheme;

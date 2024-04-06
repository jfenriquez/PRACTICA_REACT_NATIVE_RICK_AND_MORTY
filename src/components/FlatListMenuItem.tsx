import React, {useContext} from 'react';
import {MenuItem} from '../interfaces/appInterfaces';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}
const FlatListMenuItem = ({menuItem}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={colors.primary} size={25} />
        <Text style={{...styles.itemText}}>
          {menuItem.name}--{menuItem.icon}
        </Text>
        {/* <Icon
          style={{flex: 1, textAlign: 'right'}}
          name="chevron-forward-outline"
          color={colors.primary}
          size={25}
        /> */}
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 20,
  },
});

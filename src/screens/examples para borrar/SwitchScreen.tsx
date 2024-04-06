import React from 'react';
import {View, Text, Switch} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {CustomSwitch} from '../components/CustomSwitch';
//import {styles} from '../theme/appTheme';
import {StyleSheet} from 'react-native';

const SwitchScreen = () => {
  const [state, setstate] = React.useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHungry, isHappy} = state;
  const onChange = (value: boolean, field: string) => {
    setstate({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <View style={styles.switchRow}></View>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

export default SwitchScreen;

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

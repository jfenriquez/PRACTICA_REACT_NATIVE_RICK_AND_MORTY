import React from 'react';
import {Switch} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = React.useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled); ///cambiar el stado
  };
  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#5856D6'}}
      thumbColor={isEnabled ? '#010101' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      value={isEnabled}
      onValueChange={toggleSwitch}
    />
  );
};

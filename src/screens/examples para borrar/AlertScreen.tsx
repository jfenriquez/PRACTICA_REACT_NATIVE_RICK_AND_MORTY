import React from 'react';
import {View, Alert, Button} from 'react-native';
//import prompt from 'react-native-prompt-android';

import {styles} from '../theme/appTheme';

const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert('Alert Titless', 'My Alert ssssMsg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  const showProps = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <Button title="Show alert" onPress={showAlert} />
      <Button title="Show props" onPress={showProps} />
    </View>
  );
};

export default AlertScreen;

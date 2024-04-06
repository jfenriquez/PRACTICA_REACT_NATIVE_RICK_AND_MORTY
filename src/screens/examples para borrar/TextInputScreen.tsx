import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {TextInput} from 'react-native-gesture-handler';

import {ScrollView} from 'react-native';
import {Platform} from 'react-native';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
const TextInputScreen = () => {
  const {onChange, first} = useForm({
    name: 'john',
    email: 'fredy',
    phone: '1234567890',
    isSuscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View>
          <HeaderTitle title="TEXT INPUT" />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            placeholderTextColor="rgba(0,0,0,0.3)"
            onChangeText={value => onChange(value, 'name')}
          />

          <TextInput
            style={styles.input}
            placeholder="Ingrese su email"
            autoCorrect={false}
            keyboardType="url"
            autoCapitalize="none"
            placeholderTextColor="rgba(0,0,0,0.3)"
            onChangeText={value => onChange(value, 'email')}
            keyboardAppearance="dark"
          />

          <TextInput
            style={styles.input}
            placeholder="Ingrese su tel"
            autoCorrect={true}
            keyboardType="phone-pad"
            placeholderTextColor="rgba(0,0,0,0.3)"
            onChangeText={value => onChange(value, 'phone')}
          />
          <View style={{flexDirection: 'row'}}>
            <Text>suscribirse</Text>
            <CustomSwitch
              isOn={first.isSuscribed}
              onChange={value => onChange(value, 'isSuscribed')}
            />
          </View>
          <HeaderTitle title={JSON.stringify(first, null, 3)} />
        </View>
        <View style={{height: 100}}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'rgba(0, 97, 1, 0.3)',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 10,
  },
});

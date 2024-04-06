import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {Button, Modal, Text, TextInput, View} from 'react-native';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <HeaderTitle title="Modal Screen" />
      <Button
        title="Open Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />
      <Modal animationType="fade" visible={isVisible} transparent={true} >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 15,
              width: 290,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
            }}>
            <HeaderTitle title="Modal" />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>body Modal</Text>
            <TextInput />
            <Button title="cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {Result} from '../interfaces/personajeInterfaces';

import {ThemeContext} from '../context/themeContext/ThemeContext';

const Card = ({props}: any) => {
  const {id, name, image} = props;

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        borderRadius: 20,
        width: 190,
        height: 200,
        marginHorizontal: '2%',
        paddingBottom: 20,
        paddingHorizontal: '5%',
      }}>
      <View style={styles.ImageContainer}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={{fontSize: 20, textAlign: 'center', color: colors.text}}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  ImageContainer: {
    flex: 1,
    borderRadius: 50,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});

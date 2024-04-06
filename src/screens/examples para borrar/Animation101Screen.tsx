import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, Text, View, Easing} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMovingPosition} =
    useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBlox,
          opacity: opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        title="fadeIN"
        onPress={() => (fadeIn(), startMovingPosition(-100))}
      />
      <Button title="fadeOUT" onPress={fadeOut} />
    </View>
  );
};

export default Animation101Screen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBlox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});

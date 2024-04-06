import React, {useState} from 'react';
import {ActivityIndicator, Animated, Image, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
}
const FadeInImage = ({uri}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(false);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="#5856d6"
          size={30}
        />
      )}
      <Animated.Image
        onLoadEnd={() => finishLoading()}
        source={{uri}}
        style={{
          width: '90%',
          height: 300,
          marginBottom: 10,
          borderRadius: 15,
          opacity,
        }}
      />
    </View>
  );
};

export default FadeInImage;

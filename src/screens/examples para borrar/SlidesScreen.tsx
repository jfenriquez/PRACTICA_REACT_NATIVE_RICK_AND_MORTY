import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageSourcePropType,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Image} from 'react-native';
import {styles} from '../theme/appTheme';
import {Touchable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}
const item: Slide = [
  {title: 'Holas', desc: 'Mundo', img: require('../assets/1.png')},
  {title: 'Holadf', desc: 'Mundo', img: require('../assets/2.png')},
  {title: 'Holadfes', desc: 'Mundo', img: require('../assets/3.png')},
];

const SlidesScreen = ({}: Slide) => {
  const [activeIndex, setActiveIndex] = useState(0);
  ///navigation
  const navigation: any = useNavigation();
  ///render item
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 40,
        }}>
        <Image source={item.img} style={{width: 350, height: 400}} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
        <Text style={{fontSize: 15, fontWeight: '300'}}>{item.desc}</Text>
      </View>
    );
  };

  ////return
  return (
    <SafeAreaView style={{padding: 5, flex: 1, backgroundColor: 'white'}}>
      {/* <HeaderTitle title="Slides_Title" /> */}
      <Carousel
        onSnapToItem={index => setActiveIndex(index)}
        data={item}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        inactiveSlideOpacity={0.9}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={item.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 10,
            backgroundColor: 'red',
          }}
        />
        {activeIndex === 2 ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
            style={{
              flexDirection: 'row',
              backgroundColor: '#5856D6',
              width: 120,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            activeOpacity={0.8}>
            {/* <Icon name="arrow-forward-outline" size={30} color="white" /> */}
            <Text style={{color: 'white', fontSize: 20}}>Entrar</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;

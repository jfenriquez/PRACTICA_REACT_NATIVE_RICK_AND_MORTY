import React, {useContext, useEffect, useState} from 'react';
import {useRickPaginated} from '../hooks/useRickPaginated';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Platform,
  Touchable,
} from 'react-native';
//import { Result, Personaje, Location } from '../interfaces/personajeInterfaces';
import ChangeTheme from './ChangeTheme';

////WEB
import InfiniteScroll from 'react-infinite-scroll-component';

import {ThemeContext} from '../context/themeContext/ThemeContext';
import Card from '../components/Card';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import HeaderTitle from '../components/HeaderTitle';

import Icon from 'react-native-vector-icons/Ionicons';
import SearchScreen from './SearchScreen';
import {styles} from '../theme/appTheme';
import SplashScreen from 'react-native-splash-screen';
const HomeScreen = () => {
  {
    Platform.OS !== 'web' &&
      useEffect(() => {
        SplashScreen.hide();
      }, []);
  }
  const {isLoading, characters, loadCharacter} = useRickPaginated();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const navigation: any = useNavigation();
  console.log('characters', characters);
  return (
    <View
      style={{
        backgroundColor: colors.background,
        height: '110%',
        //alignContent: 'center',
        alignItems: 'center',
      }}>
      <HeaderTitle title="Infinite Scroll Rick and Morty" />
      {isLoading && <ActivityIndicator size="small" color="#00ff00" />}
      <ChangeTheme />

      {/*---------------------------------------- WEB AND MOVIL*/}
      {Platform.OS === 'web' ? (
        <>
          <SearchScreen />
          <InfiniteScroll
            dataLength={characters.length}
            next={loadCharacter}
            hasMore={true}
            loader={<Text style={{color: colors.text}}>Loading...</Text>}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
              {characters.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('PersonajeScreen', item.location)
                  }>
                  <Card props={item} />
                </TouchableOpacity>
              ))}
            </View>
          </InfiniteScroll>
        </>
      ) : (
        <View>
          <FlatList
            numColumns={2}
            style={{
              paddingBottom: 100,
            }}
            data={characters}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={loadCharacter}
            onEndReachedThreshold={4}
            renderItem={({item, index}) => (
              // Utiliza el método map para generar componentes para cada elemento
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('PersonajeScreen', item.location)
                }>
                <Card props={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {Location, Personaje} from '../interfaces/personajeInterfaces';
import {getLocationApi, getPersonajesApi} from '../api/RickMortyApi';
import {styles} from '../theme/appTheme';

import Card from '../components/Card';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export interface LocationInterface {
  navigation: Navigation;
  route: Route;
}

export interface Navigation {}

export interface Route {
  key: string;
  name: string;
  params: Params;
}

export interface Params {
  name: string;
  url: string;
}

export interface LocationArray {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}

const LocationScreen = (props: any) => {
  /////THEME

  const data = props;
  console.log('props', data);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const navigation: any = useNavigation();

  const [isLoading, setIsLoading] = useState(true);

  const [location, setLocation] = useState<LocationArray[]>([]);
  const {route} = props;

  const [images, setImages] = useState<any[]>([]);

  const CargarLocalizacion = useEffect(() => {
    (async () => {
      await loadLocation();
    })();
  }, [props]);

  /////cargar location
  const loadLocation = async () => {
    try {
      setIsLoading(true);
      const resp: any = await getLocationApi(route.params.url);
      setLocation([resp]);
      console.log('url', resp);
      //array de personajes
      const personajesUrl = resp.residents;

      /////img personajes
      const arr: any[] = [];
      for (const personajeUrl of personajesUrl) {
        const img = await getPersonajesApi(personajeUrl);
        arr.push(img.image);
      }
      setImages(arr);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{backgroundColor: colors.background, height: '100%'}}>
      <HeaderTitle title="Localizacion" />

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: colors.primary,
          marginLeft: 10,
          borderColor: colors.text,
          borderWidth: 2,
          borderRadius: 50,
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Icon name="arrow-back" size={30} color={colors.text} /> */}
      </TouchableOpacity>

      {location.map((item, index) => (
        <View key={index}>
          <Text style={{...styles.globalSubTitle, color: colors.text}}>
            {item.type}:{' '}
            {item.dimension !== 'unknown' ? (
              <Text style={styl.text}>{item.dimension}</Text>
            ) : (
              <Text style={styl.text}>{item.name}</Text>
            )}
          </Text>
        </View>
      ))}

      {isLoading ? (
        <View style={{height: '100%'}}>
          <ActivityIndicator size="large" color="#00ff00" />
          <Text style={{...styles.globalSubTitle, color: colors.text}}>
            Cargando residentes ...
          </Text>
        </View>
      ) : null}

      <View style={styl.container}>
        <HeaderTitle title="RESIDENTES:" />
        <FlatList
          data={images}
          keyExtractor={(item, index) => index.toString()}
          //onEndReached={loadCharacter}
          //onEndReachedThreshold={2}
          renderItem={({item, index}) => (
            // Utiliza el método map para generar componentes para cada elemento
            <View key={index}>
              <Image source={{uri: item}} style={styl.image} />
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
        />
      </View>
    </View>
  );
};

export default LocationScreen;

const styl = StyleSheet.create({
  container: {paddingTop: 20},
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 10,
  },
  text: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

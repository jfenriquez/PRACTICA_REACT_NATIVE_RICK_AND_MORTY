import React, {useContext, useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList, Touchable} from 'react-native';
//import { TouchableOpacity } from "react-native-gesture-handler";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useRickSearch} from '../hooks/useRickSearch';
import {Result, Location} from '../interfaces/personajeInterfaces';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const SearchScreen = () => {
  const navigation: any = useNavigation();
  const {theme} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();

  const {isLoading, searchCharacters} = useRickSearch();
  const [term, setTerm] = useState('');
  const [res, setRes] = useState([]);

  return (
    <View
      style={{
        //flex: 1,
        marginTop: top + 10,
        marginHorizontal: 2,
      }}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        onRes={value => setRes(value)}></SearchInput>
      {res.error && (
        <Text style={{color: theme.colors.text, textAlign: 'center'}}>
          No se encontraron resultados
        </Text>
      )}
      {/* ///////AQUI VA EL FLATLIST */}

      <FlatList
        numColumns={2}
        style={{
          paddingBottom: '5%',
        }}
        data={res}
        keyExtractor={(item, index) => index.toString()}
        //onEndReached={loadCharacter}
        onEndReachedThreshold={4}
        renderItem={({item, index}: {item: any; index: number}) => (
          // Utiliza el método map para generar componentes para cada elemento
          <GestureHandlerRootView>
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('PersonajeScreen', item.location)
              }>
              <Card props={item} />
            </TouchableOpacity>
          </GestureHandlerRootView>
        )}
      />
    </View>
  );
};

export default SearchScreen;

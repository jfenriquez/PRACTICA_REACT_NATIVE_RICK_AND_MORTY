import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useRickSearch} from '../hooks/useRickSearch';
import {useDebouncedValue} from '../hooks/useDebouncedValue';
import {Result} from '../interfaces/personajeInterfaces';

interface Props {
  onDebounce: (value: string) => void;
  onRes: (value: []) => void;
}

const SearchInput = ({onDebounce, onRes}: Props) => {
  const {theme} = useContext(ThemeContext);
  const [textValue, setTextValue] = useState('');
  const {isLoading, loadSearchCharacter, searchCharacters} = useRickSearch();

  const debouncedValue = useDebouncedValue(textValue, 500);

  useEffect(() => {
    onDebounce(debouncedValue);
    (async () => {
      if (debouncedValue.length > 0) {
        const res = await loadSearchCharacter(debouncedValue);
        if (res.error) {
          return onRes(res);
        }
        const Result = res.results;
        onRes(Result);
      } else {
        onRes([]);
      }
    })();
  }, [debouncedValue]);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
          autoFocus
        />
        {Platform.OS === 'android' && (
          <Icon name="search-outline" size={20} color="white" />
        )}
      </View>
      {isLoading && <ActivityIndicator size="large" color="#00ff00" />}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    //borderRadius: 50,
  },
  textInputContainer: {
    backgroundColor: 'rgba(203,203,196,0.6)',
    borderRadius: 150,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: 'white',
  },
});

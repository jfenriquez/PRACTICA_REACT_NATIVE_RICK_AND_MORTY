import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigator} from './Navigator';
import SearchScreen from '../screens/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {Platform, useColorScheme} from 'react-native';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';
///import { convertToRGBA } from "react-native-reanimated";
const Tab = createBottomTabNavigator();

export function MainTabs() {
  const {theme} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.colors.background,
      }}
      screenOptions={{
        tabBarStyle: {
          borderTopColor: theme.colors.primary,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: `${theme.colors.background}`,
        },
        tabBarActiveTintColor: theme.colors.background,
        tabBarLabelStyle: {
          fontSize: 13,
          padding: Platform.OS === 'ios' ? 0 : 1,
          margin: Platform.OS === 'ios' ? 0 : 1,
          color: theme.colors.text,
        },
      }}>
      <Tab.Screen
        name="home"
        component={Navigator}
        options={{
          title: 'INICIO',
          headerShown: false,
          headerTitle: 'INICIO',
          tabBarIcon: ({color}) => (
            <View style={{marginBottom: Platform.OS === 'ios' ? 0 : 0}}>
              <Icon name="home-outline" size={20} color={theme.colors.text} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'BUSCAR',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <View style={{marginBottom: Platform.OS === 'ios' ? 0 : 0}}>
              <Icon name="search-outline" size={20} color={theme.colors.text} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

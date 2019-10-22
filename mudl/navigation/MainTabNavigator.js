import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: LinksScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    
    <Ionicons
      focused={focused}
      size={32} name={"ios-contact"} color={"#1ebbd0"}
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: HomeScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'mudl',
  tabBarIcon: ({ focused }) => (
    <Ionicons focused={focused} size={32} name={"ios-heart-half"} color={"#1ebbd0"}/>
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Trend',
  tabBarIcon: ({ focused }) => (
    <Ionicons focused={focused} size={32} name={"md-trending-up"} color={"#1ebbd0"} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;

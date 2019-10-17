import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import FeelingButton from '../components/Button';

export default function HomeScreen() {
  return (
    <View>
      <FeelingButton></FeelingButton>
      <FeelingButton></FeelingButton>
      <FeelingButton></FeelingButton>
      <FeelingButton></FeelingButton>
      <FeelingButton></FeelingButton>
      <FeelingButton></FeelingButton>
    </View>
  
    )};

HomeScreen.navigationOptions = {
  header: null,
};
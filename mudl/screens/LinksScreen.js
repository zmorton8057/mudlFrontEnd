import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Firebase from '../components/Firebase';
import Header from '../components/Header';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Firebase style={styles.login}/>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#00232D',
    fontWeight: 'bold'
  },
  login: {
    paddingTop: 100
  }
});

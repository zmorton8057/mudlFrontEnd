import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Firebase from '../components/Firebase';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Firebase />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    backgroundColor: '#1ebbd0',
    fontWeight: 'bold'
  },
});

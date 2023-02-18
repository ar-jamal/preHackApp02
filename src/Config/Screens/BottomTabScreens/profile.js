import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text
} from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView style={styles.main}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    padding: '5%',
    backgroundColor: 'white',
  },
});

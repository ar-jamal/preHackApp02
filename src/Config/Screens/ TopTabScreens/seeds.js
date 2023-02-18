import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text, View
} from 'react-native';

export default function Seeds() {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Text>Seeds</Text>
      </View>
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

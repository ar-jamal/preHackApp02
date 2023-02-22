import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import CusTextInput from './cusTextInput';
import MenuBar from './menuBar';

export default function CusHeader() {
  return (
    // <SafeAreaView style={styles.main}>
    <View style={styles.main}>
      <MenuBar headerRight={true} />
      <Image
        style={styles.titleImage}
        source={require('../Utils/Images/headerImage.png')}
      />
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    // marginVertical: 12,
    // backgroundColor: 'green',
  },
  titleImage: {
    width: '100%',
    marginBottom: 15,
  },
});

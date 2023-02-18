import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text
} from 'react-native';


export default function OutdoorPlants() {
  return (
    <SafeAreaView style={styles.main}>
        {/* <View> */}
            <Text>OutdoorPlants</Text>
        {/* </View> */}
    </SafeAreaView>
  )}

  const styles = StyleSheet.create({
    main: {
      width: '100%',
      height: '100%',
      padding: '5%',
      backgroundColor: 'white',
    },
})
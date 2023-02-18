import React from 'react';
import {
  Image, SafeAreaView,
  StyleSheet, View
} from 'react-native';


export default function TopPick() {
  return (
    <SafeAreaView style={styles.main}>
        <View style= {styles.productViewM} >
            <Image style={styles.productView} source={require('../../Utils/Images/PeperomiaView.png')}/>
            <Image style={styles.productViewLines} source={require('../../Utils/Images/ProductViewLines.png')}/>
            <Image style={styles.peperomiaPot} source={require('../../Utils/Images/PeperomiaPot.png')}/>
        </View>
    </SafeAreaView>
  )}

  const styles = StyleSheet.create({
    main: {
      width: '100%',
      height: '100%',
      paddingTop: '5%',
      backgroundColor: 'white',
    },
    productViewM: {
      marginTop: 30,
      height: '90%',
      width: '85%',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'blue',
    },
    productView: {
      height: '90%',
      width: '100%',
      resizeMode: 'contain',
      // backgroundColor: 'green',
    },
    productViewLines: {
      height: '90%',
      width: '100%',
      position: 'absolute',
    },
    peperomiaPot: {
      height: 200,
      width: 150,
      // resizeMode: 'contain',
      position: 'absolute',
      right: -70,
      top: -35,

    } 
})





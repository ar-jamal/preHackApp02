import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import CusButton from '../../Components/cusButton';
import CusHeader from '../../Components/cusHeader';
import CusTextInput from '../../Components/cusTextInput';
import { colors } from '../../Utils/colors';
import { Icon } from '../../Utils/icons/Icon';


export default function TopPick() {
  return (
    <SafeAreaView style={styles.main}>
        <View style= {styles.productViewM} >
            <Image style={styles.productView} source={require('../../Utils/Images/ProductViewAll.png')}/>
            <Image style={styles.productViewLines} source={require('../../Utils/Images/ProductViewLines.png')}/>
            <Image style={styles.peperomiaPot} source={require('../../Utils/Images/PeperomiaPlant.png')}/>
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
      // alignItems: 'center',
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
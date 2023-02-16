import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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
import { data } from '../../Utils/data';
import { Icon } from '../../Utils/icons/Icon';

const BottomTab = createMaterialBottomTabNavigator();


export default function TopPick() {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView /* style={{flex: 1, backgroundColor: 'red', paddingTop: '5%', styles.ScrollView}} */>
          {data.map((el, i) => (
            <View key={i} style={styles.productViewM}>
              <Image style={styles.productView} source={el.productView} />
              {el.productViewLines && <Image
                style={styles.productViewLines}
                source={el.productViewLines}
              />}
              {el.product && <Image style={styles.peperomiaPot} source={el.product} />}
            </View>
          ))}
      </ScrollView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    // backgroundColor: 'yellow',
  },
  productViewM: {
    marginTop: 40,
    height: 200,
    width: '85%',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  productView: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    // backgroundColor: 'green',
  },
  productViewLines: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  peperomiaPot: {
    height: 200,
    width: 150,
    // resizeMode: 'contain',
    position: 'absolute',
    right: -70,
    top: -40,
  }
})
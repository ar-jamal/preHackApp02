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
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
import CusButton from './src/Components/cusButton';
import CusHeader from './src/Components/cusHeader';
import CusTextInput from './src/Components/cusTextInput';
import { colors } from './src/Utils/colors';
import { Icon } from './src/Utils/icons/Icon';


export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity style={styles.backButton}>
        <Icon type='ionIcons' name='md-chevron-back-circle' size={60} color={colors.inputLabel} />
      </TouchableOpacity>
      <CusHeader />
      <ScrollView>
        <Image
          style={styles.titleImage}
          source={require('./src/Utils/Images/Signup.png')}
        />
        <Text style={styles.text}>
          Masukan No. Handphone Anda dan tunggu kode autentik dikirimkan
        </Text>
        <CusTextInput label="NISN" placeholder="Nomor NISN" fontSize={16} delOption= {true} iconColor= {colors.themeColorDark} />
        <CusTextInput label="NISN" placeholder="Nomor NISN" fontSize={16} delOption= {true} iconColor= {colors.themeColorDark} />

        <CusButton
          title="KIRIM"
          style={{ backgroundColor: colors.themeColorDark }}
        />
      </ScrollView>
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
  backButton: {
    marginBottom: 10,
    // backgroundColor: 'green',
  },
  titleImage: {
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 3,
  },
});

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
import colors from './src/Utils/colors';


export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity style={styles.backButton}>
        <Image
          /* style= {styles.backButton} */ source={require('./src/Utils/Images/IconBack.png')}
        />
      </TouchableOpacity>
      <CusHeader headerRight={true} />
      <ScrollView>
        <Image
          style={styles.titleImage}
          source={require('./src/Utils/Images/Signup.png')}
        />
        <Text style={styles.text}>
          Masukan No. Handphone Anda dan tunggu kode autentik dikirimkan
        </Text>
        <CusTextInput label="NISN" placeholder="Nomor NISN" fontSize={16} />
        <CusTextInput label="NISN" placeholder="Nomor NISN" fontSize={16} />
        
        <CusButton
          title="KIRIM"
          style={{backgroundColor: colors.themeColorDark}}
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
    marginBottom: 20,
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

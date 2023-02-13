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


export default function Signin() {
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity style={styles.backButton}>
        <Icon type='ionIcons' name='md-chevron-back-circle' size={60} color={colors.inputLabel} />
      </TouchableOpacity>
      <CusHeader />
      <ScrollView>
        <Image
          style={styles.titleImage}
          source={require('./src/Utils/Images/Login.png')}
        />
        <Text style={styles.text}>
          Masukan NISN dan password untuk
          memulai belajar sekarang
        </Text>
        <CusTextInput
          label="Username/ Email"
          placeholder="Masukkan Password"
          fontSize={16}
          type='feather'
          iconName='lock'
          delOption={true}
          delColor={colors.themeColorDark} />
        <CusTextInput 
        label="Password" 
        placeholder="Masukkan Password" 
        fontSize={16}
        type= 'feather'
        iconName= 'lock' 
        delOption={true} 
        delColor={colors.themeColorDark} />
        <TouchableOpacity>
          <Text style={[styles.linkText]}>
            Lupa password
          </Text>
        </TouchableOpacity>

        <CusButton
          title="MULAI BELAJAR"
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
  linkText: {
    fontSize: 15,
    fontWeight: '400',
    borderBottomWidth: 1.7,
    // marginTop: 8,
    alignSelf: 'flex-end',
    color: 'black',
    borderBottomColor: 'black',
    // backgroundColor: 'yellow'
  },
});

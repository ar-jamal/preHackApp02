import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import CusButton from '../../Components/cusButton';
import CusTextInput from '../../Components/cusTextInput';
import MenuBar from '../../Components/menuBar';
import {cusColors} from '../../Utils/colors';
import {Icon} from '../../Utils/icons/Icon';

export default function Signup({navigation}) {
  const onBackPressHandler = () => {
    navigation.goBack();
  };

  const onSubmitHandler = () => {
    navigation.navigate('BottomTabNav');
  };

  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPressHandler}>
        <Icon
          type="ionIcons"
          name="md-chevron-back-circle"
          size={60}
          color={cusColors.inputLabel}
        />
      </TouchableOpacity>
      <MenuBar />
      <ScrollView>
        <Image
          style={styles.titleImage}
          source={require('../../Utils/Images/Signup.png')}
        />
        <Text style={styles.text}>
          Masukan No. Handphone Anda dan tunggu kode autentik dikirimkan
        </Text>
        <CusTextInput
          label="NISN"
          placeholder="Nomor NISN"
          fontSize={16}
          delOption={true}
          iconColor={cusColors.themeColorDark}
        />
        <CusTextInput
          label="NISN"
          placeholder="Nomor NISN"
          fontSize={16}
          delOption={true}
          iconColor={cusColors.themeColorDark}
        />

        <CusButton
          title="KIRIM"
          onPress={onSubmitHandler}
          // style={{ backgroundColor: cusColors.themeColorDark }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    paddingHorizontal: '5%',
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

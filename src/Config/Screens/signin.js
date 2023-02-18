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

export default function Signin({navigation}) {
  const onBackPressHandler = () => {
    navigation.goBack();
  };
  const onLinkPressHandler = () => {
    navigation.navigate('Signup');
  };
  const onSubmitHandler = () => {
    navigation.navigate('Signup');
  };
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPressHandler}>
        <Icon
          type="ionIcons"
          name="md-chevron-back-circle"
          size={55}
          color={cusColors.inputLabel}
        />
      </TouchableOpacity>
      <MenuBar />
      <ScrollView>
        <Image
          style={styles.titleImage}
          source={require('../../Utils/Images/Login.png')}
        />
        <Text style={styles.text}>
          Masukan NISN dan password untuk memulai belajar sekarang
        </Text>
        <CusTextInput
          label="Username/ Email"
          placeholder="Masukkan Password"
          fontSize={16}
          type="feather"
          iconName="lock"
          delOption={true}
          delColor={cusColors.themeColorDark}
        />
        <CusTextInput
          label="Password"
          placeholder="Masukkan Password"
          fontSize={16}
          type="feather"
          iconName="lock"
          delOption={true}
          delColor={cusColors.themeColorDark}
        />
        <TouchableOpacity onPress={onLinkPressHandler}>
          <Text style={[styles.linkText]}>Lupa password</Text>
        </TouchableOpacity>

        <CusButton
          onPress={onSubmitHandler}
          title="MULAI BELAJAR"
          style={{backgroundColor: cusColors.themeColorDark}}
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

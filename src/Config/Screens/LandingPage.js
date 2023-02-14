import React from 'react';
import {
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackgroundBase,
} from 'react-native'
import CusButton from '../../Components/cusButton';
import { colors } from '../../Utils/colors';

export default function LandingPage({navigation}) {

  const onSubmitHandler= () => {
    navigation.navigate('Signin')
  }
  return (
    <SafeAreaView style={styles.main}>
      {/* <Text>LandingPage</Text> */}
      <StatusBar
        backgroundColor="white"
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.header}>
          <Image style={styles.linesBg} source={require('../../Utils/Images/Vector.png')} />
          <View style={styles.logoView}>
            <Image style={styles.logo} source={require('../../Utils/Images/Logo.png')} />
            <Image style={styles.textImage} source={require('../../Utils/Images/Plantify.png')} />
          </View>
        </View>
        <View style={styles.body}>
          <Image source={require('../../Utils/Images/GetReadyText.png')} />
          <Text style={styles.text}>Jelajahi AiLearn untuk menambah kemampuanmu
            dalam mengoperasikan Adobe Illustrator</Text>
        </View>
        <CusButton
          title='MASUK'
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
        onPress= {onSubmitHandler}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'yellow'
  },
  header: {
    width: '100%',
    height: '67%',
    // flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
    backgroundColor: /* "red" */ colors.themeColorDark,
  },
  linesBg: {
    flex: 1,
  },
  logoView: {
    width: '100%',
    height: '70%',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    // left: '10%',
    // top: '20%',
    // backgroundColor: "yellow"
  },
  logo: {
    height: '75%',
    // aspectRatio: 1,
    resizeMode: "contain",
    // backgroundColor: 'orange'
  },
  textImage: {
    resizeMode: "contain",
    // backgroundColor: 'red',
  },
  body: {
    width: '100%',
    // flex: 6,
    paddingTop: '6%',
    marginLeft: '8%',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    marginTop: 12,
  }
});
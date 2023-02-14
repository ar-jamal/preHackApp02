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
import CusButton from './cusButton';
import MenuBar from './menuBar';
import CusTextInput from './cusTextInput';
import { colors } from '../Utils/colors';
import { Icon } from '../Utils/icons/Icon';


export default function CusHeader() {
  return (
    <SafeAreaView style={styles.main}>
      <MenuBar headerRight={true} />
      <ScrollView>
        <Image
          style={styles.titleImage}
          source={require('../Utils/Images/headerImage.png')}
        />
        <View style={styles.searchBarMain} >
          <CusTextInput
            inputMainStyle={{ flex: 8, marginTop: 0, /* backgroundColor: 'yellow', */ }}
            inputStyle={{ borderRadius: 18, borderColor: 'black', marginTop: 0, }}
            iconStyle={{ marginHorizontal: 15 }}
            type='feather'
            iconName='search'
            placeholder="Search"
            fontSize={16}
            delSource={require('../Utils/Images/DelIcon.png')}
            delOption={true}
          />
          <Image style={styles.menu} source={require('../Utils/Images/Menu02.png')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  backButton: {
    marginBottom: 10,
    // backgroundColor: 'green',
  },
  titleImage: {
    width: '100%',
    marginBottom: 30,
  },
  searchBarMain: {
    // height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'space-between',
    // backgroundColor: "powderblue"
  },
  menu: {
    height: '100%',
    width: 46,
    marginLeft: 14,
    resizeMode: 'stretch',
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

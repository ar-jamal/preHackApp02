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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TopPick from './topPick';
import IndoorPlants from './indoorPlants';
import OutdoorPlants from './outdoorPlants';
import Seeds from './seeds';
import Plants from './plants';
import { NavigationContainer } from '@react-navigation/native';


const TopTab = createMaterialTopTabNavigator();

// const tabBarOptions = {
//   indicatorStyle: { backgroundColor: 'blue' },
//   backgroundColor: 'green',
// };

function TopTabNav() {
  return (
    <NavigationContainer independent= {true} >
      <TopTab.Navigator 
        // tabBarOptions={tabBarOptions}
        screenOptions={{
          tabBarAllowFontScaling: true,
          tabBarStyle: { backgroundColor: 'powderblue', height: "10%", minHeight: "2%", /* margin: '5%' */ },
          tabBarIndicatorStyle: {
            backgroundColor: 'blue',
            margin: 20,
          },
        }}
      >
        {/* <CusHeader /> */}
        <TopTab.Screen
          options={{
            backgroundColor: 'green',
          }}
          name="TopPick"
          component={TopPick}
        />
        <TopTab.Screen  name="Indoor" component={IndoorPlants} />
        <TopTab.Screen name="Outdoor" component={OutdoorPlants} />
        <TopTab.Screen name="seeds" component={Seeds} />
        <TopTab.Screen name="Plants" component={Plants} />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}


export default function Home() {
  return (
    <SafeAreaView style={styles.main}>
      <CusHeader headerRight={true} />
      <TopTabNav />
      <ScrollView>

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

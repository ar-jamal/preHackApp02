import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CusHeader from '../../Components/cusHeader';
import CusTextInput from '../../Components/cusTextInput';
import {data} from '../../Utils/data';
import IndoorPlants from './TopTabScreens/indoorPlants';
import OutdoorPlants from './TopTabScreens/outdoorPlants';
import Plants from './TopTabScreens/plants';
import Seeds from './TopTabScreens/seeds';
import TopPick from './TopTabScreens/topPick';

const TopTab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <View style={styles.mainView}>
      <CusHeader />

      <TopTab.Navigator
        screenOptions={{
          // tabBarContentContainerStyle: {
          //   backgroundColor: 'yellow',
          //   // height: 30,
          // },
          tabBarPressOpacity: 1,
          // headerShown: false,
          tabBarStyle: {
            // backgroundColor: 'powderblue',
            height: 45,
            minHeight: '2%', 
            width: '100%',
            alignItems: 'center' /* marginHorizontal: 40, */,
            elevation: 0,
            // width: 300,
          },
          tabBarItemStyle: {
            width: 90,
            // alignItems: 'flex-start',
            // justifyContent: 'flex-start',
            // borderLeftWidth: 1,
            // height: 30,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'blue',
            width: 30,
            alignItems: 'center',
            left: "5%",
          },
          tabBarScrollEnabled: true,
          lazy: true,
          tabBarLabelStyle: {
            textTransform: 'capitalize',
            fontSize: 13,
            fontWeight: '400',
            shadowColor: 'white',
          },
        }}>
        <TopTab.Screen name="TopPick" component={TopPick} />
        <TopTab.Screen name="Indoor" component={IndoorPlants} />
        <TopTab.Screen name="Outdoor" component={OutdoorPlants} />
        <TopTab.Screen name="seeds" component={Seeds} />
        <TopTab.Screen name="Plants" component={Plants} />
      </TopTab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    // justifyContent: 'flex-start'
  },
  botTab: {
    height: 25,
    backgroundColor: 'yellow',
  },
});

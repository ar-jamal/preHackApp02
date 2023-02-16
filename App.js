import React from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CusHeader from './src/Components/cusHeader';

import LandingPage from './src/Config/Screens/LandingPage';
import Signin from './src/Config/Screens/signin';
import Signup from './src/Config/Screens/signup';
// import TopTabNav from './src/Config/Screens/TopTabNav';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopPick from './src/Config/Screens/topPick';
import IndoorPlants from './src/Config/Screens/indoorPlants';
import OutdoorPlants from './src/Config/Screens/outdoorPlants';
import Seeds from './src/Config/Screens/seeds';
import Plants from './src/Config/Screens/plants';
import TopTabNav from './src/Config/Screens/TopTobNav';

const TopTab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.mainView}>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="TopTabNav" component={TopTabNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    // justifyContent: 'flex-start'
  },
});
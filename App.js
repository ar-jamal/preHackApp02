import React from 'react';
import {View, StyleSheet, Animated, TouchableOpacity, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingPage from './src/Config/Screens/LandingPage';
import Signin from './src/Config/Screens/signin';
import Signup from './src/Config/Screens/signup';
// import TopTabNav from './src/Config/Screens/TopTabNav';
import TopTabNav from './src/Config/Screens/home';
import BotTabNav from './src/Config/Screens/BottomTabScreens/bottomTabNav';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.mainView}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="BottomTabNav" component={BotTabNav}  />
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

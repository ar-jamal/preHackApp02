import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Signup from './src/Config/Screens/signup';
import Home from './src/Config/Screens/home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CusHeader from './src/Config/Components/header';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Signin02() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>sing in screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

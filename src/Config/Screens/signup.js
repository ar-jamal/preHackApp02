mport React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Signup from './src/Config/Screens/signup';
import Home from './src/Config/Screens/home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CusHeader from './src/Config/Components/header';
import {View, StyleSheet, Animated, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Signin from './src/Config/Screens/signin';

export default function Signup () {
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>signup screen</Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {View, StyleSheet} from 'react-native';

import Favorites from './favorite';
import ShoppingCart from './shoppingCart';
import Profile from './profile';
import Home from '../home';

const BotTab = createMaterialBottomTabNavigator();

export default function BotTabNav() {
  return (
    <View style={styles.mainView}>
      <BotTab.Navigator>
        <BotTab.Screen name="Home" component={Home} />
        <BotTab.Screen name="Favorites" component={Favorites} />
        <BotTab.Screen name="ShoppingCart" component={ShoppingCart} />
        <BotTab.Screen name="Profile" component={Profile} />
      </BotTab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    // justifyContent: 'flex-start'
  },
  //   botTab: {
  //     height: 25,
  //     backgroundColor: 'yellow',
  //   },
});

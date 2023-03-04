import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {View, StyleSheet} from 'react-native';

import Favorites from './favorite';
import ShoppingCart from './shoppingCart';
import Profile from './profile';
import Home from '../home';
import {Icon} from '../../../Utils/icons/Icon';
import {cusColors} from '../../../Utils/colors';
import {TabView} from 'react-native-tab-view';

const BotTab = createMaterialBottomTabNavigator();

export default function BotTabNav() {
  return (
    <View style={styles.mainView}>
      <BotTab.Navigator
        labeled={false}
        barStyle={{
          height: 65,
          position: 'absolute',
          overflow: 'hidden',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'green',
        }}
        screenOptions={{tabBarColor: 'black'}}>
        <BotTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Icon type="fontAwesome" name="home" size={20} color="black" />
            ),
          }}
        />
        <BotTab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: () => (
              <Icon type="fontAwesome" name="home" size={20} color="black" />
            ),
          }}
        />
        <BotTab.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            tabBarIcon: () => (
              <Icon type="fontAwesome" name="home" size={20} color="black" />
            ),
          }}
        />
        <BotTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Icon type="fontAwesome" name="home" size={20} color="black" />
            ),
          }}
        />
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

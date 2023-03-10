import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import Favorites from './favorite';
import ShoppingCart from './shoppingCart';
import Profile from './profile';
import Home from '../home';
import { Icon } from '../../../Utils/icons/Icon';
import { cusColors } from '../../../Utils/colors';
import { TabView } from 'react-native-tab-view';

const BotTab = createMaterialBottomTabNavigator();
const BTab = createBottomTabNavigator();

export default function BotTabNav() {
  return (
    <View style={styles.mainView}>
      <BTab.Navigator
        
        // shifting= {true}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarColor: 'black',
          tabBarStyle: {
            // height: 65,
            position: 'absolute',
            // overflow: 'hidden',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: 'green',
          }
        }}>
        <BTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Icon type="antDesign" name="home" size={20} color="black" />
            ),
            tabBarColor: 'green',
          }}
        />
        <BTab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type="materialIcons"
                name={focused ? 'favorite' : 'favorite-border'}
                size={20}
                color="black"
              />
            ),
          }}
        />
        <BTab.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type="materialCommunityIcons"
                name={focused ? 'shopping' : 'shopping-outline'}
                size={20}
                color="black"
              />
            ),
          }}
        />
        <BTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Icon type="antDesign" name="user" size={20} color="black" />
            ),
          }}
        />
      </BTab.Navigator>
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

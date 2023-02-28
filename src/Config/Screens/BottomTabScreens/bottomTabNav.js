import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, StyleSheet } from 'react-native';

import Favorites from './favorite';
import ShoppingCart from './shoppingCart';
import Profile from './profile';
import Home from '../home';
import { Icon } from '../../../Utils/icons/Icon';
import { cusColors } from '../../../Utils/colors';

const BotTab = createMaterialBottomTabNavigator();

export default function BotTabNav() {
  return (
    <View style={styles.mainView}>
      <BotTab.Navigator
        barStyle={{
          height: 65,
          position: 'absolute',
          overflow: 'hidden',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: cusColors.themeColorDark,
        }}
      >
        <BotTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Icon type='fontAwesome' name='home' size={25} color='black' />
            )
          }}
        />
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

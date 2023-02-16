import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';
import CusHeader from '../../Components/cusHeader';
import IndoorPlants from './indoorPlants';
import OutdoorPlants from './outdoorPlants';
import Plants from './plants';
import Seeds from './seeds';
import TopPick from './topPick';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabNav() {
  return (
    <View style={styles.mainView} >
      <CusHeader />
      <TopTab.Navigator
        screenOptions={{
          tabBarPressOpacity: 5,
          // headerShown: false,
          tabBarStyle: { /* backgroundColor: 'powderblue', */ height: 45, minHeight: "2%", width: '100%', alignItems: 'center', /* marginHorizontal: 40, */ },
          tabBarIndicatorStyle: {
            backgroundColor: 'blue',
            // width: 30,
            // alignSelf: 'center',
            // paddingHorizontal: 80,
          },
          tabBarScrollEnabled: true,
          lazy: true,
          tabBarLabelStyle: {
            textTransform: 'capitalize',
            fontSize: 14,
            shadowColor: 'white'
          }
        }}
      >
        <TopTab.Screen
          options={{
            backgroundColor: 'green',
          }}
          name="TopPick"
          component={TopPick}
        />
        <TopTab.Screen name="Indoor" component={IndoorPlants} />
        <TopTab.Screen name="Outdoor" component={OutdoorPlants} />
        <TopTab.Screen name="seeds" component={Seeds} />
        <TopTab.Screen name="Plants" component={Plants} />
      </TopTab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    paddingHorizontal: '5%',
    backgroundColor: 'white'
    // justifyContent: 'flex-start'
  },
});


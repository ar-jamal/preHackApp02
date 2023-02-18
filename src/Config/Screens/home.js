import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, StyleSheet} from 'react-native';
import CusHeader from '../../Components/cusHeader';
import IndoorPlants from './ TopTabScreens/indoorPlants';
import OutdoorPlants from './ TopTabScreens/outdoorPlants';
import Plants from './ TopTabScreens/plants';
import Seeds from './ TopTabScreens/seeds';
import TopPick from './ TopTabScreens/topPick';

const TopTab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <View style={styles.mainView}>
      {/* <CusHeader
        // onSearchPress={onSearchPressHandler}ß
        onChangeText={e => setInputText(e)}
        onDelete={() => setInputText('')}
      /> */}
      <TopTab.Navigator
        screenOptions={{
          tabBarPressOpacity: 1,
          // headerShown: false,
          tabBarStyle: {
            /* backgroundColor: 'powderblue', */ height: 45,
            minHeight: '2%',
            width: '100%',
            alignItems: 'center' /* marginHorizontal: 40, */,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'blue',
          },
          tabBarScrollEnabled: true,
          lazy: true,
          tabBarLabelStyle: {
            textTransform: 'capitalize',
            fontSize: 14,
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

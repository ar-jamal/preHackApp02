// import React from 'react';
// import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
// import {create} from 'react-test-renderer';
// import CusTextInput from './cusTextInput';
// import MenuBar from './menuBar';

// export default function CusSearch(
//   onSearchPress,
//   onChangeText,
//   onDelete,
//   value,
// ) {
//   return (
//     <View style={styles.searchBarMain}>
//       <CusTextInput
//         inputMainStyle={{
//           flex: 8,
//           // marginTop: 0 /* backgroundColor: 'yellow', */,
//         }}
//         inputStyle={{borderRadius: 18, borderColor: 'black', marginTop: 0}}
//         iconStyle={{marginHorizontal: 15}}
//         type="feather"
//         iconName="search"
//         placeholder="Search"
//         fontSize={16}
//         // ('../Utils/Images/DelIcon.png'
//         delSource={require('../Utils/Images/DelIcon.png')}
//         delOption={true}
//         value={value}
//         onSearchPress={onSearchPress}
//         onChangeText={onChangeText}
//         onDelete={onDelete}
//       />
//       <Image
//         style={styles.menu}
//         source={require('../Utils/Images/Menu02.png')}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   searchBarMain: {
//     height: 45,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 15,
//     // backgroundColor: 'powderblue',
//   },
//   menu: {
//     height: '100%',
//     width: 46,
//     marginLeft: 14,
//     resizeMode: 'stretch',
//   },
// });

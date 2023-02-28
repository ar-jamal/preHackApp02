import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import CusTextInput from '../../../Components/cusTextInput';
import CusSearch from '../../../Components/searchBar';
import { data } from '../../../Utils/data';

export default function TopPick() {
  const [inputText, setInputText] = useState('');
  const [filterList, setFilterList] = useState(data);

  const onSearchPressHandler = () => {
    setFilterList([
      ...data.filter(el => (
        el.productCategory.includes(inputText.toLowerCase())
      ))
    ]);
    // console.log(filterList);
  };
  useEffect(() => {
    if (!inputText) {
      onSearchPressHandler();
    }
  }, [inputText]);

  return (
    // <SafeAreaView style={styles.main}>
    <View style={styles.main}>
      {/* <CusSearch
        onSearchPress={onSearchPressHandler}
        onChangeText={el => setInputText(el)}
        onDelete={() => setInputText('')}
        value={inputText}
      /> */}
      <View style={styles.searchBarMain}>
        <CusTextInput
          inputMainStyle={{
            flex: 8,
            // marginTop: 0 /* backgroundColor: 'yellow', */,
          }}
          inputStyle={{ borderRadius: 18, borderColor: 'black', marginTop: 0 }}
          iconStyle={{ marginHorizontal: 15 }}
          type="feather"
          iconName="search"
          placeholder="Search"
          fontSize={16}
          // ('../Utils/Images/DelIcon.png'
          delSource={require('../../../Utils/Images/DelIcon.png')}
          delOption={true}
          value={inputText}
          onPress={onSearchPressHandler}
          onChangeText={el => setInputText(el)}
          onDelete={() => setInputText('')}
        />
        <Image
          style={styles.menu}
          source={require('../../../Utils/Images/Menu02.png')}
        />
      </View>
      <ScrollView>
        {/* <DropDownMenu /> */}
        {filterList.map((el, i) => (
          <View key={i} style={styles.productViewM}>
            <Image style={styles.productView} source={el.productView} />
            {el.productViewLines && (
              <Image
                style={styles.productViewLines}
                source={el.productViewLines}
              />
            )}
            {el.product && (
              <Image style={styles.peperomiaPot} source={el.product} />
            )}
          </View>
        ))}
      </ScrollView>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  searchBarMain: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    // backgroundColor: 'powderblue',
  },
  menu: {
    height: '100%',
    width: 46,
    marginLeft: 14,
    resizeMode: 'stretch',
  },
  productViewM: {
    marginTop: 40,
    height: 200,
    width: '85%',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  productView: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    // backgroundColor: 'green',
  },
  productViewLines: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  peperomiaPot: {
    height: 200,
    width: 150,
    position: 'absolute',
    right: -70,
    top: -40,
  },
  bottomTab: {
    width: '100%',
    height: 40,
    backgroundColor: 'powderblue',
  },
});

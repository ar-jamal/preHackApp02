import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import CusHeader from '../../../Components/cusHeader';
import CusSelect from '../../../Components/cusSelect';
import {data} from '../../../Utils/data';

export default function TopPick() {
  const [inputText, setInputText] = useState('');
  const [filterList, setFilterList] = useState(data);

  const onSearchPressHandler = () => {
    // console.log(data);
    setFilterList([
      ...filterList.filter(el => {
        el.productCategory.includes(inputText.toLowerCase());
      }),
    ]);
    // );
    console.log(filterList);
  };
  return (
    <SafeAreaView style={styles.main}>
      <CusHeader
        onSearchPress={onSearchPressHandler}
        onChangeText={e => setInputText(e)}
        onDelete={() => setInputText('')}
      />
      <CusSelect />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
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

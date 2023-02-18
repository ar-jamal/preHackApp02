import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import CusModal from '../../../Components/cusModal';
import CusRadio from '../../../Components/cusRadioButton';
import CustomToggle from '../../../Components/cusSwitch';

export default function Favorites() {
  const [radioText, setRadioText] = useState('');
  const [element, setElement] = useState({});

  const data = [
    {
      label: 'data 1',
    },
    {
      label: 'data 2',
    },
  ];
  // const currentValue = data.find();
  // console.log(currentValue);
  // console.log(element);
  return (
    <SafeAreaView style={styles.main}>
      <Text>Favorites</Text>
      {/* <CusRadio initial={2} data={data} onSelect={el => setElement(el)} /> */}
      <CustomToggle />
      <CusModal />

      <Text>{radioText}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    padding: '5%',
    backgroundColor: 'white',
  },
});

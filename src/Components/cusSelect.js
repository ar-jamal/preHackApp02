import Select, {SelectItem} from '@redmin_delishaj/react-native-select';
import {useState} from 'react';
import {StyleSheet} from 'react-native';

const data = [
  {text: 'Option 1', value: 1},
  {text: 'Option 2', value: 2},
  {text: 'Option 3', value: 3},
];

export default function CusSelect({onClick, width}) {
  const [selectedItem, setSelectedItem] = useState('');
  console.log(selectedItem);

  return (
    <Select
      search={true}
      data={data}
      onSelect={value => setSelectedItem(value)}
      value={selectedItem}
      zIndex={999} // for ios
      onClick={onClick}
      width={width}
      noDataText="no data exists"
      //   noDataComponent={() => {'anyComponent'}}
      textBoxStyle={styles.textBoxStyle}
      textBoxTextStyle={styles.textBoxTextStyle}
    />
  );
}

const styles = StyleSheet.create({
  textBoxStyle: {
    width: '100%',
    height: '32%',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'black',
    marginVertical: 12,
    // backgroundColor: 'blue',
  },
  textBoxTextStyle: {
    // fontWeight: '500',
    color: 'blue',
    // fontSize: 15,
  },
});

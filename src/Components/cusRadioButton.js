import RadioButtonRN from 'radio-buttons-react-native';
import {Icon} from '../Utils/icons/Icon';

export default function CusRadio({initial, onSelect, data}) {
  return (
    <RadioButtonRN
    //   box={true}
      initial={initial}
      data={data}
      selectedBtn={onSelect}
      icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
    />
  );
}

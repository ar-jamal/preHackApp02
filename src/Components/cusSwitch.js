// import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {cusColors} from '../Utils/colors';
import SwitchToggle from 'react-native-switch-toggle';

const CustomToggle = props => {
  const [toggle, setToggle] = useState(false);

  return (
    <SwitchToggle
      switchOn={toggle}
      onPress={() => setToggle(!toggle)}
      circleColorOn={props.ccTogOn || cusColors.brownShades01}
      circleColorOff={props.ccTogOff || 'green'}
      backgroundColorOn={props.bgTogOn || cusColors.brownThemeLight}
      backgroundColorOff={props.bgTogOff || 'lightgreen'}
      containerStyle={{
        marginTop: props.marginTop ?? 12,
        // padding: 16,
        width: 35,
        aspectRatio: 2.8,
        borderRadius: 25,
        // padding: 5,
      }}
      circleStyle={{
        width: 20,
        aspectRatio: 1,
        borderRadius: 11.5,
      }}
    />
  );
};

export default CustomToggle;

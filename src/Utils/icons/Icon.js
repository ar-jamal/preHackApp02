import React from 'react';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome5Pro,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Fontisto,
  Octicons,
  Zocial,
  SimpleLineIcons
} from './IconList';
import { TouchableOpacity } from 'react-native';

export const Icon = ({ type, ...props }) => {
  switch (type) {
    case 'antDesign':
      return  <AntDesign {...props} /> 
    case 'entypo':
      return  <Entypo {...props} /> 
    case 'evilIcons':
      return  <EvilIcons {...props} /> 
    case 'feather':
      return <Feather {...props} />;
    case 'fontAwesome5':
      return <FontAwesome5 {...props} />;
    case 'fontAwesome5Pro':
      return <FontAwesome5Pro {...props} />;
    case 'fontIsto':
      return <Fontisto {...props} />;
    case 'foundation':
      return <Foundation {...props} />;
    case 'ionIcons':
      return <Ionicons {...props} />;
    case 'materialIcons':
      return <MaterialIcons {...props} />;
    case 'materialCommunityIcons':
      return <MaterialCommunityIcons {...props} />;
    case 'octIcons':
      return <Octicons {...props} />;
    case 'zocial':
      return <Zocial {...props} />;
    case 'simpleLineIcons':
      return <SimpleLineIcons {...props} />;
    // case 'custom':f
    //   return <CustomIcon {...props} />;
  }
  return <FontAwesome {...props} />;
};

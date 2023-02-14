import {StyleSheet} from 'react-native';
import {TouchableOpacity, Text} from 'react-native';
import {colors} from '../Utils/colors';
// import cusColors from "../Utils/colors"

export default function CusButton({title, onPress, style, styleChild, width}) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, styleChild]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // height: '7%',
    paddingVertical: 12,
    marginTop: 30,
    marginBottom: 35,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 50,
    // borderBottomLeftRadius: 20,
    // borderBottomWidth: 2,
    backgroundColor: colors.themeColorDark,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    // margin: 15,
  },
});

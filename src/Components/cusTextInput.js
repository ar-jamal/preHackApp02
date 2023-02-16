import { StyleSheet, View } from 'react-native';
import { TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { colors } from '../Utils/colors';
import { Icon } from '../Utils/icons/Icon'
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default function CusTextInput({
  inputMainStyle,
  label,
  labelColor,
  delColor,
  iconColor,
  marginLeft,
  fontSize,
  onChangeText,
  value,
  onDelete,
  placeholder,
  keyboardType,
  type,
  iconName,
  delType,
  delIconName,
  delOption,
  delSource,
  inputStyle,
  iconStyle,
}) {
  return (
    <View style={[{ marginTop: 12 }, inputMainStyle]}>
      {label && <Text
        style={{
          color: labelColor ?? colors.inputLabel,
          marginLeft: marginLeft,
          marginTop: 10,
          fontSize: fontSize ?? 12,
        }}>
        {label}
      </Text>}
      <View style={[styles.inputView, inputStyle]}>
        <Icon style={[styles.IconUser, iconStyle]}
          type={type ?? 'simpleLineIcons'}
          name={iconName ?? "user"}
          size={23}
          color={iconColor ?? "black"} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor='black'
        // keyboardType={keyboardType}
        />
        {!!delOption && (
          <TouchableOpacity style={styles.delView} onPress={onDelete}>
            {delType && <Icon
              type={delType ?? 'feather'}
              name={delIconName ?? 'delete'}
              size={23}
              color={delColor ?? 'black'} />}
            <Image style={styles.delImage} source={delSource} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    padding: 6,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    backgroundColor: colors.inputBg,
  },
  IconUser: {
    flex: 1,
    marginRight: 9,
    resizeMode: 'contain',
    // backgroundColor: 'green',
  },
  input: {
    flex: 10,
    height: '100%',
    // width: '83%',
    justifyContent: 'center',
    padding: 5,
    // backgroundColor: 'yellow',
  },
  delView: {
    // flex: 1,
    width: 30,
    // height: '100%',
    // aspectRatio: 1,
  },
  delImage: {
    height: '100%',
    resizeMode: 'contain',
    // backgroundColor: 'yellow',
  }

});

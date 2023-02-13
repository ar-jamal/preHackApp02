import { StyleSheet, View } from 'react-native';
import { TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { colors } from '../Utils/colors';
import { Icon } from '../Utils/icons/Icon'
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default function CusTextInput({
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
  iconName,
  type,
  delOption,
  delBackgroundColor,
}) {
  console.log(delOption)
  return (
    <View style={{ marginTop: 12 }}>
      {label && <Text
        style={{
          color: labelColor ?? colors.inputLabel,
          marginLeft: marginLeft,
          marginTop: 10,
          fontSize: fontSize ?? 12,
        }}>
        {label}
      </Text>}
      <View style={styles.inputView}>
        <Icon style={styles.IconUser}
          type={type ?? 'simpleLineIcons'}
          name={iconName ?? "user"}
          size={23}
          color={iconColor ?? "black"} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        // keyboardType={keyboardType}
        />
        {!!delOption && (
          <TouchableOpacity style={styles.delView} onPress={onDelete}>
            <Icon
              type='feather'
              name='delete'
              size={23}
              color={delColor ?? 'black'} />
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
    height: 50,
    padding: 7,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    backgroundColor: colors.inputBg,
  },
  IconUser: {
    marginRight: 9,
    resizeMode: 'contain',
    // backgroundColor: 'green',
  },
  input: {
    width: '83%',
    padding: 5,
    // backgroundColor: 'yellow',
  },

});

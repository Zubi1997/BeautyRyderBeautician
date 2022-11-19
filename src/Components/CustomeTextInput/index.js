import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  I18nManager
} from 'react-native';
import {normalize, hp, wp, isX, isAndroid} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import FontText from '../FontText';
import SvgIcons from '../../assets/SvgIcons';

const CustomeTextInput = props => {
  return (
    <View style={styles.container}>
      {props.lable || props.lblBtn ? (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <FontText
            size={normalize(16)}
            name={'poppins-medium'}
            color="blackNatural"
            pBottom={hp(0.5)}
            textAlign="left">
            {props.lable}
          </FontText>
          <TouchableOpacity activeOpacity={0.7} onPress={props.lblClick}>
            <FontText
              size={normalize(12)}
              name={'poppins-medium'}
              color="primary"
              pBottom={hp(0.5)}
              textAlign="right">
              {props.lblBtn}
            </FontText>
          </TouchableOpacity>
        </View>
      ) : null}

      {props.smallLable ? (
        <View style={styles.row}>
          <FontText
            size={normalize(10)}
            name={'poppins-regular'}
            color="gray-natural"
            pBottom={hp(0.5)}
            textAlign="left">
            {props.smallLable}
          </FontText>
        </View>
      ) : null}

      <View style={[styles.inputContainer, props.inputContainerStyle]}>
        <TextInput
          ref={props.ref}
          style={[styles.txtinput, props.txtinputStyle]}
          onSubmitEditing={props.onSubmitEditing}
          value={props.value}
          defaultValue={props.defaultValue}
          onChangeText={props.onChangeText}
          returnKeyType={props.returnKeyType}
          textAlign = {I18nManager.isRTL ? 'right':'left'}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          keyboardType={props.keyboardType}


        />
        <View
          style={{
            width: '20%',
            alignItems: 'flex-end',
            // backgroundColor: 'red',
            paddingRight: wp(2),
          }}>
          <TouchableOpacity activeOpacity={0.7} onPress={props.onClick}>
            <Image source={props.icon} style={{height: wp(8), width: wp(8)}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomeTextInput;

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    marginVertical: hp(1.3),
  },
  inputContainer: {
    backgroundColor: colors['gray-light'],
    width: wp(92),
    borderRadius: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtinput: {
    width: '80%',
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    fontSize: normalize(16),
    height: hp(7.5),
    paddingHorizontal: wp(4),
    textAlign: I18nManager.isRTL ? 'right':'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

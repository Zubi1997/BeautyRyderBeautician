import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  hp,
  wp,
  normalize,
  isIOS,
  isX,
  isAndroid,
} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import FontText from '../common/FontText';

const BigButton = props => {
  return (
    <TouchableOpacity
      style={{...styles.btn, ...props.style}}
      activeOpacity={0.7}
      onPress={props.onClick}>
      <FontText
        size={normalize(18)}
        name={'poppins-medium'}
        color="white"
        pTop={hp(1.5)}
        pBottom={hp(1.5)}
        textAlign="left">
        {props.title}
      </FontText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: wp(92),
    // paddingVertical: isAndroid ? hp(2) : hp(1.5),
    backgroundColor: colors.primary,
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BigButton;

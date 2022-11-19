//import liraries
import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import Button from '../common/Button';
import FontText from '../common/FontText';
import SvgIcons from '../../assets/SvgIcons';

const {width, height} = Dimensions.get('screen');

// create a component
const BackHeader = props => {
  const {
    RightItemLabel,
    onPress,
    BackonPress,
    title,
    RightColor,
    titleColor,
    BackIcon,
    style,
    rightText,
  } = props;

  return (
    <View style={[styles.container, style]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={BackonPress} style={{padding: 1}}>
          {BackIcon == 'arrow' ? (
            <SvgIcons.Arrow
              style={{height: hp(10), width: hp(10), marginHorizontal: 0}}
            />
          ) : (
            <SvgIcons.ArrowBack
              style={{height: hp(10), width: hp(10), marginHorizontal: 6}}
            />
          )}
        </TouchableOpacity>
        {title != null && (
          <FontText
            style={styles.title}
            size={normalize(20)}
            name="poppins-semibold"
            color={titleColor}
            lines={1}>
            {title}
          </FontText>
        )}
      </View>
      {RightItemLabel != null && (
        <Button flex={null} type="opacity" height={hp(4)} onPress={onPress}>
          <FontText
            style={styles.text}
            size={normalize(14)}
            name="poppins-semibold"
            color={RightColor}
            lines={1}>
            {RightItemLabel}
          </FontText>
        </Button>
      )}

      {rightText && (
        <FontText
          pRight={width * 0.05}
          name={'poppins-semibold'}
          size={normalize(16)}>
          {rightText}
        </FontText>
      )}
    </View>
  );
};
export default BackHeader;
// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: hp(0.8),
    paddingLeft: hp(0),
  },
  text: {
    padding: 10,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: '600',
    marginHorizontal: wp(2),
  },
});

//make this component available to the app

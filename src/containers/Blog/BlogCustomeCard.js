import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import FontText from '../../Components/common/FontText';

const {width, height} = Dimensions.get('screen');

const BlogCustomeCard = props => {
  return (
    <View style={styles.mainView}>
      <FontText
        size={normalize(20)}
        pBottom={width * 0.02}
        name={'poppins-medium'}
        color="blackColor">
        {props.Title}
      </FontText>

      <FontText
        size={normalize(15)}
        pTop={width * 0.02}
        lineHeightFactor={1.8}
        name={'poppins-regular'}
        color="lightViolet">
        {props.Text1}
      </FontText>

      <FontText
        pTop={width * 0.04}
        pBottom={width * 0.05}
        size={normalize(15)}
        lineHeightFactor={1.8}
        name={'poppins-regular'}
        color="lightViolet">
        {props.Text2}
      </FontText>

      <Image
        source={require('../../assets/images/Womenhair.png')}
        style={styles.imageview}
        resizeMode="cover"
      />

      <FontText
        pTop={width * 0.04}
        pBottom={width * 0.08}
        style={styles.text}
        size={normalize(15)}
        lineHeightFactor={1.8}
        name={'poppins-regular'}
        color="lightViolet">
        {props.Text3}
      </FontText>
    </View>
  );
};

const styles = StyleSheet.create({
  imageview: {
    width: '99%',
    borderRadius: 10,
    marginVertical: hp(1),
  },
  mainView: {
    width: width * 0.9,
    alignSelf: 'center',
  },
  imag: {
    height: hp(18),
    width: wp(90),
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    overflow: 'hidden',
  },
});

export default BlogCustomeCard;

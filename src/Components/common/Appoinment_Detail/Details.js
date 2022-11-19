import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {isAndroid, normalize} from '../../../styles/responsiveScreen';

const {width, height} = Dimensions.get('screen');

const Details = props => {
  return (
    <View
      style={{
        width: width * 0.9,
        alignSelf: 'center',
        borderBottomWidth: props?.Border ? 1 : 0,
        borderBottomColor: props?.Border ? '#00000020' : 'tranparent',
        marginVertical: height * 0.008,
        paddingBottom: height * 0.01,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: width * 0.9,
        }}>
        <Text style={styles.fonts}>{props.Title}</Text>
        <Text style={styles.fonts}>{props.Price}</Text>
      </View>

      <Text style={[styles.fonts, {color: '#8384A1'}]}>{props.Time}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  fonts: {
    fontSize: normalize(12),
    fontFamily: 'poppins-medium',
    fontWeight: isAndroid ? 'bold' : '500',
    color: '#15093E',
  },
});

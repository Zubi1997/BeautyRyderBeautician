//import liraries
import React, {Component, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, StyleSheet} from 'react-native';
import SvgIcons from '../../assets/SvgIcons';
import FontText from '../../Components/common/FontText';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';

// create a component
const Commentrender = props => {
  const {t} = useTranslation();

  const {item, onPress, navigation} = props;

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <View style={styles.subC}>
          <SvgIcons.Javed height={hp(4)} width={hp(4)} />
          <FontText
            size={normalize(16)}
            name={'poppins-medium'}
            pLeft={wp(2)}
            style={styles.name}>
            {item.name}
          </FontText>
        </View>
        <FontText
          size={normalize(12)}
          name={'poppins-medium'}
          color="lightViolet"
          style={styles.date}>
          {t(item.day)}
        </FontText>
      </View>
      <FontText
        size={normalize(14)}
        name={'poppins-regular'}
        color="lightViolet"
        style={styles.info}>
        {item.info1}
      </FontText>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
  },
  container: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  subC: {
    flexDirection: 'row',
    marginTop: hp(1),
    alignItems: 'center',
  },
  name: {
    justifyContent: 'center',
    marginHorizontal: wp(2),
  },
  date: {
    justifyContent: 'center',
    marginTop: hp(2),
  },
  info: {
    marginLeft: wp(8.7),
    marginTop: hp(1.5),
    marginBottom: hp(2),
  },
});

//make this component available to the app
export default Commentrender;

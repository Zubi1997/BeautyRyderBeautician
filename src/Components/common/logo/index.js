//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Platform,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../assets/colors';
import SvgIcons from '../../../assets/SvgIcons';
import {hp, wp, normalize, isIOS, isX} from '../../../styles/responsiveScreen';

const {width, height} = Dimensions.get('screen');

// create a component
const Logo = () => {
  return (
    <View>
      {/* <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[colors.primaryLight, colors.primary]}
        style={styles.linearGradient}>
        <SvgIcons.Vector style={{height: width * 0.4, width: width * 0.5}} />
      </LinearGradient> */}
      <Image
        source={require('../../../assets/images/App_icon.jpg')}
        style={styles.logo}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    height: width * 0.2,
    width: width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(5),
    marginTop: Platform.OS == 'ios' ? 0 : height * 0.015,
  },
  logo: {
    marginTop: hp(4),
    height: wp(24),
    width: wp(24),
    borderRadius:20
  },
});

export default Logo;

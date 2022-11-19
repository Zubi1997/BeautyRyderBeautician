//import libraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import Logo from '../common/logo';
import Button from '../common/Button';
import FontText from '../common/FontText';
import colors from '../../assets/colors';
// create a component
const HeaderWithLogo = props => {
  const {label, onPress} = props;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Logo></Logo>
        {label != null && (
          <Button
            flex={null}
            type="opacity"
            // height={hp(5)}
            borderRadius={9}
            bgColor="iconfill"
            onPress={onPress}>
            <FontText
              style={styles.text}
              size={14}
              name="Poppins-medium"
              lines={1}>
              {label}
            </FontText>
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // paddingVertical: hp(3),
    marginHorizontal: wp(3),
    // marginTop: hp(3)
  },
  text: {
    marginHorizontal: wp(3),
    fontWeight: '400',
    color: '#397DFF',
  },
});

//make this component available to the app
export default HeaderWithLogo;

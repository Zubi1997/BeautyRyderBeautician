import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import SvgIcons from '../../assets/SvgIcons';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import FontText from '../common/FontText';
import TitleSubTitle from '../TitleSubTitle';

// create a component
const SucessFullDefault = props => {
  const {Title, Subtitle} = props;

  return (
    <View style={[styles.container,props.style]}>
      <SvgIcons.Sucess width={props.width,wp(40)} height = {props.height,wp(40)} />

      <View
        style={{
          justifyContent: 'center',
          paddingHorizontal: wp(2),
          // paddingVertical: hp(2),
        }}>
        <TitleSubTitle
          name={'poppins-medium'}
          pTop={hp(1)}

          Textstyle={{fontWeight: '600'}}
          Title={Title}
          SubTitle={Subtitle}

          textalign={'center'}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(3),
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical:hp()
  },
});
export default SucessFullDefault;

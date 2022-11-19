import React, {useRef, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp, normalize, isX, isAndroid} from '../../styles/responsiveScreen';
import CustomeTextInput from '../CustomeTextInput';
import appConstant from '../../helper/appConstant';

const DayTime = props => {

  return (
    <View style={styles.container}>
      <View>
        <CustomeTextInput
          icon={require('../../assets/img/Profile/clock.png')}
          onClick={props.onFromClick}
          placeholder={appConstant.From}
          inputContainerStyle={{
            width: wp(44),
            marginHorizontal: wp(-4),
          }}
          onSubmitEditing={props.fromOnSubmitEditing}
          value={props.fromValue}
          onChangeText={props.fromOnChangeText}
          returnKeyType="next"
          defaultValue={props.fromDefaultValue}
        />
      </View>
      <View>
        <CustomeTextInput
          icon={require('../../assets/img/Profile/clock.png')}
          onClick={props.onToClick}
          placeholder={appConstant.To}
          inputContainerStyle={{
            width: wp(44),
            marginHorizontal: wp(-4),
          }}
          onSubmitEditing={props.toOnSubmitEditing}
          value={props.toValue}
          onChangeText={props.toOnChangeText}
          returnKeyType="next"
          defaultValue={props.toDefaultValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginHorizontal:wp(2)
  },
});

export default DayTime;

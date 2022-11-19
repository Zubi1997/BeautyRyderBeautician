import React, {useState, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import FontText from '../FontText';
import colors from '../../assets/colors';
import {normalize, hp, wp, isX, isAndroid} from '../../styles/responsiveScreen';
import CustomeTextInput from '../CustomeTextInput';
import appConstant from '../../helper/appConstant';

const ServiceItemList = props => {
  const {data} = props;

  const [serviceName, setServiceName] = useState('');
  const serviceNameRef = useRef();

  console.log('data......', data);
  console.log('name is ....',data.item.name)

  return (
    <View style={styles.container}>
      <CustomeTextInput
        icon={require('../../assets/img/Profile/minus.png')}
        onClick={index => {
          props.onWarpCancelPress(index);
        }}
        onSubmitEditing={() => {}}
        value={data.name}
        onChangeText={value => {
          props.onChangeValue('name', value, data.index, data.item);
        }}
        returnKeyType="next"
      />
      <View style={styles.rowview}>
        <View>
          <CustomeTextInput
            icon={require('../../assets/img/Profile/clock.png')}
            onClick={() => {}}
            inputContainerStyle={{
              width: wp(44),
              marginHorizontal: wp(-4),
            }}
            onSubmitEditing={() => {}}

            value={data.time}
            onChangeText={value => {
              props.onChangeValue('time', value, data.index, data.item);
            }}
            returnKeyType="next"
          />
        </View>
        <View>
          <CustomeTextInput
            icon={require('../../assets/img/Profile/dollar.png')}
            onClick={() => {}}
            inputContainerStyle={{
              width: wp(44),
              marginHorizontal: wp(-4),
            }}
            onSubmitEditing={() => {}}
            value={data.price}
            onChangeText={value => {
              props.onChangeValue('price', value, data.index, data.item);
            }}
            returnKeyType="next"
          />
        </View>
      </View>
      {/* <FontText
        size={normalize(16)}
        name={'montserrat-semibold'}
        color="black"
        textAlign="left">
        {data.item.name}
      </FontText> */}
    </View>
  );
};

export default ServiceItemList;
export const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginVertical: hp(1),
  },
  rowview: {
    width: wp(92),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});

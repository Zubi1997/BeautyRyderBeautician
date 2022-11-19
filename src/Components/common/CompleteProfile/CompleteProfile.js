import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {normalize, wp} from '../../../styles/responsiveScreen';
import FontText from '../FontText';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const {width, height} = Dimensions.get('screen');

const CompleteProfile = props => {
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={props.source}
        resizeMode="contain"
        style={{
          width: width * 0.14,
          height: width * 0.14,
        }}
      />
      <View style={{flex: 1, paddingHorizontal: wp(2)}}>
        <FontText name="poppins-medium" size={normalize(16)}>
          {props.Head}
        </FontText>

        <FontText
          name="poppins-regular"
          size={normalize(12)}
          style={{color: '#00000050'}}>
          {props.Text}
        </FontText>
      </View>

      <View style={{transform: [{rotate: '270deg'}]}}>
        <AnimatedCircularProgress
          size={wp(13)}
          width={wp(1)}
          fill={props.Fill}
          tintColor="#397DFF"
          backgroundColor="#F3F5F8">
          {() => (
            <View style={{transform: [{rotate: '90deg'}]}}>
              <FontText
                name="poppins-medium"
                size={normalize(12)}
                style={{color: '#00000080'}}>
                {props.Fill}%
              </FontText>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
    </View>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({});

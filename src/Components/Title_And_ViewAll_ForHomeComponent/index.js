import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import {hp, normalize} from '../../styles/responsiveScreen';
import FontText from '../common/FontText';

const {width, height} = Dimensions.get('screen');

const Title_And_ViewAll_ForHomeComponent = props => {
  const {t} = useTranslation();

  return (
    <View
      style={[
        {
          height: height * 0.04,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: width * 0.9,
          alignSelf: 'center',
        },
        props.style,
      ]}>
      <FontText
        size={normalize(18)}
        style={{color: '#15093E', fontWeight: '500'}}
        name={'poppins-medium'}>
        {props.Title}
      </FontText>

      <TouchableOpacity onPress={props.ViewAllPress}>
        <FontText
          size={normalize(15)}
          style={{color: props.ViewAllColor || '#8a8a8a'}}
          name={'poppins-regular'}>
          {props.ViewAll ? t('VIEW_ALL') : ''}
        </FontText>
      </TouchableOpacity>

      {props.Text && (
        <TouchableOpacity onPress={props.TextPress}>
          <FontText
            size={normalize(14)}
            style={{color: '#397DFF'}}
            name={'poppins-medium'}>
            {props.Text}
          </FontText>
        </TouchableOpacity>
      )}

      {props.Num && (
        <View
          style={{
            backgroundColor: '#FF726D30',
            borderRadius: width * 0.05,
            width: width * 0.075,
            height: width * 0.075,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontText
            size={normalize(12)}
            style={{color: '#ff0000', fontWeight: '500'}}
            name={'poppins-semibold'}>
            {props.Num}
          </FontText>
        </View>
      )}
    </View>
  );
};

export default Title_And_ViewAll_ForHomeComponent;

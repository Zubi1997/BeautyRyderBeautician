import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Switch} from 'react-native';
import {normalize, hp, wp, isX, isAndroid} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import FontText from '../FontText';
import BigButton from '../BigButton';
import appConstant from '../../helper/appConstant';
import {t} from 'i18next';

const ActiveBarbers = props => {
  return (
    <View style={{justifyContent: 'space-between', flex: 1}}>
      <View>
        {props?.data.map((item, index) => {
          const [isEnabled, setIsEnabled] = useState(item.active);
          const toggleSwitch = () =>
            setIsEnabled(previousState => !previousState);
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: wp(4),
                marginVertical: hp(2),
                marginTop: hp(2),
                alignItems: 'center',
              }}>
              <FontText
                size={normalize(16)}
                name={'poppins-medium'}
                color="blackLight"
                textAlign="left">
                {item.name}
              </FontText>
              <Switch
                trackColor={{
                  false: colors['gray-devider'],
                  true: colors.primary,
                }}
                thumbColor={colors.white}
                ios_backgroundColor={colors['gray-devider']}
                onValueChange={() => toggleSwitch()}
                value={isEnabled}
                style={{
                  transform: [
                    {scaleX: isAndroid ? 1 : 0.7},
                    {scaleY: isAndroid ? 1 : 0.7},
                  ],
                }}
              />
            </View>
          );
        })}
      </View>
      <View style={{alignSelf: 'center', marginBottom: hp(3)}}>
        <BigButton title={t('ADD_BARBERS')} onClick={props.Click} />
      </View>
    </View>
  );
};

export default ActiveBarbers;

export const styles = StyleSheet.create({
  accview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(4),
    marginVertical: hp(2),
  },
});

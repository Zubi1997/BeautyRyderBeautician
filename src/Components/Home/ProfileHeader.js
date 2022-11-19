import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import FontText from '../common/FontText/index';
import SvgIcons from '../../assets/SvgIcons';

const Header = ({navigation, style, Like, Name, Blog}) => {
  return (
    <View style={[styles.profileView, style]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/avatar.png')}
          resizeMode="cover"
          style={styles.avatar}
        />

        {Blog ? (
          <View style={styles.textView}>
            <FontText
              size={normalize(14)}
              name={'poppins-semibold'}
              lineHeightFactor={1.5}
              style={{color: '#8384A1'}}>
              {'Welcome'}
            </FontText>
            <FontText
              size={normalize(18)}
              name={'poppins-semibold'}
              lineHeightFactor={1.2}>
              {Name}
            </FontText>
          </View>
        ) : (
          <View style={styles.textView}>
            <FontText
              size={18}
              name={'poppins-semibold'}
              lineHeightFactor={1.5}
              color={colors.violet}>
              {Name}
            </FontText>
            <FontText
              size={12}
              name={'poppins-medium'}
              lineHeightFactor={1.5}
              style={{color: '#8384A1'}}>
              {'6391 Elgin St. Celina'}
            </FontText>
          </View>
        )}
      </View>

      <View style={{flexDirection: 'row'}}>
        {Like ? (
          <TouchableOpacity style={{...styles.iconView, marginRight: wp(1)}}>
            <SvgIcons.Heart height={hp(3)} width={hp(3)} style={styles.icon} />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity style={styles.iconView} onPress={navigation}>
          <SvgIcons.Notification
            height={hp(3)}
            width={hp(3)}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: hp(6),
    height: hp(6),
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textView: {
    marginLeft: wp(3),
    alignSelf: 'center',
  },
  iconView: {
    padding: wp(3),
    borderRadius: normalize(50),
    backgroundColor: '#F7F8FA',
  },
  icon: {
    alignSelf: 'center',
  },
});

export default Header;

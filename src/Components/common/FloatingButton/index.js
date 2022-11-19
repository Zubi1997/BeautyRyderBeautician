import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import colors from '../../../assets/colors';
import {hp, wp} from '../../../styles/responsiveScreen';
import SvgIcons from '../../../assets/SvgIcons';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');

export default FloatingButton = props => (
  <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
    <LinearGradient
      colors={['#1565FF', '#33C1FF']}
      style={styles.linear}
      start={{x: 0, y: 0.8}}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[props.style, styles.button]}
        activeOpacity={0.5}>
        <SvgIcons.Plus
          style={[props.style, {alignSelf: 'center'}]}
          height={hp(3.5)}
          width={hp(3.5)}
        />
      </TouchableOpacity>
    </LinearGradient>
  </View>
);
const styles = StyleSheet.create({
  linear: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: width * 0.15,
    width: width * 0.15,
    marginTop: hp(-10),
  },
  button: {
    // backgroundColor: colors.white,
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});

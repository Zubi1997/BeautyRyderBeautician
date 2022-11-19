import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import SvgIcons from '../../../assets/SvgIcons';
import {normalize} from '../../../styles/responsiveScreen';
import FontText from '../FontText';

const {width, height} = Dimensions.get('screen');

const NotificationHeader = props => {
  return (
    <View style={[styles.Container, props.ContainerStyle]}>
      <View style={[styles.MainView, props.style]}>
        <TouchableOpacity onPress={props.navigation}>
          <SvgIcons.arrow />
        </TouchableOpacity>

        <FontText pLeft={props.pLeft} name={'poppins-semibold'} size={normalize(18)}>
          {props.Name}
        </FontText>
      </View>
<TouchableOpacity activeOpacity={ 0.7} onPress={ props.morePress}>
      {props.icon && (
        <Image
          source={require('../../../assets/images/VerticalIcon.png')}
          resizeMode="contain"
          style={styles.Image}
        />
      )}
      </TouchableOpacity>
    </View>
  );
};

export default NotificationHeader;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    height: width * 0.15,
    backgroundColor: '#fff',
  },
  Image: {width: width * 0.07, height: width * 0.052},
  MainView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.3,
    justifyContent: 'space-between',
  },
});

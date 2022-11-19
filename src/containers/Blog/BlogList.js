//import liraries
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { hp, wp, normalize } from '../../styles/responsiveScreen';
import FontText from '../../Components/common/FontText';
import SvgIcons from '../../assets/SvgIcons';
import BlogInternal, { routeName as BlogInternalRouteName } from './BlogInternal';

const { width, height } = Dimensions.get('screen');

// create a component
const BlogList = props => {
  const { item, onPress, navigation } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(BlogInternalRouteName, { item: item })}
      style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/Womenface.png')}
      />
      <View style={styles.subC}>
        <View style={styles.mainView}>
          <FontText size={normalize(13)} name={'poppins-medium'}>
            {item.nameshop}
          </FontText>
        </View>
        <View style={styles.icon}>
          <SvgIcons.Javed height={hp(4)} width={hp(4)} />
          <View style={styles.textView}>
            <FontText
              style={styles.javed}
              size={normalize(12)}
              name={'poppins-medium'}
              color="blackColor">
              {item.name}
            </FontText>
            <FontText
              style={styles.javed}
              size={normalize(10)}
              name={'poppins-regular'}
              color="lightViolet">
              {item.date}
            </FontText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowColor: 'rgba(49, 60, 100, 0.15)',
    shadowRadius: 8,
    width: width * 0.9,
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 10,
    marginVertical: width * 0.02,
  },
  image: {
    height: hp(16),
    width: hp(14),

    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  javed: {
    marginHorizontal: wp(2),
  },
  subC: {
    marginHorizontal: wp(3),
    flex: 1,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  icon: {
    flexDirection: 'row',
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textView: {
    marginLeft: width * 0.015,
    justifyContent: 'space-evenly',
  },
});

//make this component available to the app
export default BlogList;

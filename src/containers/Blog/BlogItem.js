//import liraries
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {hp, wp, normalize} from '../../styles/responsiveScreen';
import FontText from '../../Components/common/FontText';
import SvgIcons from '../../assets/SvgIcons';
import colors from '../../assets/colors';
import BlogInternal, {routeName as BlogInternalRouteName} from './BlogInternal';
import TitleSubTitle from '../../Components/TitleSubTitle';

const {width, height} = Dimensions.get('screen');

// create a component
const BlogItem = props => {
  const {item, onPress, navigation} = props;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(BlogInternalRouteName, {item: item})}
      style={styles.maincontainer}>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={require('../../assets/images/Blogimage.png')}
      />
      <TitleSubTitle Textstyle={{fontSize:normalize(18)}} Title = {item.nameshop} SubTitle =  {item.info}/>
      <View style={styles.subC}>
        <View style={styles.View}>
          <SvgIcons.Javed height={hp(4)} width={hp(4)} />
          <View style={styles.mainView}>
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
        <View style={styles.iconView}>
          <SvgIcons.Javedheart
            height={hp(5)}
            width={hp(5)}
            style={styles.icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#fff',
    shadowOffset: {width: hp(0), height: hp(0.2)},
    shadowColor: colors.lightViolet,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 7,
    borderRadius: width * 0.06,
    width: width * 0.9,
    alignSelf: 'center',
    borderTopLeftRadius: width * 0.06,
    borderTopRightRadius: width * 0.06,
    marginVertical: width * 0.02,
  },
  javed: {
    marginHorizontal: wp(2),
  },
  image: {
    width: width * 0.9,
  },
  iconView: {
    borderColor: 'yellow',
    borderRadius: normalize(50),
    backgroundColor: 'white',
  },
  icon: {
    alignSelf: 'center',
  },
  subC: {
    flexDirection: 'row',
    marginHorizontal: wp(2.5),
    marginBottom: hp(1),
    justifyContent: 'space-between',
  },
  View: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainView: {
    marginLeft: width * 0.02,
    justifyContent: 'space-evenly',
  },
});

//make this component available to the app
export default BlogItem;

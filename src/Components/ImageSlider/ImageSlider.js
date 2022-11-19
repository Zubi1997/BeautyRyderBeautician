import React, {Component, useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  ImageBackground,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Text,
  SectionList,
} from 'react-native';
import {
  hp,
  wp,
  normalize,
  isIOS,
  isX,
  isAndroid,
} from '../../styles/responsiveScreen';

import fonts from '../../assets/fonts';
import FontText from '../../Components/common/FontText';
import colors from '../../assets/colors';

const ImageSlider = () => {
  const ImageData = [
    require('../../assets/images/img.png'),
    require('../../assets/images/img.png'),
    require('../../assets/images/img.png'),
    require('../../assets/images/img.png'),
  ];

  const [ActiveDots, setActiveDots] = useState(0);

  const SlideImage = (item, index) => {
    return (
      <View style={{width: wp(90.9), height: '100%'}}>
        <Image
          source={require('../../assets/images/img.png')}
          // resizeMode="stretch"
          style={styles.img}></Image>
      </View>
    );
  };

  const onScrollOfExclusiveOffers = e => {
    // Slides and gets the value of X axis
    // console.log('e = 1: ', e.nativeEvent.contentOffset.x);

    // get the value of device's width
    // console.log('e = 2: ', e.nativeEvent.layoutMeasurement.width);

    if (e.nativeEvent) {
      const Slide = Math.ceil(
        e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width,
      );

      // console.log('Slide: ', Slide);

      if (Slide != ActiveDots) {
        setActiveDots(Slide);
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: wp(1),
        marginHorizontal: wp(1.5),
      }}>
      <View>
        <FlatList
          data={ImageData}
          onScroll={e => onScrollOfExclusiveOffers(e)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(value, index) => index.toString()}
          renderItem={({item}) => SlideImage(item)}
        />

        <View style={styles.DotsView}>
          {ImageData.map((value, index) => (
            <View key={index}>
              <View
                style={[
                  styles.Dots,
                  {
                    backgroundColor:
                      ActiveDots == index ? '#fff' : 'transparent',
                  },
                ]}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  DotsView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp(1),
    alignSelf: 'center',
  },
  Dots: {
    width: isAndroid ? wp(2) : wp(2.5),
    height: hp(1.2),
    borderRadius: wp(5),
    borderWidth: wp(0.2),
    borderColor: '#fff',
    marginHorizontal: wp(0.5),
  },
  img: {
    alignSelf: 'center',
    marginTop: hp(3),
    width: wp(88),
    height: hp(28),
    // marginLeft: wp(3),
    // marginHorizontal: wp(5),
    borderRadius: wp(5),
  },
});

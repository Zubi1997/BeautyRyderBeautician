import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import FontText from '../../Components/common/FontText';
import {useNavigation} from '@react-navigation/core';
import {t} from 'i18next';

export const routeName = 'ImageShow';

const ImageShow = props => {
  const [visible, setIsVisible] = useState(false);
  const onScrollOfExclusiveOffers = e => {
    if (e.nativeEvent) {
      const Slide = Math.ceil(
        e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width,
      );
    }
  };

  const ImageSlider = (item, index) => {
    return (
      <View style={{width: wp(100), height: hp(40)}}>
        {console.log('Images dAta ewasd ... ',item.path)}
        <Image
          source={item}
          style={styles.image}></Image>
      </View>
    );
  };
  const navigation = useNavigation();
  const {data, images} = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
     {console.log('data is ....',images)}



        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/images/arrow.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <FontText
            name={'poppins-semibold'}
            size={normalize(18)}
            pTop={hp(0.2)}
            pLeft={wp(5)}
            style={{color: '#ffffff'}}>
            {t('PHOTO')}
          </FontText>
        </View>
        <View style={styles.flat}>
          <FlatList
            data={images}
            onScroll={e => onScrollOfExclusiveOffers(e)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(value, index) => index.toString()}
            renderItem={({item}) => ImageSlider(item)}
          />
        </View>

    </SafeAreaView>
  );
};

export default ImageShow;

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: wp(100),
    height: hp(40),
    marginHorizontal: wp(10),
  },
  container: {flex: 1, backgroundColor: '#15093E', height: '100%'},
  arrow: {
    height: wp(8),
    width: wp(8),
    marginLeft: wp(5),
    tintColor: '#fffFFF',
  },
  flat: {
    width: wp(100),
    height: hp(40),
    marginVertical: hp(22),
  },
});

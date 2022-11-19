import React, { Component, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import { hp, wp, normalize, isIOS, isX } from '../../styles/responsiveScreen';
import ImageShow, { routeName as ImageShowRouteName } from './ImageShow';
import LinearGradient from 'react-native-linear-gradient';
import FontText from '../../Components/FontText';
import { GalleryImg } from '../../helper/data';


export const routeName = 'Images';

const { width, height } = Dimensions.get('screen')

const Images = props => {

  const { navigation } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={GalleryImg}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (

              <TouchableOpacity
                onPress={
                  () =>
                    navigation.navigate(ImageShowRouteName, {
                      images: GalleryImg,
                    })
                }>
                <View style={styles.imageView}>
                  <Image style={styles.image} source={item} />
                </View>
              </TouchableOpacity>
            )
          }}



          numColumns={2}></FlatList>
        <View >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#1565FF', '#33C1FF']}
            style={styles.linear}>
            <TouchableOpacity
              onPress={() => { }
              }
              style={styles.createView}>
              <FontText
                name="poppins-regular"
                size={normalize(38)}
                pTop={width * 0.025}
                style={{ color: '#fff' }}>
                +
              </FontText>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default Images;

const styles = StyleSheet.create({
  imageView: {
    flexDirection: 'column',

    backgroundColor: '#d3d3d3',
    width: wp(40),
    height: hp(18),
    borderRadius: wp(5),
    marginVertical: hp(1),
    justifyContent: 'center',
    marginRight: wp(0),
    marginHorizontal: wp(5),
  },
  image: {
    width: wp(40),
    height: hp(18),
    borderRadius: wp(5),
  },
  createView: {
    width: width * 0.17,
    height: width * 0.17,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linear: {
    borderRadius: 100,
    position: 'absolute',
    bottom: width * 0.05,
    right: width * 0.05,
    backgroundColor: '#ff0',
    justifyContent: 'flex-end',

  },
});

import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import {useNavigation} from '@react-navigation/core';
import VideoShow, {routeName as VideoShowRouteName} from './VideoShow';
import LinearGradient from 'react-native-linear-gradient';
import FontText from '../../Components/FontText';


const {width,height} = Dimensions.get('screen')

const VideoData = (item, props) => {
  const blankdata = [
    require('../../assets/images/photo.png'),
    require('../../assets/images/photo.png'),
    require('../../assets/images/photo.png'),
    require('../../assets/images/photo.png'),
    require('../../assets/images/photo.png'),
    require('../../assets/images/photo.png'),
  ];
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      {console.log('video function called')}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={blankdata}
        renderItem={({item}) => (
          <View style={styles.videoview}>
            <View>
              <ImageBackground
                style={styles.VideoBg}
                imageStyle={{borderRadius: 18}}
                source={item}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(VideoShowRouteName)}>
                  <Image
                    style={styles.playbtn}
                    source={require('../../assets/images/play.png')}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>
        )}
      />

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1565FF', '#33C1FF']}
        style={styles.linear}>
        <TouchableOpacity
          onPress={() =>

            {}
          }
          style={styles.createView}>
          <FontText
            name="poppins-regular"
            size={normalize(38)}
            pTop={width * 0.025}
            style={{color: '#fff'}}>
            +
          </FontText>
        </TouchableOpacity>
      </LinearGradient>

    </View>
  );
};

export default VideoData;

const styles = StyleSheet.create({
  videoview: {
    width: wp(88),
    height: hp(21),
    alignSelf: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: wp(5),
    marginVertical: hp(1),
  },
  VideoBg: {width: wp(88), height: hp(21)},
  playbtn: {alignSelf: 'center', marginVertical: hp(8)},
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
  },
});

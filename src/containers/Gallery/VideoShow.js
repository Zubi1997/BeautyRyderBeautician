import React, {Component, useState, useEffect} from 'react';
import {
  View,
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
export const routeName = 'VideoShow';

const VideoShow = props => {
  return (
    <View style={{flex: 1}}>
      <VideoPlayer
        navigator={props.navigation}
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      />
    </View>
  );
};

export default VideoShow;

// http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4

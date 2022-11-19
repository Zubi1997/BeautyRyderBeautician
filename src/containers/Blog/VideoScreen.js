import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import VideoPlayer from 'react-native-video-controls';

export const routeName = 'VideoScreen';

const VideoScreen = props => {
  console.log('props.................', props?.route?.params?.Data);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <VideoPlayer
          source={{ uri: props?.route?.params?.Data }}
          navigator={props.navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({});

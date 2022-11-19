//import libraries
import React, {Component, useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {Modalize} from 'react-native-modalize';
import colors from '../../assets/colors';
import SvgIcons from '../../assets/SvgIcons';
import {hp, wp, normalize} from '../../styles/responsiveScreen';
import EmptyDefault from '../EmptyDefault';
import Button from '../common/Button';
import FontText from '../common/FontText';
import TitleSubTitle from '../TitleSubTitle';

// create a component
const Imagepicker = props => {
  const {
    refname,
    label,
    value,
    RightItemIcon,
    bottombutton,
    textrightbutton,
    textleftbutton,
    oncancelpress,
    onCameraPress,
    onGallaryPress,
  } = props;

  const modalizeRef = useRef();
  // const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <Modalize ref={refname} withHandle={false} modalHeight={hp(30)}>
      {value}
    </Modalize>
  );
};

export default Imagepicker;

import React, {Component, useState, useRef, useCallback} from 'react';
import FontText from '../../../Components/common/FontText';
import colors from '../../../assets/colors';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../../styles/responsiveScreen';
import {useTranslation} from 'react-i18next';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');

const Required_steps_head = ({
    navigation,
    text1,
    text2,
    text3,
    onpress,
    margintop,
    style2,
    submitted
}) => {
  const {t} = useTranslation();
  

  return (
    <View style={{backgroundColor:'#ffe4e1',flexDirection:'row',alignItems:'center',padding:10}}>
      <Ionicons name='ios-person-circle' size={normalize(20)} color={colors.primary} />
      <View style={{flex:1,marginLeft:10}}>
        <FontText
            name={'poppins-bold'}
            // size={normalize(18)}
            color={colors.black}
            style={styles.inner_style1}
            >
            {t('Visit a  Hero center')}
        </FontText>
        <FontText
            name={'poppins-Regular'}
            // size={normalize(14)}
            color={colors.black}
            style={styles.inner_style1}
            >
            {t('Visit one of the nearest Hero Center in your city to complete your account verification and registration') }
        </FontText> 
        <FontText
            name={'poppins-Regular'}
            size={normalize(15)}
            color={colors.primary}
            style={{color:colors.primary,marginTop:wp(1)}}
            >
            {t('Location & Timing') }
        </FontText> 
      </View>
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(5),
  },
  inner_style1:{
    fontSize:normalize(15),
    color:colors.black,
    marginTop:wp(1)
},
  inner_style2:{
    marginLeft:10,
    fontSize:normalize(14),
    color:colors.black
}
});

export default Required_steps_head;

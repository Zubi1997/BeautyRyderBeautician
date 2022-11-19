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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('screen');

const Single_step = ({
    navigation,
    text1,
    text2,
    onpress,
    margintop,
    style2,
    submitted
}) => {
  const {t} = useTranslation();
  

  return (
    <View style={{marginTop:5}}>
    <TouchableOpacity onPress={()=>onpress()} style={{flexDirection:'row',marginTop:margintop?margintop:0,alignItems:'center'}}>
      {submitted?
      <MaterialCommunityIcons name='clock' size={normalize(20)} color={colors['gray-natural']} />
      :
      <AntDesign name='filetext1' size={normalize(20)} color={colors.primary} />
      }
      <View style={{flex:1}}>
        <FontText
            name={'poppins-bold'}
            // size={normalize(18)}
            color={colors.black}
            style={styles.inner_style1}
            >
            {text1}
        </FontText>
        <FontText
            name={'poppins-Regular'}
            // size={normalize(16)}
            color={colors.black}
            style={[styles.inner_style2,style2]}
            >
            {text2}
        </FontText>
      </View>
      <Entypo name='chevron-right' size={normalize(20)} color={colors.primary} />
    </TouchableOpacity>
    <View style={{marginTop:wp('3'),height:2,backgroundColor:colors['gray-lightest']}}></View>
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
    marginLeft:10,
    fontSize:normalize(17),
    color:colors.black
},
  inner_style2:{
    marginLeft:10,
    fontSize:normalize(15),
    color:colors.black
}
});

export default Single_step;

import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import SucessFullDefault from '../../Components/SucessFullDefault/SucessFullDefault';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  hp,
  wp,
} from '../../styles/responsiveScreen';
import {useTranslation} from 'react-i18next';
import BigButton from '../../Components/BigButton';
import LogIn, {routeName as LogInRouteName} from '../LogIn';

const {height, width} = Dimensions.get('screen');
export const routeName = 'ResetPasswordPop';

const ResetPasswordPop = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.container}>
        <BackHeader BackonPress={() => navigation.goBack()}></BackHeader>

        <SucessFullDefault style ={{marginVertical:hp(1)}}
                Title={t('PASSWORD_REST!')}
                Subtitle={t('LOREM')} />
        <View style={styles.btnView}>
          <BigButton
            title={t('BACK_TO_LOGIN')}
            onClick={() => navigation.navigate(LogInRouteName)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(5),
  },
  btnView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf:'center',
    marginBottom: height > 767 ? height * 0.01 : height * 0.03,
  },
  sucess: {
    marginTop: hp(4),
    marginHorizontal: hp(11.5),
  },
});
export default ResetPasswordPop;

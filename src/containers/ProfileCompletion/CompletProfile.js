import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {hp, normalize, wp} from '../../styles/responsiveScreen';
import BigButton from '../../Components/BigButton';
import Home, {routeName as HomeRouteName} from '../Home';
import {useTranslation} from 'react-i18next';
import SucessFullDefault from '../../Components/SucessFullDefault/SucessFullDefault';

export const routeName = 'CompleteProfile';

const CompleteProfile = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.mianContainer}>
      <View style={{flex: 1,marginHorizontal:wp(2),justifyContent:'center'}}>
        <BackHeader
          BackonPress={() => navigation.goBack()}
        />
        <SucessFullDefault style ={{marginTop:hp(-2)}} Title = {t('SUCCESFULLY')} Subtitle = {t('LOREM')} />
        <View style={styles.btn}>
          <BigButton
            title={t('GO_HOME')}
            onClick={() => navigation.navigate(HomeRouteName)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  mianContainer: {flex: 1, backgroundColor: '#ffffff',justifyContent:'center'},
  sucess: {
    marginTop: hp(4),
    alignSelf: 'center',
  },
  back: {marginHorizontal: wp(2), color: 'red'},
  ProfileC: {width: wp(80), alignSelf: 'center'},
  ProfileS: {
    width: wp(80),
    fontWeight: '500',
    color: '#8384A1',
    alignSelf: 'center',
  },
  btn: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: hp(2),
  },
});

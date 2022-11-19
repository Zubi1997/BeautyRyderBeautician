import React, {Component, useState, useRef} from 'react';
import {TextInput, ProgressBar} from 'react-native-paper';
import colors from '../../assets/colors';
import BackHeader from '../../Components/BackHeader';
import SvgIcons from '../../assets/SvgIcons';
import TitleSubTitle from '../../Components/TitleSubTitle';
import PhoneInput from 'react-native-phone-number-input';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  I18nManager,
  KeyboardAvoidingView
} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import {useTranslation} from 'react-i18next';
import BigButton from '../../Components/BigButton';
import Verification, {routeName as VerificationRouteName} from './Verification';

export const routeName = 'PhoneNo';
const {width, height} = Dimensions.get('screen');

const PhoneNo = ({navigation}) => {
  const {t} = useTranslation();
  const phoneInput = useRef(null);


  return (
    <SafeAreaView style={styles.mainContainer}>
       <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={'height'}
        keyboardVerticalOffset={Platform.select({ios: -300, android: -100})}>
      <View style={styles.container}>
        <BackHeader
          BackonPress={() => navigation.goBack()}
          RightItemLabel={t('SKIP')}
          onPress={() => navigation.navigate('Tab')}
        />
        <ProgressBar
          progress={0.8}
          color={colors.primary}
          style={styles.progress}
        />

        <View style={{marginVertical: 10}}>
          <TitleSubTitle
            Title={t('WHAT_IS_PHONE_NO')}
            SubTitle={t('PHONE_NO_TAG')}
            textalign={'left'}
            pTop={hp(1)}
          />
        </View>

        <View style={styles.viewf}>
          <SvgIcons.Phone height={hp(3)} width={width * 0.1} />
          <SvgIcons.Line4
            height={hp(4)}
            width={width * 0.05}
            style={styles.line}
          />
          <PhoneInput
            placeholder={t('PHONE_NO')}
            ref={phoneInput}
            defaultCode="IN"
            autoFocus={true}
            layout="second"

            textInputStyle={styles.phonetxt}
            containerStyle={styles.phoneContainer}
            textInputProps={{
              maxLength: 10,
              returnKeyType:'done'
          }}
          />
        </View>

        <View style={styles.btnView}>
          <BigButton
            title={t('SUBMIT')}
            onClick={() =>
              navigation.navigate(VerificationRouteName, {bool: 2})
            }
          />
        </View>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(5),
  },
  progress: {
    marginHorizontal: wp(3),
    marginVertical: wp(4),
    height: hp(1),
    borderRadius: 14,
  },
  line: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  viewf: {
    flexDirection: 'row',
    fontSize: normalize(16),
    width: width * 0.9,
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
    borderRadius: 20,
    paddingLeft: 7,
  },
  phonetxt: {
    fontWeight: 'bold',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  phoneContainer: {
    height: width * 0.18,
    width: width * 0.7,
    backgroundColor: '#F7F8FA',
  },

  btnView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: height * 0.02,
  },
  mainContainer: {flex: 1, backgroundColor: '#fff'},
});
export default PhoneNo;

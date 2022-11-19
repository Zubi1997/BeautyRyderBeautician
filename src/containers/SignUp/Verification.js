import React, { Component, useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import colors from '../../assets/colors';
import FontText from '../../Components/common/FontText';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { hp, wp, normalize, isIOS, isX } from '../../styles/responsiveScreen';
import { useTranslation } from 'react-i18next';
import BigButton from '../../Components/BigButton';
import ResetPassword, {
  routeName as ResetPasswordRouteName,
} from '../ForgotPassword/ResetPassword';
import Accountcreated, {
  routeName as AccountcreatedRouteName,
} from './accountCreated';
import BankAccDetails, {
  routeName as BankAccDetailsRouteName,
} from '../BankDetails/BankAccDetails';
import SucessFullDefault from '../../Components/SucessFullDefault/SucessFullDefault';

const { width, height } = Dimensions.get('screen');

export const routeName = 'Verification';

const Verification = props => {
  const [seconds, setSeconds] = useState(60);
  const { t } = useTranslation();
  const { bool } = props.route.params;
  const { navigation } = props;
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    return () => {
      clearTimeout(seconds);
    };
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'height' : 'height'}
        keyboardVerticalOffset={Platform.select({
          ios: -200,
          android: -100,
        })}>
        <View style={styles.container}>

          <BackHeader BackonPress={() => navigation.goBack()}></BackHeader>

          {bool == 1 ? (

            <SucessFullDefault style={{ paddingBottom: hp(2) }} Title={t('EMAIL_SENT!')}
              Subtitle={t('CHECK_INBOX')} />
          ) : bool == 3 ? (
            <SucessFullDefault Title={t('BANK_ACC_ADD')}
              Subtitle={t('LOREM')} />


          ) :
            (
              <SucessFullDefault style={{ paddingBottom: hp(2), paddingTop: hp(6) }} Title={t('VERIFICATION_CODE')}
                Subtitle={t('CHECK_INBOX')} />

            )}


          {bool !== 3 ? (
            <View>
              <OTPInputView
                style={styles.otp}
                pinCount={4}
                editable={true}
                autoFocusOnLoad={false}
                
                codeInputFieldStyle={styles.otpinput}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />

              <View style={{ marginHorizontal: wp(3) }}>
                <FontText
                  name={'poppins-medium'}
                  size={normalize(14)}
                  textAlign={'right'}
                  color={'lightViolet'}>
                  {t('`RESEND_CODE`')}
                  <FontText color={'primary'}>
                    {`00:${seconds < 10 ? '0' : ''}`}
                    {seconds}
                    {t('SEC')}
                  </FontText>
                </FontText>
              </View>
            </View>
          ) : null}

          <View style={styles.btnView}>
            {bool == 1 ? (
              <BigButton
                style={{ position: 'absolute', alignSelf: 'center' }}
                title={t('VERIFY')}
                onClick={() => navigation.navigate(ResetPasswordRouteName)}
              />
            ) : bool == 3 ? (
              <BigButton
                style={{ position: 'absolute', alignSelf: 'center' }}
                title={t('ADD_MORE_BANK')}
                onClick={() => navigation.navigate(BankAccDetailsRouteName)}
              />
            ) : (
              <BigButton
                title={t('VERIFY')}
                onClick={() => navigation.navigate(AccountcreatedRouteName)}
              />
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

//
const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
    marginTop: hp(2),
  },
  otpinput: {
    width: width * 0.17,
    height: width * 0.15,
    borderWidth: 0,
    borderRadius: 14,
    fontSize: normalize(20),
    margin: wp(1),
    color: colors.violet,
    backgroundColor: '#F7F8FA',
    fontWeight: 'bold',
  },
  otp: {
    height: hp(10),
    width: wp(85),
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: hp(1),
    marginTop:hp(3),
  },
  btnView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: hp(2),
    alignSelf: 'center',
    // height:height >767 ? '45%' : '20%',
  },
});
export default Verification;

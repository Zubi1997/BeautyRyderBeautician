import React, { Component, useState, createRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  I18nManager,
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import colors from '../../assets/colors';
import TitleSubTitle from '../../Components/TitleSubTitle';
import {
  hp,
  wp,
  normalize,
  isX,
  isAndroid,
} from '../../styles/responsiveScreen';
import Input from '../../Components/common/Input';
import { useTranslation } from 'react-i18next';
import BigButton from '../../Components/BigButton';
import ResetPasswordPop, {
  routeName as ResetPasswordPopRouteName,
} from './ResetPassPop';

const { width, height } = Dimensions.get('screen');

export const routeName = 'ResetPassword';

const ResetPassword = ({ navigation }) => {
  const [Password, setPassword] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideCPassword, setHideCPassword] = useState(true);
  const ConfirmPasswordRef = createRef();
  const [PasswordError, setPasswordError] = useState(0);
  const [ConfirmPasswordError, setConfirmPasswordError] = useState(0);
  const [PasswordChangeBool, setPasswordChangeBool] = useState(false);
  const [ConfirmPasswordChangeBool, setConfirmPasswordChangeBool] =
    useState(false);
  const { t } = useTranslation();

  function changeHandler() {
    if (PasswordChangeBool) {
      PasswordValidation();
    }
    if (ConfirmPasswordChangeBool) {
      ConfirmPasswordValidation();
    }
  }

  function PasswordValidation() {
    if (Password.length == 0) {
      setPasswordError(1);
    } else if (Password.length < 7) {
      setPasswordError(2);
    } else {
      setPasswordError(0);
    }

    setPasswordChangeBool(true);
  }

  const ConfirmPasswordValidation = text => {
    if (NewPassword.length == 0) {
      setConfirmPasswordError(1);
    } else if (NewPassword === Password) {
      setNewPassword(NewPassword);
      setConfirmPasswordError(0);
    } else {
      setConfirmPasswordError(2);
    }

    setConfirmPasswordChangeBool(true);
  };

  const SubmitHandler = () => {
    PasswordValidation();
    ConfirmPasswordValidation();

    if (
      Password == NewPassword &&
      Password.length != 0 &&
      NewPassword.length != 0
    ) {
      navigation.navigate(ResetPasswordPopRouteName);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={'height'}
        keyboardVerticalOffset={Platform.select({ ios: -300, android: -100 })}>
        <View style={styles.container}>
          <BackHeader BackonPress={() => navigation.goBack()}></BackHeader>
          <TitleSubTitle
            Title={t('RESET_PASSWORD')}
            SubTitle={t('ENTER_YOUR_REGISTERED')}
            textalign={'left'}
            pTop={hp(1)}></TitleSubTitle>

          <View style={styles.viewf}>
            <Input
              returnKeyType={'next'}
              onChangeText={val => {
                setPassword(val);
                changeHandler();
              }}
              maxLength={25}
              secureTextEntry={hidePassword}
              rightimage={
                hidePassword
                  ? require('../../assets/images/eyeoff.png')
                  : require('../../assets/images/eye.png')
              }
              onPressRight={() => {
                setHidePassword(!hidePassword);
              }}
              inputStyle={[
                styles.inputNew,
                {
                  borderWidth: PasswordError != 0 ? 1 : 0,
                  borderColor: PasswordError != 0 ? '#ff0000' : null,
                },
              ]}
              placeholder={t('NEW_PASSWORD')}
              fontSize={normalize(16)}
              onSubmit={() => {
                PasswordValidation();
                ConfirmPasswordRef.current.focus();
              }}
              onBlur={() => PasswordValidation()}></Input>
            <TouchableOpacity
              style={styles.icons}
              onPress={() => setHidePassword(!hidePassword)}>
              {hidePassword ? (
                <Image
                  style={styles.image}
                  source={require('../../assets/images/eyeoff.png')}
                />
              ) : (
                <Image
                  style={styles.image}
                  source={require('../../assets/images/eye.png')}
                />
              )}
            </TouchableOpacity>
          </View>

          {PasswordError == 1 ? (
            <View>
              <Text style={styles.Password}>{t('PLEASE_ENTER_PASSWORD')}</Text>
            </View>
          ) : PasswordError == 2 ? (
            <View>
              <Text style={styles.eror}>{t('PASSWORD_8_CHAR_LONG')}</Text>
            </View>
          ) : null}

          <View style={styles.viewf}>
            <Input
              value={NewPassword}
              returnKeyType={'done'}
              onChangeText={val => {
                changeHandler();
                setNewPassword(val);
              }}
              secureTextEntry={hideCPassword}
              maxLength={25}
              ref={ConfirmPasswordRef}
              inputStyle={[
                styles.inputC,
                {
                  borderWidth: ConfirmPasswordError != 0 ? 1 : 0,
                  borderColor: ConfirmPasswordError != 0 ? '#ff0000' : null,
                },
              ]}
              placeholder={t('CONFIRM_PASSWORD')}
              fontSize={normalize(16)}
              onSubmit={() => ConfirmPasswordValidation()}
              onBlur={() => ConfirmPasswordValidation()}></Input>
            <TouchableOpacity
              style={styles.icons}
              onPress={() => setHideCPassword(!hideCPassword)}>
              {hideCPassword ? (
                <Image
                  style={styles.image}
                  source={require('../../assets/images/eyeoff.png')}
                />
              ) : (
                <Image
                  style={styles.image}
                  source={require('../../assets/images/eye.png')}
                />
              )}
            </TouchableOpacity>
          </View>

          {ConfirmPasswordError == 1 ? (
            <View>
              <Text style={styles.cPassword}>
                {t('PLEASE_ENTER_CONFIRM_PASSWORD')}
              </Text>
            </View>
          ) : ConfirmPasswordError == 2 ? (
            <View>
              <Text style={styles.npassword}>{t('PASSWORD_NOT_MATCH')}</Text>
            </View>
          ) : null}

          <View style={styles.btnView}>
            <BigButton
              title={t('CONFIRM')}
              onClick={SubmitHandler}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: wp(5),
  },
  Password: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginLeft: width * 0.02,
  },
  cPassword: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginLeft: width * 0.025,
  },
  inputNew: {
    backgroundColor: colors.offwhite,
    borderRadius: 14,
    height: hp(8),
    width: wp(90),
    paddingHorizontal: wp(5),
    paddingRight: wp(15),
    flexDirection: 'row',
    textAlign: I18nManager.isRTL ? 'right':'left',
  },
  viewf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: isX ? wp(1) : wp(1),
    marginVertical: isX ? wp(2) : wp(2),
    paddingTop: isX ? hp(0) : hp(1),
    fontSize: normalize(16),
    width: wp(80),
  },
  npassword: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginLeft: width * 0.025,
  },
  icons: {
    marginVertical: hp(4),
    padding: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    position: 'absolute',
    right: -wp(5),
    alignSelf: 'center',
  },
  image: {
    width: wp(6.5),
    height: wp(6.5),
    marginRight: wp(3.5),
    marginTop: hp(-0.5),
    opacity: 0.3,
  },
  btnView: {
    flex: 1,
    alignSelf:'center',
    justifyContent: 'flex-end',
    marginBottom: height > 767 ? height * 0.01 : height * 0.02,
  },
  eror: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginLeft: width * 0.025,
  },
  inputC: {
    backgroundColor: colors.offwhite,
    borderRadius: 14,
    height: hp(8),
    width: wp(90),
    paddingHorizontal: wp(5),
    paddingRight: wp(15),
    textAlign:I18nManager.isRTL ? 'right':'left',
  },
});

export default ResetPassword;

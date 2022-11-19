import React, { Component, useRef, useState, createRef, useEffect } from 'react';

import FontText from '../../Components/common/FontText';
import SvgIcons from '../../assets/SvgIcons';
import HeaderWithLogo from '../../Components/HeaderWithLogo';
import TextFieldWithImage from '../../Components/TextFieldWithImage';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Text,
  I18nManager,
  Keyboard,
  Pressable,
} from 'react-native';
import { hp, wp, normalize, isIOS, isX } from '../../styles/responsiveScreen';
import fonts from '../../assets/fonts';
import { useTranslation } from 'react-i18next';
import BigButton from '../../Components/BigButton';
import ForgotPassword, {
  routeName as ForgotPasswordRouteName,
} from '../ForgotPassword';
import colors from '../../assets/colors';

const { width, height } = Dimensions.get('screen');

export const routeName = 'LogIn';

const LogIn = ({ navigation }) => {
  const { t } = useTranslation();

  const PasswordRef = createRef();
  const [hidePassword, setHidePassword] = useState(true);
  const [EmailColor, setEmailColor] = useState(false);
  const [PasswordColor, setPasswordColor] = useState(false);
  const [EmailText, setEmailText] = useState('');
  const [PasswordText, setPasswordText] = useState('');
  const [EmailError, setEmailError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);
  const [EmailChangeBool, setEmailChangeBool] = useState(false);
  const [PasswordChangeBool, setPasswordChangeBool] = useState(false);
  const [UserAlready_Login, setUserAlready_Login] = useState(false);

  const ChangeHandler = Bool => {
    if (EmailChangeBool) {
      EmailValidation();
    }
    if (PasswordChangeBool) {
      PasswordValidation();
    }
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const EmailValidation = () => {
    if (!validateEmail(EmailText)) {
      setEmailColor(true);
      setEmailError(true);
    } else {
      setEmailColor(false);
      setEmailError(false);
    }
    setEmailChangeBool(true);
  };

  const PasswordValidation = () => {
    if (PasswordText.length < 8) {
      setPasswordColor(true);
      setPasswordError(true);
    } else {
      setPasswordColor(false);
      setPasswordError(false);
    }

    setPasswordChangeBool(true);
  };

  const submitHandler = () => {
    EmailValidation();
    PasswordValidation();

    if (
      validateEmail(EmailText) &&
      PasswordText.length != 0 &&
      PasswordText.length > 7
    ) {
      if (
        null
      ) {
        navigation.navigate('Tab');
      } else {
        setUserAlready_Login(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View>
          <HeaderWithLogo
            onPress={() => navigation.navigate('Tab')}
            label={t('SKIP_LOGIN')}
          />

          <View style={styles.itemView}>
            <FontText
              name={'poppins-medium'}
              size={normalize(22)}
              color={'textcolor'}>
              {t('REGISTER_TO')}
            </FontText>
            <FontText
              name={'poppins-medium'}
              size={normalize(22)}
              pureColor={colors.primary}
              style={{marginLeft:7}}
              >
              {t('Beauticians')}
            </FontText>
          </View>

          <FontText
            name={'poppins-medium'}
            pLeft={wp(3)}
            size={normalize(16)}
            pTop={hp(0.4)}
            color={'lightViolet'}>
            {t('Enter_your_number')}
          </FontText>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.select({
              ios: 0,
              android: 200,
            })}>
            <View style={{ marginTop: hp(2) }}>
              <TextFieldWithImage
                TextFieldImage={require('../../assets/images/Message.png')}
                Title={t('EMAIL')}
                maxLength={15}
                value={EmailText}
                blurOnSubmit={false}
                autoFocus={true}
                placeholder={t('ENTER_YOUR_EMAIL')}
                returnKeyType="next"
                onSubmitEditing={() => {
                  EmailValidation();
                  PasswordRef.current.focus();
                  Keyboard.dismiss();
                }}
                onChangeText={val => {
                  setEmailText(val.trim());
                  ChangeHandler();
                }}
                redColor={EmailColor}
                onBlur={() => EmailValidation()}
              />
            </View>

            {EmailError ? (
              <View>
                <Text style={styles.email}>{t('EMAIL_NOT_VALID')}</Text>
              </View>
            ) : null}

            <View style={{ marginTop: hp(2) }}>
              <TextFieldWithImage
                TextFieldImage={require('../../assets/images/Password.png')}
                Title={t('PASSWORD')}
                maxLength={8}
                blurOnSubmit={true}
                placeholder={t('ENTER_YOUR_PASSWORD')}
                secureTextEntry={hidePassword}
                rightimage={
                  hidePassword
                    ? require('../../assets/images/eyeoff.png')
                    : require('../../assets/images/eye.png')
                }
                onPressRight={() => {
                  setHidePassword(!hidePassword);
                }}
                onSubmitEditing={() => {
                  PasswordValidation();
                }}
                onChangeText={val => {
                  setPasswordText(val);
                  ChangeHandler();
                }}
                ref={PasswordRef}
                returnKeyType="done"
                redColor={PasswordColor}
                onBlur={() => PasswordValidation()}
              />
            </View>

            {PasswordError ? (
              <View>
                <Text style={styles.Password}>{t('PASSWORD_8_CHAR')}</Text>
              </View>
            ) : null}

            {UserAlready_Login && (
              <View>
                <Text style={styles.register}>{t('NOT_REGISTER')}</Text>
              </View>
            )}
          </KeyboardAvoidingView>
        </View>

        <View style={{ flex: 1 }}>

          <TouchableOpacity style={{ width: wp(40), alignSelf: 'flex-end' }}>
            <FontText
              name={'poppins-medium'}
              size={normalize(14)}

              color={'red'}
              pTop={hp(1)}
              pRight={wp(3)}
              textAlign={'right'}
              onPress={() => navigation.navigate(ForgotPasswordRouteName)}>
              {t('FORGOT_PASSWORD?')}
            </FontText>
          </TouchableOpacity>

          <View
            style={{
              marginTop:
                PasswordError || EmailError ? height * 0.015 : height * 0.05,
            }}>
            <FontText
              name={'poppins-medium'}
              size={normalize(14)}
              color={'textcolor'}
              textAlign={'center'}>
              {t('LOGIN_SOCIAL_MEDIA')}
            </FontText>

            <View style={styles.social}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/Google.png')}
                  style={styles.socialimg}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/twitter.png')}
                  style={styles.socialimg}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/facebook.png')}
                  style={styles.socialimg}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.btnView}>
          <BigButton
            // style={{position: 'absolute'}}
            title={t('LOGIN')}
            onClick={submitHandler}
          />
        </View>
        <View style={styles.sign}>
          <FontText
            size={normalize(14)}
            name={'poppins-medium'}
            textAlign={'center'}>
            {t('DON`T_ACCOUNT')}
          </FontText>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <FontText
              name={'poppins-semibold'}
              size={normalize(14)}
              color={'red'}
              pLeft={5}>
              {t('SIGN_UP')}
            </FontText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(3),
  },
  img: {
    height: wp(20),
    width: wp(20),
    marginTop: hp(3),
  },
  email: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginHorizontal: width * 0.05,
  },
  Password: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginHorizontal: width * 0.05,
  },
  register: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginHorizontal: width * 0.05,
    marginTop: width * 0.02,
  },
  btn: {
    borderRadius: 14,
    height: hp(7),
    width: wp(85),
    alignSelf: 'center',
    marginTop: hp(6),
    justifyContent: 'center',
    backgroundColor: '#FD8839',
  },
  sign: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(2.5),
    marginBottom: hp(4)
  },
  social: {
    flexDirection: 'row',
    marginTop: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginTop: height > 768 ? height * 0.2 : height * 0.05,
  },
  socialimg: {
    height: wp(13),
    width: wp(13),
    margin: 10,
    borderRadius: 50,
  },
  itemView: {
    flexDirection: 'row',
    marginHorizontal: wp(3),
    marginTop: hp(2.5),
    alignItems: 'center',
  },
});
export default LogIn;

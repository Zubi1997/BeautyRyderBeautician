import React, { Component, createRef, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  Text,
  SafeAreaView,
  I18nManager,
} from 'react-native';
import { hp, wp, normalize, isIOS, isX } from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import FontText from '../../Components/common/FontText';
import TextFieldWithImage from '../../Components/TextFieldWithImage';
import TitleSubTitle from '../../Components/TitleSubTitle';
import HeaderWithLogo from '../../Components/HeaderWithLogo';
import fonts from '../../assets/fonts';
import { useTranslation } from 'react-i18next';
import LogIn, { routeName as LogInRouteName } from '../LogIn';
// import Accountcreated, {
//   routeName as AccountcreatedRouteName,
// } from './accountCreated';
import Accountcreated, {
  routeName as Verification,
} from './Verification';
import BigButton from '../../Components/BigButton';
import PhoneInput from 'react-native-phone-number-input';

const { width, height } = Dimensions.get('screen');

export const routeName = 'SignUp';

const SignUp = ({ navigation }) => {
  const ShopName = createRef();
  const EmailRef = createRef();
  const PasswordRef = createRef();
  const ConfirmPasswordRef = createRef();
  const [hidePassword, setHidePassword] = useState(true);
  const [hideCPassword, setHideCPassword] = useState(true);
  const [EmailColor, setEmailColor] = useState(false);
  const [PasswordColor, setPasswordColor] = useState(false);
  const [ConfirmPasswordColor, setConfirmPasswordColor] = useState(false);
  const [EmailText, setEmailText] = useState(null);
  const [PasswordText, setPasswordText] = useState('');
  const [ConfirmPasswordText, setConfirmPasswordText] = useState('');
  const [EmailError, setEmailError] = useState(false);
  const [PasswordError, setPasswordError] = useState(0);
  const [EmailChangeBool, setEmailChangeBool] = useState(false);
  const [PasswordChangeBool, setPasswordChangeBool] = useState(false);
  const [ConfirmPasswordChangeBool, setConfirmPasswordChangeBool] =
    useState(false);
  const [ConfirmPasswordError, setConfirmPasswordError] = useState(0);
  const [ShopNameText, setShopNameText] = useState('');
  const [ShopNameError, setShopNameError] = useState(false);
  const [ShopNameChangeBool, setShopNameChangeBool] = useState(false);
  const [ShopNameColor, setShopNameColor] = useState(false);
  const { t } = useTranslation();
  const phoneInput = useRef(null);

  const ChangeHandler = () => {
    if (ShopNameChangeBool) {
      ShopNameValidation();
    }
    if (EmailChangeBool) {
      EmailValidation();
    }
    if (PasswordChangeBool) {
      PasswordValidation();
    }
    if (ConfirmPasswordChangeBool) {
      ConfirmPasswordValidation();
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
    if (PasswordText.length == 0) {
      setPasswordColor(true);
      setPasswordError(1);
    } else if (PasswordText.length < 7) {
      setPasswordColor(true);
      setPasswordError(2);
    } else {
      setPasswordColor(false);
      setPasswordError(0);
    }

    setPasswordChangeBool(true);
  };

  const ConfirmPasswordValidation = () => {
    if (ConfirmPasswordText.length == 0) {
      setConfirmPasswordColor(true);
      setConfirmPasswordError(1);
    } else if (PasswordText == ConfirmPasswordText) {
      setConfirmPasswordColor(false);
      setConfirmPasswordError(0);
    } else {
      setConfirmPasswordColor(true);
      setConfirmPasswordError(1);
    }

    setConfirmPasswordChangeBool(true);
  };

  const ShopNameValidation = () => {
    if (ShopNameText.length < 1) {
      setShopNameError(true);
      setShopNameColor(true);
    } else {
      setShopNameError(false);
      setShopNameColor(false);
    }

    setShopNameChangeBool(true);
  };

  const submitHandler = () => {
    navigation.navigate(Verification, {bool: 2});
return
    ShopNameValidation();
    EmailValidation();
    PasswordValidation();

    if (
      ShopNameText.length != 0 &&
      validateEmail(EmailText) &&
      PasswordText.length != 0
    ) {
      navigation.navigate(AccountcreatedRouteName);
    }

  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contain}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}>
          <ScrollView
            alwaysBounceVertical={true}
            showsVerticalScrollIndicator={false}>
            <HeaderWithLogo
              label={t('SKIP_SIGN_UP')}
              onPress={() => navigation.navigate('Tab')}></HeaderWithLogo>

            <TitleSubTitle
              Textstyle={styles.create}
              Title={t('CREAT_ACCOUNT')}
              SubTitle={t('Enter_your_number')}
              textalign={'left'}
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

            {PasswordError == 1 ? (
              <View>
                <Text style={styles.password}>{t('ENTER_YOUR_PASSWORD')}</Text>
              </View>
            ) : PasswordError == 2 ? (
              <View>
                <Text style={styles.cpassword}>{t('PASSWORD_8_CHAR')}</Text>
              </View>
            ) : null}

            <View style={styles.btnView}>
              <BigButton title={t('SIGN_UP')} onClick={submitHandler} />
            </View>
            <View style={styles.socialmedia}>

              <View style={{flexDirection:"row",justifyContent:'center',alignItems:'center'}}>
                <View style={{width:'35%',height:2,backgroundColor:colors.primary,marginRight:10}}></View>
                <FontText
                  name={'poppins-medium'}
                  size={normalize(22)}
                  color={'textcolor'}
                  // style={{margin:15}}
                  >
                  or
                </FontText>
                <View style={{width:'35%',height:2,backgroundColor:colors.primary,marginLeft:10}}></View>
              </View>

              <View style={styles.social}>
                <TouchableOpacity style={styles.social_btn}>
                  <Image
                    source={require('../../assets/images/twitter.png')}
                    style={styles.socialimg}
                  />
                  <FontText
                    name={'poppins-medium'}
                    size={normalize(18)}
                    color={'textcolor'}
                    style={{marginLeft:10}}
                    >
                    {t('Continue_apple')}
                  </FontText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.social_btn}>
                  <Image
                    source={require('../../assets/images/facebook.png')}
                    style={styles.socialimg}
                  />
                  <FontText
                    name={'poppins-medium'}
                    size={normalize(18)}
                    color={'textcolor'}
                    style={{marginLeft:10}}
                    >
                    {t('Continue_facebook')}
                  </FontText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.social_btn}>
                  <Image
                    source={require('../../assets/images/Google.png')}
                    style={styles.socialimg}
                  />
                <FontText
                  name={'poppins-medium'}
                  size={normalize(18)}
                  color={'textcolor'}
                  style={{marginLeft:10}}
                  >
                  {t('Continue_google')}
                </FontText>
                </TouchableOpacity>
              </View>
            </View>



              {/* <View style={styles.sign}>
                <FontText
                  size={normalize(14)}
                  name={'poppins-medium'}
                  textAlign={'center'}>
                  {t('ALREADY_ACCOUNT?')}
                </FontText>
                <TouchableOpacity
                  onPress={() => navigation.navigate(LogInRouteName)}>
                  <FontText
                    name={'poppins-semibold'}
                    size={normalize(14)}
                    color={'red'}
                    pLeft={5}>
                    {t('LOGIN')}
                  </FontText>
                </TouchableOpacity>
              </View> */}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: colors.white },
  contain: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(3),
  },
  create: { marginHorizontal: 0, marginTop: width * 0.02 },
  shop: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginTop: width * 0.02,
    marginHorizontal: width * 0.05,
  },
  email: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginTop: width * 0.02,
    marginHorizontal: width * 0.05,
  },
  password: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginTop: width * 0.01,
    marginHorizontal: width * 0.05,
  },
  cpassword: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginTop: width * 0.01,
    marginHorizontal: width * 0.05,
  },
  btnView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: height > 768 ? width * 0.06 : width * 0.02,
    marginTop:30
  },
  social: {
    // flexDirection: 'row',
    marginTop: hp(1),
    justifyContent: 'center',
  },
  socialimg: {
    height: wp(10),
    width: wp(10),
    margin: 10,
  },
  socialmedia: { marginTop: hp(5), marginBottom: hp(4) },
  sign: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(2.5),
    marginBottom: hp(4),
  },
  phonetxt: {
    fontWeight: 'bold',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  phoneContainer: {
    height: width * 0.18,
    width: wp(92),
    backgroundColor: '#F7F8FA',
    alignSelf:'center'
  },
  social_btn:{
    backgroundColor:'#EEEEEE',
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:15
  }
});

export default SignUp;

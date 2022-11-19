import React, { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  I18nManager
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import colors from '../../assets/colors';
import FontText from '../../Components/common/FontText';
import TitleSubTitle from '../../Components/TitleSubTitle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp, normalize, isIOS, isX } from '../../styles/responsiveScreen';
import Input from '../../Components/common/Input';
import { useTranslation } from 'react-i18next';
import BigButton from '../../Components/BigButton';
import LogIn, { routeName as LogInRouteName } from '../LogIn';
import Verification, {
  routeName as VerificationRouteName,
} from '../SignUp/Verification';

const { width, height } = Dimensions.get('screen');

export const routeName = 'ForgotPassword';

const ForgotPassword = ({ navigation }) => {
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState(false);
  const [EmailChangeBool, setEmailChangeBool] = useState(false);
  const { t } = useTranslation();

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  const ChangeHandler = () => {
    if (EmailChangeBool) {
      Emailvalidation();
    }
  };

  function Emailvalidation() {
    if (!validateEmail(Email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    setEmailChangeBool(true);
  }

  const SubmitHandler = () => {
    Emailvalidation();

    if (validateEmail(Email)) {
      navigation.navigate(VerificationRouteName, { bool: 1 });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'height' : 'height'}
        keyboardVerticalOffset={Platform.select({
          ios: -200,
          android: -100,
        })}>
        <BackHeader
          BackonPress={() => navigation.goBack()}

        ></BackHeader>
        <View style={{ width: wp(100) }}>
          <TitleSubTitle
            Title={t('FORGOT_PASSWORD?')}
            SubTitle={t('ENTER_YOUR_REGISTERED')}
            textalign={'left'}
            pTop={hp(1)}></TitleSubTitle>
        </View>

        <View style={styles.viewg}>
          <Input
            value={Email}
            onChangeText={val => {
              setEmail(val.trim());
              ChangeHandler();
            }}
            inputStyle={[
              styles.inputEmail,
              {
                borderWidth: EmailError ? 1 : 0,
                borderColor: EmailError ? '#ff0000' : null,
              },
            ]}
            fontSize={normalize(16)}
            height={hp(4)}
            width={hp(90)}
            maxLength={50}
            placeholder={t('EMAIL_ADDRESS')}
            placeholdertextcolor={colors.lightViolet}
            onSubmitEditingHandler={() => console.log('Hello')}
          />
        </View>
        {EmailError ? (
          <View>
            <Text style={styles.email}>{t('EMAIL_NOT_VALID')}</Text>
          </View>
        ) : null}

        <View style={styles.btnView}>
          <View style={styles.remView}>
            <FontText
              size={normalize(14)}
              name={'poppins-medium'}
              textAlign={'center'}>
              {t('REM_PASSWORD?')}
            </FontText>
            <TouchableOpacity
              onPress={() => navigation.navigate(LogInRouteName)}>
              <FontText
                name={'poppins-medium'}
                size={normalize(14)}
                color={'red'}>
                {t('LOGIN')}
              </FontText>
            </TouchableOpacity>
          </View>
          <View>
            <BigButton
              style={{ position: 'absolute' }}
              title={t('SUBMIT')}
              onClick={SubmitHandler}
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
    paddingHorizontal: wp(4),
  },
  email: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginLeft: width * 0.05,
    marginTop: -width * 0.02,
  },
  btnView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: height * 0.1,
  },
  remView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewg: {
    marginHorizontal: hp(1),
    marginVertical: hp(2),
  },
  inputEmail: {
    backgroundColor: colors.offwhite,
    borderRadius: 14,
    height: width * 0.15,
    paddingHorizontal: wp(5),
    textAlign: I18nManager.isRTL ? 'right':'left',
  },
});

export default ForgotPassword;

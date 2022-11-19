import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontText from '../../Components/FontText';
import {normalize, hp, wp, isX, isAndroid} from '../../styles/responsiveScreen';
import {useTranslation, withTranslation} from 'react-i18next';
import appConstant from '../../helper/appConstant';
import colors from '../../assets/colors';
import Input from '../../Components/common/Input';
import BigButton from '../../Components/BigButton';
import SvgIcons from '../../assets/SvgIcons';

export const routeName = 'PopUp';

const {height, width} = Dimensions.get('screen');

const PopUp = props => {
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState(false);
  const [EmailChangeBool, setEmailChangeBool] = useState(false);
  const {navigation} = props;

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
      props.navigation();
      props.Close();
    }
  };
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={props.onPress}>
        <SvgIcons.Cross width={wp(10)} height={wp(10)} />
      </TouchableOpacity>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/images/app_logo.png')}
          style={styles.logo}
        />
        <View>
          <FontText
            size={normalize(26)}
            name={'poppins-medium'}
            color="blackNatural"
            pTop={hp(1)}
            pLeft={wp(4)}
            textAlign="left">
            {t('WELCOME')}
          </FontText>
          <Image
            source={require('../../assets/images/combers.png')}
            style={styles.sublogo}
            resizeMode="contain"
          />
        </View>
      </View>

      <FontText
        name={'poppins-medium'}
        size={normalize(20)}
        pTop={hp(2)}
        pLeft={wp(2)}>
        {t('LOGIN_FOR_A')}
      </FontText>
      <View>
        <View style={styles.box}>
          <SvgIcons.Roundarrow width={wp(8)} height={wp(8)} />
          <FontText
            name={'poppins-regular'}
            pLeft={wp(1)}
            pTop={hp(0.5)}
            textAlign={'left'}
            size={normalize(14)}
            style={styles.text}>
            {t('HOW_TO_CHOOSE')}
          </FontText>
        </View>

        <View style={styles.box}>
          <SvgIcons.Roundarrow width={wp(8)} height={wp(8)} />
          <FontText
            name={'poppins-regular'}
            pLeft={wp(1)}
            pTop={hp(0.5)}
            textAlign={'left'}
            size={normalize(14)}
            style={styles.text}>
            {t('HOW_TO_BUILD')}
          </FontText>
        </View>
        <View style={styles.box}>
          <SvgIcons.Roundarrow width={wp(8)} height={wp(8)} />
          <FontText
            name={'poppins-regular'}
            pLeft={wp(1)}
            textAlign={'left'}
            size={normalize(14)}
            style={styles.text}>
            {t('START_A_BLOG')}
          </FontText>
        </View>
      </View>

      <View style={styles.inputView}>
        <FontText
          name={'poppins-medium'}
          size={normalize(16)}
          style={{marginVertical: hp(1)}}>
          {t('ENTER_EMAIL')}
        </FontText>
        <Input
          value={Email}
          onChangeText={val => {
            setEmail(val.trim());
            ChangeHandler();
          }}
          inputStyle={[
            styles.input,
            {
              borderWidth: EmailError ? 1 : 0,
              borderColor: EmailError ? '#ff0000' : null,
            },
          ]}
          fontSize={normalize(16)}
          fontName={'poppins-regular'}
          height={hp(4)}
          width={hp(90)}
          maxLength={50}
          placeholder={t(appConstant.EmailPlace)}
          placeholdertextcolor={colors.lightViolet}
          onSubmitEditingHandler={() => console.log('Hello')}
        />
      </View>
      {EmailError ? (
        <View>
          <FontText style={styles.error}>{t('EMAIL_NOT_VALID')}</FontText>
        </View>
      ) : null}

      <View style={styles.btnView}>
        <BigButton title={t('CONTINUE')} onClick={SubmitHandler} />
      </View>

      <View
        style={{
          marginTop: EmailError ? height * 0.015 : height * 0.01,
          flex: 1,
        }}>
        <FontText
          name={'poppins-medium'}
          size={normalize(14)}
          color={'Violet'}
          textAlign={'center'}
          style={styles.socialtxt}>
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
  );
};

export default PopUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(1),
    marginHorizontal: wp(4),
  },
  logo: {
    height: wp(24),
    width: wp(24),
  },
  sublogo: {
    height: wp(8),
    width: wp(40),
    marginHorizontal: wp(4),
    marginVertical: wp(2),
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    marginVertical: hp(2),
    flexDirection: 'row',
    marginHorizontal: wp(2),
    width: wp(80),
  },
  text: {
    fontWeight: '400',
    justifyContent: 'center',
    alignSelf: 'center',
    lineHeight: normalize(16),
  },
  error: {
    color: '#ff0000',
    fontSize: normalize(16),
    marginLeft: width * 0.05,
    marginTop: width * 0.02,
  },
  btnView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: height > 768 ? height * 0.09 : height * 0.02,
  },
  social: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: height > 768 ? height * 0.05 : height * 0.0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialimg: {
    height: wp(13),
    width: wp(13),
    margin: 10,
    borderRadius: 50,
  },
  socialtxt: {marginTop: height > 768 ? height * -0.07 : height * 0},
  icon: {alignSelf: 'flex-end'},
  inputView: {marginHorizontal: hp(1), marginTop: height * -0.01},
  input: {
    backgroundColor: colors.offwhite,
    borderRadius: 14,
    height: width * 0.15,
    paddingHorizontal: wp(5),

    fontWeight: 'normal',
  },
});

import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Keyboard,
  I18nManager,
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import { ProgressBar } from 'react-native-paper';
import FontText from '../../Components/FontText';
import { hp, normalize, wp } from '../../styles/responsiveScreen';
import Input from '../../Components/common/Input';
import colors from '../../assets/colors';
import { useTranslation } from 'react-i18next';
import TitleSubTitle from '../../Components/TitleSubTitle';
import SmartScrollView from '../../Components/common/SmartScrollView';
import BigButton from '../../Components/BigButton';
import CompleteProfile,{routeName as CompleteProfileRouteName} from './CompletProfile';

const { width, height } = Dimensions.get('screen');

export const routeName = 'AddSocial';

const AddSocial = (props) => {
  const { t } = useTranslation();

  const TwitterRef = useRef();
  const facebookRef = useRef();
  const InstagramRef = useRef();
  const PinterestRef = useRef();



  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
        title={t('COMPLETE_PROFILE')}
        BackonPress={() => props.navigation.goBack()}
        rightText={'3/3'}
        style={{ marginHorizontal: wp(2) }}
      />

      <ProgressBar
        progress={0.9}
        color={'#397DFF'}
        style={styles.ProgressBar}
      />

      <SmartScrollView alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginHorizontal: wp(2), backgroundColor: "#ffffff" }}>
        <TitleSubTitle Title={t('ADD_SOCIAL')} SubTitle={t('ENTER_SOCIAL')} style={{ marginHorizontal: hp(1.5) }} />
        <View style={styles.websiteView}>
          <FontText
            style={styles.FontTextStyle}
            name={'poppins-medium'}
            size={normalize(16)}>
            {t('WEBSITE')}
          </FontText>

          <Input
            placeholder={t('WEBSITE_TAG')}
            fontSize={normalize(16)}
            returnKeyType="next"
            blurOnSubmit={false}
            inputStyle={styles.InputStyle}
            style={styles.Input}
            fontName={'poppins-regular'}
            height={hp(6)}
            width={hp(90)}
            onSubmit={() => TwitterRef.current.focus()}
          />

          <FontText
            style={styles.FontTextStyle}
            name={'poppins-medium'}
            size={normalize(16)}>
            {t('TWITTER')}
          </FontText>

          <Input
            placeholder={t('TWITTER_LINK')}
            fontSize={normalize(16)}
            returnKeyType="next"
            blurOnSubmit={false}
            inputStyle={styles.InputStyle}
            style={styles.Input}
            fontName={'poppins-regular'}
            height={hp(6)}
            width={hp(90)}
            ref={TwitterRef}
            onSubmit={() => facebookRef.current.focus()}
          />

          <FontText
            style={styles.FontTextStyle}
            name={'poppins-medium'}
            size={normalize(16)}>
            {t('FACEBOOK')}
          </FontText>

          <Input
            placeholder={t('FACEBOOK_LINK')}
            fontSize={normalize(16)}
            returnKeyType="next"
            blurOnSubmit={false}
            inputStyle={styles.InputStyle}
            style={styles.Input}
            fontName={'poppins-regular'}
            height={hp(6)}
            width={hp(90)}
            ref={facebookRef}
            onSubmit={() => InstagramRef.current.focus()}
          />

          <FontText
            style={styles.FontTextStyle}
            name={'poppins-medium'}
            size={normalize(16)}>
            {t('INSTAGRAM')}
          </FontText>

          <Input
            placeholder={t('INSTAGRAM_LINK')}
            fontSize={normalize(16)}
            returnKeyType="next"
            blurOnSubmit={false}
            inputStyle={styles.InputStyle}
            style={styles.Input}
            fontName={'poppins-regular'}
            height={hp(6)}
            width={hp(90)}
            ref={InstagramRef}
            onSubmit={() => PinterestRef.current.focus()}
          />

          <FontText
            style={styles.FontTextStyle}
            name={'poppins-medium'}
            size={normalize(16)}>
            {t('PINTEREST')}
          </FontText>

          <Input
            placeholder={t('PINTEREST_LINK')}
            fontSize={normalize(16)}
            returnKeyType="next"
            blurOnSubmit={false}
            inputStyle={styles.InputStyle}
            style={styles.Input}
            fontName={'poppins-regular'}
            height={hp(6)}
            width={hp(90)}
            ref={PinterestRef}
            onSubmit={() => Keyboard.dismiss()}
          />
        </View>
        <View style ={{alignItems:'center',marginTop:hp(8),marginBottom:hp(2)}}>
          <BigButton title={t('CONTINUE')} onClick = {() => props.navigation.navigate(CompleteProfileRouteName)} />
        </View>
      </SmartScrollView>


    </SafeAreaView>
  );
};

export default AddSocial;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  ProgressBar: {
    width: width * 0.90,
    alignSelf: 'center',
    height: width * 0.02,
    borderRadius: width * 0.02,
    marginVertical: width * 0.02,
  },
  InputStyle: {
    backgroundColor: colors.viewcolor,
    borderRadius: 10,
    color: colors.lightViolet,
    paddingLeft: wp(3),
    textAlign: I18nManager.isRTL ? 'right':'left',
  },
  Input: {
    width: '100%',
    marginTop: width * 0.015,
  },
  ErrorView: {
    marginTop: width * 0.015,
    marginBottom: width * 0.01,
  },
  BTN: {
    width: width * 0.9,
    alignSelf: 'center',
    height: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.04,
    marginVertical: width * 0.1,
    backgroundColor: '#397DFF',
  },
  FontTextStyle: {
    marginTop: width * 0.03,
  },
  websiteView: {
    width: width * 0.9,
    alignSelf: 'center',
  },
});

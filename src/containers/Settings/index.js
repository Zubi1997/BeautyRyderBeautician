import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Image, Switch} from 'react-native';
import {wp, hp, normalize, isAndroid} from '../../styles/responsiveScreen';
import BackHeader from '../../Components/BackHeader';
import colors from '../../assets/colors';
import SettingComponents from '../../Components/SettingComponets';
import SvgIcons from '../../assets/SvgIcons';
import FontText from '../../Components/common/FontText';
import Button from '../../Components/common/Button';
import LogIn, {routeName as LogInRouteName} from '../LogIn';
import changeLan, {routeName as ChangeLanRouteName} from './changeLan';
import {t} from 'i18next';

export const routeName = 'Settings';

const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(0);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{flex: 1}}>
        <BackHeader
          title={t('SETTINGS')}
          BackonPress={() => navigation.goBack()}
        />
        <View style={{flexDirection: 'row'}}>
          <SettingComponents
            title={t('NOTIFICATION')}
            image={require('../../assets/images/Notifi.png')}
            arrowColor={'#8384A1'}
            subtitle={t('NoTI_TAG')}
            onClick={() => {}}
          />
          <Switch
            trackColor={styles.track}
            thumbColor={colors.white}
            ios_backgroundColor={colors['gray-devider']}
            onValueChange={() => toggleSwitch()}
            value={isEnabled}
            style={styles.switch}
          />
        </View>
        <View style={styles.line}></View>
        <SettingComponents
          title={t('CHANGE_LAN')}
          image={require('../../assets/images/Filter.png')}
          arrowColor={colors['gray-natural']}
          subtitle={t('CHANGE_LAN_TAG')}
          onClick={() => navigation.navigate(ChangeLanRouteName)}
        />
        <View style={styles.line}></View>
        <SettingComponents
          title={t('CHANGE_PASSWORD')}
          image={require('../../assets/images/cp.png')}
          arrowColor={colors['gray-dark']}
          subtitle={t('CHANGE_PASS_TAG')}
          onClick={() => {}}
        />
        <View style={styles.line}></View>
        <SettingComponents
          title={t('TERMS')}
          image={require('../../assets/images/Paper.png')}
          arrowColor={colors['gray-dark']}
          subtitle={t('COMMON_TAG')}
          onClick={() => {}}
        />
        <View style={styles.line}></View>
        <SettingComponents
          title={t('PRIVACY')}
          image={require('../../assets/images/pp.png')}
          arrowColor={colors['gray-dark']}
          subtitle={t('COMMON_TAG')}
          onClick={() => {}}
        />
        <View style={styles.line}></View>
        <SettingComponents
          title={t('FAQ')}
          image={require('../../assets/images/info.png')}
          arrowColor={colors['gray-dark']}
          subtitle={t('COMMON_TAG')}
          onClick={() => {}}
        />
        <View style={styles.line}></View>
        <View style={styles.btnView}>
          <Button
            height={hp(5)}
            width={hp(15)}
            onPress={() => navigation.navigate(LogInRouteName)}
            style={styles.btn}>
            <FontText
              size={normalize(14)}
              color={'white'}
              name={'poppins-regular'}>
              {t('LOGOUT')}
            </FontText>
            <SvgIcons.Logout
              height={hp(2)}
              width={hp(2)}
              style={{marginLeft: wp(5)}}
            />
          </Button>
        </View>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/images/Combers1.png')}
          />
          <FontText
            size={normalize(12)}
            color={'lightViolet'}
            name={'poppins-medium'}
            style={styles.appVersion}>
            App Version 1.0.0
          </FontText>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  line: {
    backgroundColor: colors['gray-light'],
    height: hp(0.3),
  },
  mainContainer: {flex: 1, backgroundColor: '#ffffff'},
  track: {
    false: colors['gray-devider'],
    true: colors.primary,
  },
  switch: {
    transform: [{scaleX: isAndroid ? 1 : 0.7}, {scaleY: isAndroid ? 1 : 0.7}],
    marginTop: hp(1.5),
  },
  btnView: {justifyContent: 'center', alignItems: 'center'},
  btn: {
    marginTop: hp(5),
    flex: null,
    backgroundColor: colors.button,
    borderRadius: 10,
  },
  logo: {
    flexDirection: 'row',
    opacity: 0.5,
    alignSelf: 'center',
    marginTop: hp(5),
  },
  appVersion: {marginHorizontal: wp(4), opacity: 0.5},
});

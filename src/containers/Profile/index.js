import React, {Component, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import SvgIcons from '../../assets/SvgIcons';
import appConstant from '../../helper/appConstant';
import NavigationBar from '../../Components/NavigationBar';
import FontText from '../../Components/common/FontText/index';
import {useTranslation} from 'react-i18next';
import SettingComponents from '../../Components/SettingComponets';
import {routeName as shopDetailRouteName} from '../ShopDetail';
import {routeName as manageBabersRouteName} from '../ManageBarbers';
import Gallery, {routeName as GalleryRouteName} from '../Gallery';
import Bank, {routeName as BankRouteName} from '../BankDetails';
import Settings, {routeName as SettingsRouteName} from '../Settings';
import AddServices,{routeName as AddServicesRouteName} from '../AddServices';

export const routeName = 'profile';

const Profile = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/img/Profile/profile_bg.png')}
          style={{height: hp(26)}}>
          <NavigationBar
            hasCenter
            hasLeft
            hasRight
            style={styles.back}
            left={
              <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                <SvgIcons.Back height={wp(7)} width={wp(7)} />
              </TouchableOpacity>
            }
            center={
              <FontText
                size={normalize(20)}
                name={'poppins-semibold'}
                color="white"
                textAlign="center">
                {t('PROFILE')}
              </FontText>
            }
            right={null}
            centerStyle={styles.center}
          />
          <View style={styles.subView}>
            <Image
              source={require('../../assets/img/Profile/p1.jpg')}
              style={styles.profilepic}
            />
            <View style={{marginLeft: wp(2)}}>
              <FontText
                size={normalize(22)}
                name={'poppins-semibold'}
                color="white"
                textAlign="left">
                {appConstant.ProfileName}
              </FontText>
              <FontText
                size={normalize(14)}
                name={'poppins-regular'}
                color="white"
                textAlign="left">
                {appConstant.ProfileEmail}
              </FontText>
            </View>
          </View>
        </ImageBackground>

        <ScrollView
          contentContainerStyle={{paddingBottom: hp(3)}}
          showsVerticalScrollIndicator={false}>
          <SettingComponents
            title={t('SHOP_DETAILS')}
            image={require('../../assets/img/Profile/shop.png')}
            arrowColor={colors['gray-dark']}
            subtitle={t('SHOP_DETAILS_TAG')}
            onClick={() => {
              navigation.navigate(shopDetailRouteName);
            }}
          />
          <View style={styles.line}></View>

          <SettingComponents
            title={t('MANAGE_BARBERS')}
            image={require('../../assets/img/Profile/manage_barber.png')}
            arrowColor={colors['gray-dark']}
            subtitle={t('MANAGE_BARBERS_TAG')}
            onClick={() => {
              navigation.navigate(manageBabersRouteName);
            }}
          />
          <View style={styles.line}></View>
          <SettingComponents
            title={t('SERVICES')}
            image={require('../../assets/img/Profile/services.png')}
            arrowColor={colors['gray-dark']}
            subtitle={t('SERVICES_TAG')}
            onClick={() => {
              navigation.navigate(AddServicesRouteName);
            }}
          />
          <View style={styles.line}></View>
          <SettingComponents
            title={t('GALLERY')}
            image={require('../../assets/img/Profile/gallery.png')}
            arrowColor={colors['gray-dark']}
            subtitle={t('GALLERY_TAG')}
            onClick={() => navigation.navigate(GalleryRouteName)}
          />
          <View style={styles.line}></View>
          <SettingComponents
            title={t('BANK_ACC')}
            image={require('../../assets/img/Profile/bank_account.png')}
            arrowColor={colors['gray-dark']}
            subtitle={t('BANK_ACC_TAG')}
            onClick={() => navigation.navigate(BankRouteName)}
          />
          <View style={styles.line}></View>
          <SettingComponents
            title={t('SETTINGS')}
            image={require('../../assets/img/Profile/setting.png')}
            arrowColor={colors['gray-dark']}
            subtitle={t('SETTINGS_TAG')}
            onClick={() => navigation.navigate(SettingsRouteName)}
          />
          <View style={styles.line}></View>
          <View
            style={styles.profileView}>
            <Image
              source={require('../../assets/img/Profile/gray_logo.png')}
              resizeMode="contain"
              style={styles.img}
            />
            <FontText
              size={normalize(12)}
              name={'poppins-regular'}
              color="gray-placeholder"
              pLeft={wp(3)}
              textAlign="center">
              {appConstant.AppVersion}
            </FontText>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  back: {paddingVertical: hp(1.5), paddingTop: isX ? hp(5) : hp(2)},
  arrow: {
    height: hp(4),
    width: hp(5),
    marginTop: hp(6),
  },
  line: {
    backgroundColor: colors['gray-light'],
    height: hp(0.3),
  },
  img: {
    width: wp(30),
    opacity: 0.2,
  },
  profilepic: {
    height: hp(12),
    width: hp(12),
    borderRadius: hp(8),
    borderColor: colors.white,
    borderWidth: wp(0.7),
    marginLeft: wp(4),
    marginTop: hp(1),
  },
  subView: {flexDirection: 'row', alignItems: 'center'},
  center: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  profileView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;

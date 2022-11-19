import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {normalize, hp, wp, isX, isAndroid} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import BigButton from '../../Components/BigButton';
import SvgIcons from '../../assets/SvgIcons';
import {routeName as addServicesRouteName} from '../AddServices';
import {t} from 'i18next';
import NotificationHeader from '../../Components/common/NotificationHeader/NotificationHeader';
import EmptyDefault from '../../Components/EmptyDefault';

export const routeName = 'services';

const Services = ({props, navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <NotificationHeader Name = {t('SERVICES')} icon ={true} navigation = { () => navigation.goBack()}/>

        <View style={styles.mainView}>
          <EmptyDefault icon ={<SvgIcons.ServicesArt />} Title ={t('SERVICE_TAG')} Subtitle = {t('LOREM')}/>
          <View style={styles.btn}>
            <BigButton
              title={t('ADD_SERVICES')}
              onClick={() => {
                navigation.navigate(addServicesRouteName);
              }}
            />
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default Services;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {flex: 1, backgroundColor: '#ffffff'},
  center: {alignItems: 'flex-start', justifyContent: 'flex-start'},
  mainView: {justifyContent: 'space-between', flex: 1},
  subView: {alignItems: 'center', marginHorizontal: wp(4)},
  btn: {alignItems: 'center', marginBottom: hp(4)},
});

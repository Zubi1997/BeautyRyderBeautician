import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import { hp, wp, normalize, isIOS, isX } from '../../styles/responsiveScreen';
import { useTranslation, withTranslation } from 'react-i18next';
import Tab from './TopTabBar/tab';
import FontText from '../../Components/FontText';
import colors from '../../assets/colors';
import SvgIcons from '../../assets/SvgIcons';
import New from './new';
import EmptyDefault from '../../Components/EmptyDefault';
const screenWidth = Dimensions.get('window').width;
export const routeName = 'Appointment';
const Appointment = props => {
  const [tabTitle, setTabTitle] = useState('Upcoming');

  const [show, setshow] = useState(true);
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        {show ? (
          <View>
            <View style={styles.topName}>
              <FontText textAlign={'center'} style={styles.appotext}>
                {t('APPOINTMNET')}
              </FontText>
            </View>
            <EmptyDefault icon={<SvgIcons.AppointmentDefault />} Title={t('APPOINTMNET_TAG!')} Subtitle={t('LOREM')} onPress={() => setshow(!show)} />
          </View>
        ) : (
          <View style={styles.container1}>
            <View>
              <FontText textAlign={'center'} style={styles.mainText}>
                {t('Appoinment')}
              </FontText>
            </View>
            <View style={styles.lineSet}>
              <View style={styles.tabView}>
                <Tab
                  title={t('UPCOMING')}
                  isFocus={tabTitle === 'Upcoming' ? true : false}
                  click={() => {
                    setTabTitle('Upcoming');
                  }}
                />
                <Tab
                  title={t('CANCELLED')}
                  isFocus={tabTitle === 'Cancelled' ? true : false}
                  click={() => {
                    setTabTitle('Cancelled');
                  }}
                />
                <Tab
                  title={t('COMPLETED')}
                  isFocus={tabTitle === 'Completed' ? true : false}
                  click={() => {
                    setTabTitle('Completed');
                  }}
                />
              </View>
              <View style={styles.bottomline}></View>
            </View>

            <View>
              <New navigation={props.navigation} tabTitle={tabTitle} />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Appointment;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#ffffff' },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    alignItems: 'center',
  },
  appotext: {
    marginTop: hp(1),
    fontSize: normalize(18),
    fontWeight: 'bold',
    fontFamily: 'poppins-regular',
    lineHeight: hp(3),
    color: '#000000',
    alignSelf: 'center',
  },
  topName: {
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineSet: {
    width: (screenWidth / 3 - 20) * 3,
  },
  tabView: {
    flexDirection: 'row',
    marginTop: 30,
  },
  mainText: {
    marginTop: hp > 768 ? hp(10) : hp(15),
    fontSize: normalize(18),
    fontWeight: 'bold',
    fontFamily: 'poppins-regular',
    lineHeight: hp(3),
    color: '#000000',
    alignSelf: 'center',
  },
  bottomline: {
    height: 1,
    width: '100%',
    backgroundColor: colors.borderColor,
  },
});

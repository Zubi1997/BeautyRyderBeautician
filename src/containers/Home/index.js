import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import SvgIcons from '../../assets/SvgIcons';
import CompleteProfile from '../../Components/common/CompleteProfile/CompleteProfile';
import FontText from '../../Components/common/FontText';
import Header from '../../Components/Home/ProfileHeader';
import Title_And_ViewAll_ForHomeComponent from '../../Components/Title_And_ViewAll_ForHomeComponent';
import { normalize, wp } from '../../styles/responsiveScreen';
import Earnings, { routeName as EarningsRouteName } from './Earnings';
import { useTranslation } from 'react-i18next';
import AddAddress, {
  routeName as AddaddressRouteName,
} from '../ProfileCompletion/AddAddress';
import { homeData } from '../../helper/data';
import appConstant from '../../helper/appConstant';
import Home_Notification ,{routeName as Home_NotificationRouteName }from '../Notification/Home_Notification';

const { width, height } = Dimensions.get('screen');

export const routeName = 'Home';

const Home = props => {
  const { t } = useTranslation();


  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView
        style={styles.scrollText}
        showsVerticalScrollIndicator={false}>
        <Header
          Name={t('Mane Beautilocks')}
          Like={false}
          style={styles.userName}
          navigation={() =>
            props.navigation.navigate(Home_NotificationRouteName)
          }
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => props.navigation.navigate(EarningsRouteName)}>
          <View style={styles.JohnWickCard}>
            <Image
              source={require('../../assets/images/BarberHome.png')}
              resizeMode="contain"
              style={styles.image}
            />

            <View style={styles.JohnText}>
              <View>
                <FontText
                  name={'poppins-regular'}
                  size={normalize(16)}
                  style={{ color: '#fff' }}>
                  {t('BAL')}
                </FontText>
                <FontText
                  name={'poppins-medium'}
                  size={normalize(24)}
                  style={styles.balance}>
                  {appConstant.Amount}
                </FontText>
              </View>
              <Image
                source={require('../../assets/images/scizor.png')}
                resizeMode="contain"
                style={styles.scizzor}
              />
            </View>

            <FontText
              name={'poppins-regular'}
              size={normalize(22)}
              style={styles.johnWicktext}>
              {appConstant.CardName}
            </FontText>
          </View>
        </TouchableOpacity>

        <View style={styles.profileView}>
          <Title_And_ViewAll_ForHomeComponent Title={t('COMPLETE_PROFILE')} />

          <View style={styles.ShopDetail}>
            <View style={styles.shopView}>
              <CompleteProfile
                source={require('../../assets/images/ShopDetail.png')}
                Head={t('SHOP_DETAILS')}
                Text={t('UPLOAD_SERVICES')}
                Fill={45}
              />
              <CompleteProfile
                source={require('../../assets/images/ShopDetail.png')}
                ImageStyle={styles.shopDetailImg}
                Head={t('BARBER_DETAILS')}
                Text={t('UPLOAD_PROFILE_SERVICES')}
                Fill={60}
              />

              <View style={styles.centerView} />

              <TouchableOpacity
                onPress={() => props.navigation.navigate(AddaddressRouteName)}
                style={styles.CompleteProfile}>
                <FontText
                  name={'poppins-regular'}
                  size={normalize(15)}
                  pRight={width * 0.02}
                  color={'primary'}
                >
                  {t('YOUR_PROFILE')}
                </FontText>

                <SvgIcons.Arrowright />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <Title_And_ViewAll_ForHomeComponent
            Title={t('TODAY_APPO')}
            Num={10}
            style={{ marginBottom: wp(1) }}
          />

          <FontText
            name={'poppins-regular'}
            size={normalize(15)}
            pLeft={wp(5)}
            color={'lightViolet'}>
            {t('FILTER_DD')}
          </FontText>
          <View style={styles.appoView}>
            {homeData.map((item, index) => (
              <View key={index} style={styles.UpComingRenderItemMainView}>
                <View style={{ marginLeft: wp(2) }}>
                  <Image
                    source={item.image}
                    resizeMode="stretch"
                    style={styles.UpCominImage}
                  />
                </View>

                <View style={styles.upcomingview}>
                  <Text style={styles.UpCominName}>{item.name}</Text>

                  <View style={styles.totalServices}>
                    <FontText name={'poppins-regular'} size={normalize(12)}>
                      {t('TOTAL_SERVICE')}
                    </FontText>

                    <View style={styles.serviceCount}>
                      <FontText
                        size={normalize(10)}
                        color={'red'}
                        name={'poppins-regular'}>
                        2
                      </FontText>
                    </View>
                  </View>

                  <View style={styles.UpCominDateTimeMainView}>
                    <Text style={styles.UpCominDateTime}>{item.date}</Text>
                    <View
                      style={[
                        styles.ExclusiveOfferDOTs,
                        { backgroundColor: '#397DFF' },
                      ]}
                    />
                    <Text style={[styles.UpCominDateTime, { marginLeft: 0 }]}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  JohnWickCard: {
    width: width * 0.9,
    height: width * 0.5,
    alignSelf: 'center',
    marginTop: width * 0.07,
  },
  JohnText: {
    position: 'absolute',
    top: width * 0.065,
    left: width * 0.065,
    flexDirection: 'row',
    width: width * 0.78,
    justifyContent: 'space-between',
  },
  ShopDetail: {
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: width * 0.05,
    height: width * 0.57,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowColor: 'rgba(49, 60, 100, 0.18)',
    shadowOpacity: 1,
    shadowRadius: 85,
    elevation: 7,
    marginTop: width * 0.03,
    paddingTop: width * 0.02,
  },
  CompleteProfile: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.65,
    marginBottom: width * 0.01,
  },
  UpComingRenderItemMainView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: width * 0.045,
    width: width * 0.85,
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowColor: 'rgba(49, 60, 100, 0.18)',
    shadowOpacity: 1,
    shadowRadius: 40,
    backgroundColor: '#fff',
    marginLeft: 4,
    height: width * 0.25,
    alignItems: 'center',
    elevation: 7,
    marginBottom: 10,
  },
  UpCominImage: {
    width: width * 0.2,
    height: width * 0.22,
    borderRadius: 15,
  },
  UpCominName: {
    color: '#000',
    fontSize: normalize(16),
    fontFamily: 'poppins-medium',
    fontWeight: Platform.OS == 'ios' ? null : 'bold',
  },
  UpCominDateTimeMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: width * 0.1,
    width: width * 0.4,
  },
  UpCominDateTime: {
    color: '#8384A1',
    fontSize: normalize(14),
  },
  ExclusiveOfferDOTs: {
    width: 8,
    height: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 3,
  },
  MainContainer: { flex: 1, backgroundColor: '#fff' },
  userName: { width: width * 0.9, alignSelf: 'center' },
  scrollText: { flexGrow: 1, backgroundColor: '#fff', marginTop: width * 0.02 },
  image: { width: '100%', height: '100%' },
  balance: { color: '#fff', fontWeight: '500' },
  scizzor: { width: width * 0.15, height: width * 0.15 },
  johnWicktext: {
    color: '#fff',
    position: 'absolute',
    bottom: width * 0.04,
    left: width * 0.065,
  },
  profileView: { flex: 1, marginVertical: width * 0.05 },
  shopView: {
    alignSelf: 'center',
    width: width * 0.85,
    height: width * 0.5,
    flex: 1,
  },
  shopDetailImg: {
    width: width * 0.15,
    height: width * 0.15,
  },
  centerView: {
    backgroundColor: '#00000020',
    width: '100%',
    height: width * 0.005,
  },
  appoView: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: width * 0.03,
  },
  upcomingview: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: width * 0.02,
  },
  totalServices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceCount: {
    backgroundColor: '#FF726D20',
    borderRadius: width * 0.05,
    width: width * 0.06,
    height: width * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 0.02,
  },
});

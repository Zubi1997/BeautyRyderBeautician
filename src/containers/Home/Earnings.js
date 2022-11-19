import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import FontText from '../../Components/FontText';
import Title_And_ViewAll_ForHomeComponent from '../../Components/Title_And_ViewAll_ForHomeComponent';
import { EarningsData } from '../../helper/data';
import { wp, hp, normalize } from '../../styles/responsiveScreen';
import TransactionDetail, {
  routeName as TransactionDetailRouteName,
} from './TransactionDetail';
import Withdraw, { routeName as WithdrawRouteName } from './Withdraw';

const { width, height } = Dimensions.get('screen');

export const routeName = 'Earnings';

const Earnings = props => {
  const { t } = useTranslation();

  const RenderItem = ({ item, index }) => {
    const getColor = () => {
      if (item.money.startsWith('+')) return true;
      return false;
    };
    console.log('data was...', item)
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate(TransactionDetailRouteName, { ...item })
        }
        activeOpacity={0.5}
        style={styles.mainView}>
        <Image source={item.image} resizeMode="contain" style={styles.image} />

        <View style={styles.secView}>
          <View style={styles.SubView}>
            <FontText
              name={'poppins-regular'}
              size={normalize(14)}
              pTop={width * 0.03}
              style={{ color: '#8384A1' }}>
              {item.date}
            </FontText>
            <FontText
              name={'poppins-medium'}
              size={normalize(14)}
              style={{ color: getColor() ? '#FF4746' : '#0D8B47' }}>
              {item.money}
            </FontText>
          </View>

          <FontText
            name={'poppins-medium'}
            size={normalize(16)}
            pBottom={width * 0.02}
            style={styles.nametxt}>
            {item.name}
          </FontText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <BackHeader
        title={t('EARNING')}
        BackonPress={() => props.navigation.goBack()}
        style={{ marginHorizontal: wp(2) }}
      />

      <View style={styles.cardMainView}>
        <FontText
          name={'poppins-medium'}
          size={normalize(14)}
          pTop={width * 0.06}
          style={styles.earning}>
          {t(`TODAY'S_EARNING`)}
        </FontText>
        <FontText
          name={'poppins-medium'}
          size={normalize(40)}
          pTop={width * 0.02}
          style={styles.price}>
          $682.5
        </FontText>

        <View style={styles.boxView}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/EmailInVoice.png')}
              resizeMode="contain"
              style={styles.BoxImage}
            />
            <FontText
              name={'poppins-medium'}
              size={normalize(14)}
              pTop={width * 0.04}
              style={styles.email}>
              {t('EMAIL_INVOICE')}
            </FontText>
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate(WithdrawRouteName)}
            style={{ alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/WithDrowal.png')}
              resizeMode="contain"
              style={styles.BoxImage}
            />
            <FontText
              name={'poppins-medium'}
              size={normalize(14)}
              pTop={width * 0.04}
              style={styles.withdraw}>
              {t('WITHDRAWAL')}
            </FontText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, paddingTop: width * 0.03 }}>
        <Title_And_ViewAll_ForHomeComponent
          Title={t('COMPLETE_PROFILE')}
          ViewAll={true}
          ViewAllColor={'primary'}

        />

        <FlatList
          data={EarningsData}
          style={{ marginTop: width * 0.03 }}
          keyExtractor={(value, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => RenderItem(item)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Earnings;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    marginVertical: width * 0.02,
    width: width * 0.9,
    alignSelf: 'center',
  },
  image: {
    width: width * 0.17,
    height: width * 0.18,
    borderRadius: width * 0.03,
  },
  secView: { flex: 1, paddingLeft: width * 0.03 },
  SubView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nametxt: { color: '#15093E', fontWeight: '600' },
  cardMainView: {
    width: width * 0.9,
    alignSelf: 'center',
    height: width * 0.6,
    backgroundColor: '#fff',
    borderRadius: width * 0.03,
    marginVertical: width * 0.05,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowColor: 'rgba(49, 60, 100, 0.18)',
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 8,
  },
  earning: { color: '#8384A1', alignSelf: 'center' },
  price: { color: '#15093E', fontWeight: '600', alignSelf: 'center' },
  BoxImage: {
    width: width * 0.13,
    height: width * 0.13,
  },
  boxView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: width * 0.05,
  },
  email: { color: '#131A22', alignSelf: 'center' },
  withdraw: { color: '#131A22', alignSelf: 'center' },
});

import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import Dashed from '../../Components/common/Dashed/Dashed';
import FontText from '../../Components/FontText';
import { TranscData } from '../../helper/data';
import {normalize, wp} from '../../styles/responsiveScreen';

const {width, height} = Dimensions.get('screen');

export const routeName = 'TransactionDetail';

const TransactionDetail = props => {
  const {t} = useTranslation();

  const {date, image, name, money} = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
        title={t('TRANS_DETAILS')}
        BackonPress={() => props.navigation.goBack()}
        style ={{marginHorizontal:wp(2)}}
      />

      <ScrollView  bounces = {false}>
        <View style={styles.imageView}>
          <Image source={image} resizeMode="contain" style={styles.image} />

          <FontText
            name="poppins-regular"
            pTop={width * 0.04}
            style={styles.form}
            size={normalize(12)}>
            {t('FROM')}
          </FontText>
          <FontText
            name="poppins-medium"
            pTop={width * 0.01}
            style={styles.nametxt}
            size={normalize(18)}>
            {name}
          </FontText>
        </View>

        <View style={styles.subView}>
          {TranscData.map((item, index) => (
            <View
              style={[
                styles.dataView,
                {borderBottomWidth: index == TranscData.length - 1 ? 0 : 1},
              ]}>
              <FontText
                name="poppins-regular"
                style={{
                  color: index == TranscData.length - 1 ? '#0D8B47' : '#15093E',
                  alignSelf: 'center',
                }}
                size={normalize(14)}>
                {item.title}
              </FontText>
              <FontText
                name="poppins-medium"
                style={{
                  color: index == TranscData.length - 1 ? '#0D8B47' : '#15093E',
                  alignSelf: 'center',
                }}
                size={normalize(14)}>
                {item.text}
              </FontText>
            </View>
          ))}
          <View style={styles.DashedView}>
            <Dashed />
          </View>

          <View style={styles.paymentView}>
            <FontText
              name="poppins-medium"
              style={{color: '#15093E'}}
              size={normalize(24)}>
              {t('TOTAL_PAY')}
            </FontText>
            <FontText
              name="poppins-medium"
              style={{color: '#15093E'}}
              size={normalize(24)}>
              $ 120.00
            </FontText>
          </View>

          <View style={styles.PayMainView}>
            <Image
              source={require('../../assets/images/Wallet.png')}
              resizeMode="stretch"
              style={styles.wallet}
            />

            <View style={styles.PaymentTextView}>
              <Text
                style={{
                  fontSize: normalize(10),
                  fontFamily: 'poppins-regular',
                  color: '#15093E98',
                }}>
                {t('PAYMNET_SUCCESS')}
              </Text>
              <Text
                style={{fontSize: normalize(13), fontFamily: 'poppins-medium'}}>
                {t('PAYMENT_CARD')}
              </Text>
            </View>

            <Image
              source={require('../../assets/images/True.png')}
              resizeMode="stretch"
              style={styles.true}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  PayMainView: {
    borderRadius: 10,
    width: width * 0.9,
    height: height * 0.07,
    alignSelf: 'center',
    backgroundColor: '#397DFF15',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: height * 0.03,
  },
  PaymentTextView: {
    width: width * 0.55,
    height: height * 0.05,
    justifyContent: 'space-evenly',
  },
  imageView: {
    width: width * 0.9,
    alignSelf: 'center',
    height: width * 0.47,
    backgroundColor: '#fff',
    marginVertical: width * 0.05,
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    alignSelf: 'center',
  },
  form: {color: '#8384A1', alignSelf: 'center'},
  nametxt: {color: '#15093E', alignSelf: 'center'},
  subView: {
    flex: 1,
    marginTop: width * 0.01,
  },
  dataView: {
    width: width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: width * 0.01,
    borderColor: '#00000030',
    paddingBottom: width * 0.015,
    height: width * 0.09,
  },
  DashedView: {
    flexDirection: 'row',
    width: width * 0.85,
    overflow: 'hidden',
    alignSelf: 'center',
    marginVertical: width * 0.03,
  },
  paymentView: {
    width: width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: width * 0.02,
  },
  wallet: {
    width: width * 0.08,
    height: width * 0.08,
  },
  true: {
    width: width * 0.1,
    height: width * 0.1,
  },
});

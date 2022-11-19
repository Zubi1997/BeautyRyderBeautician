import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
  Keyboard,
  I18nManager,
} from 'react-native';
import {
  hp,
  wp,
  normalize,
} from '../../styles/responsiveScreen';
import {useTranslation, withTranslation} from 'react-i18next';
import FontText from '../../Components/FontText';
import BackHeader from '../../Components/BackHeader';
import SvgIcons from '../../assets/SvgIcons';
import Details from '../../Components/common/Appoinment_Detail/Details';
import Price from '../../Components/common/Appoinment_Detail/Price';
import colors from '../../assets/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import Button from '../../Components/common/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import Home, {routeName as homeRouteName} from '../Home';

export const routeName = 'AppointmentDetails';

const {width, height} = Dimensions.get('screen');

const AppointmentDetails = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const {t} = useTranslation();
  const {bool} = props.route.params;
  const {navigation} = props;
  const OpenModel = () => {
    setModalVisible(!modalVisible);
  };
  const Reson = ['Why you cancel?', 'what your problem?'];
  const [DropDown_Open, setDropDown_Open] = useState(false);
  const [DropDown_Value, setDropDown_Value] = useState('');
  const [DropDown_Item, setDropDown_Item] = useState([
    {label: 'Why you cancel?', value: 'Cancel'},
    {label: 'what your problem?', value: 'Problem'},
    {label: 'Other', value: 'Other'},
  ]);

  const {adata} = props.route.params;

  const refRBSheet = useRef();

  const onOpen = () => {
    refRBSheet.current?.open();
  };
  const onClose = () => {
    refRBSheet.current?.close();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <BackHeader
            title={t('APPOINTMNET_DETAILS')}
            titleColor={'textcolor'}
            style={styles.heading}
            BackonPress={() => navigation.goBack()}
          />

          <View>
            <Image
              source={adata.coverImg}
              style={styles.user}
            />
            <FontText
              name={'poppins-medium'}
              size={normalize(18)}
              pTop={hp(1)}
              textAlign={'center'}
              style={{fontWeight: '500'}}>
              {adata.name}
            </FontText>
          </View>
          {bool == 2 ? (
            <View style={styles.cancel}>
              <FontText
                name={'poppins-medium'}
                size={normalize(12)}
                style={styles.redtext}>
                {'Cancelled on 22 Aug, 2021, 2:34PM'}
              </FontText>
            </View>
          ) : null}
          <View style={styles.TimeMainView}>
            <View style={styles.date}>
              <SvgIcons.ActiveCalnder
                width={wp(7)}
                height={wp(7)}
                stroke={'#397DFF'}
              />

              <FontText
                name={'poppins-medium'}
                size={normalize(14)}
                pTop={hp(0.5)}
                style={styles.dnt}>
                {adata.date}
              </FontText>

              <View style={styles.time} />
              <SvgIcons.Time
                width={wp(7)}
                height={wp(7)}
                style={{marginTop: hp(0.2)}}
              />

              <FontText
                name={'poppins-medium'}
                size={normalize(14)}
                style={styles.apointmentTime}>
                {adata.time}
              </FontText>
            </View>
          </View>
          <View style={styles.Booking}>
            <FontText
              name={'poppins-medium'}
              size={normalize(16)}
              style={{fontWeight: '600'}}>
              {t('BOOKING_NO')}
            </FontText>
            <FontText
              name={'poppins-regular'}
              size={normalize(14)}
              style={{fontWeight: '400'}}>
              #MFJKJHGK675
            </FontText>
          </View>

          <View style={[styles.Booking, {marginBottom: hp(0.5)}]}>
            <FontText
              name={'poppins-medium'}
              size={normalize(16)}
              style={{fontWeight: '600'}}>
              {t('SERVICE_LIST')}
            </FontText>
            <View style={styles.services}>
              <FontText style={styles.servicesText}>{adata.serviceCount}</FontText>
            </View>
          </View>

          <Details
            Title={t('MEN`S_HAIR')}
            Price="$20"
            Time="20 Min"
            Border={true}
          />
          <Details
            Title={t('HAIR_SPA')}
            Price="$50.08"
            Time="30 Min"
            Border={true}
          />
          <Details
            Title={t('OIL')}
            Price="$30.08"
            Time="30 Min"
            Border={false}
          />

          <View style={styles.hr} />

          <View style={styles.CouponCodeMainView}>
            <View style={styles.coupancodeView}>
              <FontText style={styles.Fonts}>
                {t('COUPAN_CODE_APPLIED')}
              </FontText>
              <FontText style={[styles.Fonts, {color: '#00000090'}]}>
                HGK675
              </FontText>
            </View>
            <View>
              <FontText
                name={'poppins-medium'}
                size={normalize(14)}
                style={styles.discount}>
                -$2.09
              </FontText>
            </View>
          </View>

          <View style={styles.hr} />

          <Price Title={t('ITEM_TOTAL')} Price="$110.00" Border={true} Color = {'textcolor'} />
          <Price Title={t('VAT_TAX')} Price="$3.08" Border={true} />
          <Price
            Title={t('COUPAN_DISCOUNT')}
            Price="-$02.08"
            Color="#14A38B"
            Border={false}
          />

          <Price
            Title={t('GRAND_TOTAL')}
            Price="$ 104.02"
            Border={false}
            Font={normalize(20)}
          />

          <View style={styles.PayMainView}>
            <Image
              source={require('../../assets/img/Appoiment/Wallet.png')}
              resizeMode="stretch"
              style={{
                width: wp(8),
                height: wp(8),
              }}
            />

            <View style={styles.PaymentTextView}>
              <FontText style={styles.paymentText}>
                {t('PAYMNET_SUCCESS')}
              </FontText>
              <FontText pTop={hp(0.5)} style={styles.paymentCard}>
                {t('PAYMENT_CARD')}
              </FontText>
            </View>

            <Image
              source={require('../../assets/img/Appoiment/tick.png')}
              resizeMode="stretch"
              style={{
                width: wp(10),
                height: wp(10),
              }}
            />
          </View>
          {bool == 1 ? (
            <View style={styles.CompletMainView}>
              <TouchableOpacity
                onPress={onOpen}
                style={[styles.BtnMainView, {backgroundColor: '#FF726D'}]}>
                <Text style={styles.BtnCancal}>{t('CANCEL')}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{marginBottom: hp(3)}} />
          )}
        </View>
      </ScrollView>

      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        height={height > 767 ? height * 0.6 : height * 0.68}
        customStyles={styles.bottomSheet}>
        <View>
          <Image
            source={require('../../assets/img/Appoiment/modalIcon.png')}
            style={styles.icon}
          />

          <FontText
            name={'poppins-medium'}
            size={normalize(20)}
            textAlign={'center'}
            style={styles.title}>
            {t('ARE_YOU_SURE_APPOINTMENT')}
          </FontText>
          <View style={{marginTop: height * 0.02}}>
            <DropDownPicker
              placeholder={t('REASON')}
              placeholderStyle={styles.placeholder}
              labelStyle={{fontWeight: '500', fontSize: normalize(16)}}
              style={styles.label}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              open={DropDown_Open}
              value={DropDown_Value}
              items={DropDown_Item}
              setOpen={setDropDown_Open}
              setValue={setDropDown_Value}
              setItems={setDropDown_Item}
            />

            <View style={styles.ti}>
              <TextInput
                style={styles.textInput}
                placeholder={t('NOTE')}
                multiline={true}
                onSubmitEditing={Keyboard.dismiss()}
                returnKeyType='next'
              />
            </View>
            <View style={styles.btnView}>
              <Button
                height={hp(7)}
                width={wp(50)}
                onPress={onClose}
                style={styles.no}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-medium'}
                  color={'lightViolet'}>
                  {t('NO')}
                </FontText>
              </Button>
              <Button
                onPress={() => navigation.navigate(homeRouteName)}
                height={hp(7)}
                width={wp(50)}
                style={styles.yes}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-medium'}
                  style={{color: '#fff'}}>
                  {t('YES')}
                </FontText>
              </Button>
            </View>
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default AppointmentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {marginHorizontal: wp(2), color: '#15093E'},
  user: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(4),
    alignSelf: 'center',
  },
  cancel: {
    marginBottom: hp(-1),
    marginTop: hp(3),
    marginLeft: wp(5),
  },
  redtext: {
    color: '#FF4746',
    fontWeight: '500',
  },
  dnt: {fontWeight: '500', color: '#15093E', display: 'flex'},
  apointmentTime: {
    fontWeight: '500',
    color: '#15093E',
    display: 'flex',
    marginTop: hp(0.5),
  },
  services: {
    backgroundColor: 'rgba(57, 125, 255, 0.1)',
    width: wp(7),
    height: wp(7),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  servicesText: {
    fontSize: normalize(12),
    paddingHorizontal: wp(0.2),
    paddingVertical: wp(0.1),
    color: '#397DFF',
  },
  TimeMainView: {
    backgroundColor: 'rgba(57, 125, 255, 0.1)',
    width: wp(90),
    height: hp(7),
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: wp(4),
    borderRadius: 10,
    marginTop: hp(2),
    marginHorizontal: wp(0),
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(60),
  },
  time: {
    width: wp(2),
    borderRadius: wp(1),
    height: wp(2),
    backgroundColor: '#397DFF',
    marginTop: hp(0.5),
  },
  Booking: {
    width: wp(90),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(3),
  },
  hr: {
    width: width,
    backgroundColor: '#B9BBFF30',
    height: hp(1),
    marginVertical: hp(1),
    alignSelf: 'flex-end',
  },
  Fonts: {
    fontSize: normalize(12),
    fontFamily: 'poppins-medium',
  },
  CouponCodeMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
    alignSelf: 'center',
    height: hp(8),
    alignItems: 'center',
  },
  coupancodeView: {
    height: hp(8),
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  discount: {fontWeight: '600', marginTop: hp(3), color: '#14A38B'},
  PayMainView: {
    borderRadius: 10,
    width: wp(90),
    height: hp(8),
    alignSelf: 'center',
    backgroundColor: 'rgba(57, 125, 255, 0.1)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(1),
  },
  PaymentTextView: {
    width: wp(55),
    height: hp(5),
    justifyContent: 'space-evenly',
  },
  paymentText: {
    fontSize: normalize(12),
    fontFamily: 'poppins-regular',
    color: '#15093E98',
  },
  paymentCard: {
    fontSize: normalize(14),
    fontFamily: 'poppins-medium',
    fontWeight: 'bold',
  },
  CompletMainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  BtnMainView: {
    width: '45%',
    height: hp(7),
    alignItems: 'center',
    padding: height * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: hp(3),
  },
  BtnCancal: {
    color: '#fff',
    fontSize: normalize(16),
    fontFamily: 'poppins-medium',
    fontWeight: '500',
  },
  button: {
    width: wp(85),
    alignSelf: 'center',
    marginTop: hp(5),
    borderRadius: wp(3),
    backgroundColor: '#F7F8FA',
  },
  dropdown: {
    backgroundColor: '#F7F8FA',
    opacity: 1,
    marginTop: hp(1),
  },
  down: {width: wp(8), height: wp(8)},
  ti: {
    width: wp(85),
    height: hp(20),
    marginTop: height * 0.02,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#F7F8FA',
  },
  textInput: {
    marginLeft: wp(5),
    fontSize: normalize(16),
    fontWeight: '400',
    fontFamily: 'poppins-regular',
    paddingTop: hp(2),
    textAlign: I18nManager.isRTL ? 'right':'left',
  },
  bottomSheet: {
    wrapper: {
      backgroundColor: 'rgba(21,9,62,0.6)',
    },

    container: {
      borderTopColor: colors.primary,
      borderTopWidth: wp(1.5),
    },
  },
  icon: {
    width: wp(12),
    height: wp(12),
    alignSelf: 'center',
    marginVertical: hp(2.5),
  },
  title: {
    width: width > 360 ? width * 0.85 : width * 0.7,
    alignSelf: 'center',
  },
  placeholder: {
    borderRadius: 10,
    color: '#00000040',
    fontSize: normalize(17),
    fontFamily: 'poppins-regular',
  },
  label: {
    width: width * 0.85,
    borderWidth: 0,
    backgroundColor: colors.viewcolor,
    alignSelf: 'center',
  },
  dropDownContainerStyle: {
    width: wp(85),
    alignSelf: 'center',
    fontFamily: 'poppins-regular',
    fontWeight: '600',
    fontSize: normalize(16),
    borderWidth: 0,
    borderTopWidth: wp(0.2),
    borderTopColor: colors['gray-lightest'],
    backgroundColor: colors['gray-light'],
  },
  btnView: {
    flex: 1,

    flexDirection: 'row',
    marginHorizontal: wp(3),
    marginBottom: height * 0.05,
  },
  no: {
    borderRadius: 20,
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
  yes: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
});

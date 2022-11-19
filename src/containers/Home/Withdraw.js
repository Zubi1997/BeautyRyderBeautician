import React, {useRef, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  I18nManager,
  SafeAreaView,
} from 'react-native';
import colors from '../../assets/colors';
import BackHeader from '../../Components/BackHeader';
import Input from '../../Components/common/Input/index';
import FontText from '../../Components/FontText';
import {hp, normalize, wp,isIOS, isAndroid} from '../../styles/responsiveScreen';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from 'react-i18next';
import SmartScrollView from '../../Components/common/SmartScrollView';
import BigButton from '../../Components/BigButton';


const {width, height} = Dimensions.get('screen');

export const routeName = 'Withdraw';

const Withdraw = props => {
  const {t} = useTranslation();

  // For Validation
  const [Amount, setAmount] = useState('');
  const [AcNumber, setAcNumber] = useState('');
  const [AcHolder, setAcHolder] = useState('');
  const [Phone, setPhone] = useState('');
  const [Submit, setSubmit] = useState(false);

  const AccountNumber = useRef();
  const AccountHolder = useRef();
  const PhoneNumber = useRef();

  const [DropDown_Open, setDropDown_Open] = useState(false);
  const [DropDown_Value, setDropDown_Value] = useState('');
  const [DropDown_Item, setDropDown_Item] = useState([
    {label: 'HDFC Bank', value: 'HDFC'},
    {label: 'Kotak Mahendra Bank', value: 'KOTAK'},
    {label: 'Axis Bank', value: 'AXIS'},
  ]);

  const Amount_Error = Submit && Amount.length == 0;
  const DropDown_Error = Submit && DropDown_Value.length == 0;
  const AcNumber_Error = Submit && AcNumber.length == 0;
  const AcHolder_Error = Submit && AcHolder.length == 0;
  const Phone_Error = Submit && Phone.length == 0;

  const AllField =
    Amount.length != 0 &&
    DropDown_Value.length != 0 &&
    AcNumber.length != 0 &&
    AcHolder.length != 0 &&
    Phone.length != 0;



  return (
    <SafeAreaView style={styles.Maincontainer}>
      <View style ={{flex:1,paddingHorizontal:wp(2)}}>
      <BackHeader
        title={t('WITHDRAW')}
        BackonPress={() => props.navigation.goBack()}
      />

       <SmartScrollView  alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          // applyKeyboardCheck={isIOS}
          contentContainerStyle={{ paddingVertical: hp(2), paddingHorizontal: wp(0), backgroundColor: "#ffffff"}} >
       <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'height' : 'height'}
        keyboardVerticalOffset={Platform.select({
          ios: 0,
          android: -300,
        })}>
          <FontText
            pLeft={width * 0.05}
            size={normalize(16)}
            name={'poppins-medium'}>
            {t('AMOUNT')}
          </FontText>
          <Input
            onChangeText={val => setAmount(val.trim())}
            value={Amount}
            keyboardType={'numeric'}
            placeholder={t('ENTER_AMOUNT')}
            fontSize={normalize(16)}
            returnKeyType="next"
            blurOnSubmit={false}
            maxLength={25}
            inputStyle={styles.amount}
            onSubmit={() => {
              AccountNumber.current.focus();
            }}
            fontName={'poppins-regular'}
            style={styles.input}
            height={hp(6)}
            width={hp(90)}
          />

          <View style={styles.ErrorView}>
            <FontText
              size={normalize(14)}
              pLeft={width * 0.05}
              name={'poppins-regular'}
              style={{color: '#ff0000'}}>
              {Amount_Error && t('PLZ_ENTER_AMOUNT')}
            </FontText>
          </View>

          <View style={styles.bankView}>
            <FontText
              size={normalize(16)}
              pLeft={width * 0.05}
              name={'poppins-medium'}
              style={{marginBottom: width * 0.015}}>
              {t('BANK_NAME')}
            </FontText>

            <DropDownPicker
              placeholder={t('ENTER_BANK_NAME')}
              placeholderStyle={styles.placeholder}
              labelStyle={styles.label}
              style={styles.dd}
              // listMode='SCROLLVIEW'
              dropDownContainerStyle={styles.ddContainer}
              open={DropDown_Open}
              value={DropDown_Value}
              items={DropDown_Item}
              setOpen={setDropDown_Open}
              setValue={setDropDown_Value}
              setItems={setDropDown_Item}


            />

            <View style={styles.ErrorView}>
              <FontText
                size={normalize(14)}
                pLeft={width * 0.05}
                name={'poppins-regular'}
                style={{color: '#ff0000'}}>
                {DropDown_Error && t('PLEASE_SELECT_BANK')}
              </FontText>
            </View>
          </View>

          <FontText
            pLeft={width * 0.05}
            size={normalize(16)}
            name={'poppins-medium'}>
            {t('ACC_NO')}
          </FontText>
          <Input
            onChangeText={val => setAcNumber(val.trim())}
            value={AcNumber}
            keyboardType={'numeric'}
            placeholder={t('ENTER_ACC_NO')}
            maxLength={10}
            returnKeyType="next"
            blurOnSubmit={false}
            inputStyle={styles.amount}
            ref={AccountNumber}
            onSubmit={() => {
              AccountHolder.current.focus();
            }}
            fontName={'poppins-regular'}
            style={styles.input}
            height={hp(6)}
            width={hp(90)}
          />

          <View style={styles.ErrorView}>
            <FontText
              size={normalize(14)}
              pLeft={width * 0.05}
              name={'poppins-regular'}
              style={{color: '#ff0000'}}>
              {AcNumber_Error && t('ENTER_ACC_NO')}
            </FontText>
          </View>

          <FontText
            pLeft={width * 0.05}
            size={normalize(16)}
            name={'poppins-medium'}>
            {t('ACC_NAME')}
          </FontText>
          <Input
            onChangeText={val => setAcHolder(val.trim())}
            value={AcHolder}
            placeholder={t('ENTER_ACC_NAME')}
            returnKeyType="next"
            onSubmit={() => {
              PhoneNumber.current.focus();
            }}
            ref={AccountHolder}
            inputStyle={styles.amount}
            fontName={'poppins-regular'}
            style={styles.input}
            height={hp(6)}
            width={hp(90)}
          />

          <View style={styles.ErrorView}>
            <FontText
              size={normalize(14)}
              pLeft={width * 0.05}
              name={'poppins-regular'}
              style={{color: '#ff0000'}}>
              {AcHolder_Error && t('ENTER_ACC_HOL_NAME')}
            </FontText>
          </View>

          <FontText
            pLeft={width * 0.05}
            size={normalize(16)}
            name={'poppins-medium'}>
            {t('PHONE_NO')}
          </FontText>
          <Input
            onChangeText={val => setPhone(val.trim())}
            value={Phone}
            ref={PhoneNumber}
            maxLength={10}
            keyboardType={'numeric'}
            placeholder={t('ENTER_PHONE_NO')}
            returnKeyType="done"
            onSubmit={() => {
              Keyboard.dismiss();
            }}
            inputStyle={styles.amount}
            fontName={'poppins-regular'}
            style={[styles.input, !Phone_Error && {marginBottom: width * 0.03}]}
            height={hp(6)}
            width={hp(90)}
          />

          {Phone_Error && (
            <View style={styles.ErrorView}>
              <FontText
                size={normalize(14)}
                pLeft={width * 0.05}
                name={'poppins-regular'}
                style={{color: '#ff0000'}}>
                {Phone_Error && t('PLEASE_ENTER_PHONE')}
              </FontText>
            </View>
          )}
        </KeyboardAvoidingView>
        <View style ={styles.WithdrawBtnView}>
      <BigButton style ={{backgroundColor: AllField ? '#397DFF' : '#397DFF50',alignSelf:'center',marginBottom:hp(2)}} title = {t('WITHDRAW')} onClick ={() => setSubmit(true)}/>
      </View>
       </SmartScrollView>

       </View>


    </SafeAreaView>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  Maincontainer: {flex: 1, backgroundColor: '#fff'},
  input: {
    alignSelf: 'center',
    marginTop: width * 0.01,
    textAlign: I18nManager.isRTL ? 'right':'left',
  },
  ErrorView: {marginTop: width * 0.015, marginBottom: width * 0.01},
  amount: {
    backgroundColor: colors.viewcolor,
    borderRadius: 10,
    color: colors.lightViolet,
    paddingLeft: wp(3),
    textAlign: I18nManager.isRTL ? 'right':'left',
  },
  bankView: {zIndex: 1, marginBottom: width * 0.015},
  placeholder: {
    borderRadius: 10,
    color: '#00000040',
    fontSize: normalize(17),
    fontFamily: 'poppins-semibold',
    textAlign: I18nManager.isRTL ? 'right':'left',
  },
  label: {fontWeight: '600', fontSize: normalize(16)},
  dd: {
    width: width * 0.9,
    borderWidth: 0,
    backgroundColor: colors.viewcolor,
    alignSelf: 'center',
  },
  ddContainer: {
    width: width * 0.9,
    marginLeft: width * 0.03,
    marginTop: width * 0.01,
    borderWidth: 0.5,
    borderColor: '#00000050',
    backgroundColor: colors.viewcolor,
    alignSelf: 'center',
  },
  WithdrawBtnView:{alignItems:"center",alignSelf:'center',marginTop: height <767 ? isAndroid ? hp(5) : hp(10) :   hp(15)},
});

import React, { useRef, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
  I18nManager,
} from 'react-native';
import colors from '../../assets/colors';
import BackHeader from '../../Components/BackHeader';
import Input from '../../Components/common/Input/index';
import FontText from '../../Components/FontText';
import { hp, normalize, wp, isIOS, isAndroid } from '../../styles/responsiveScreen';
import DropDownPicker from 'react-native-dropdown-picker';
import Verification, {
  routeName as VerificationRouteName,
} from '../SignUp/Verification';
import { useTranslation } from 'react-i18next';
import BottomSheet from '../../Components/bottomSheet';
import Material_Menu from '../../Components/common/Material_Menu/Material_Menu';
import SvgIcons from '../../assets/SvgIcons';
import SmartScrollView from '../../Components/common/SmartScrollView';
import BigButton from '../../Components/BigButton';
import BankAccDetails, { routeName as BankAccDetailsRouteName } from './BankAccDetails';
import Profile, { routeName as ProfileRouteName } from '../Profile';
import { bankName } from '../../helper/data';

const { width, height } = Dimensions.get('screen');

export const routeName = 'AddNewBankAcc';

const AddNewBankAcc = props => {
  const { t } = useTranslation();
  const [AcNumber, setAcNumber] = useState('');
  const [AcHolder, setAcHolder] = useState('');
  const [Phone, setPhone] = useState('');
  const [Submit, setSubmit] = useState(false);
  const { navigation } = props;

  const AccountNumber = useRef();
  const AccountHolder = useRef();
  const PhoneNumber = useRef();

  const [DropDown_Open, setDropDown_Open] = useState(false);
  const [DropDown_Value, setDropDown_Value] = useState('');
  const [DropDown_Item, setDropDown_Item] = useState(bankName);

  const DropDown_Error = Submit && DropDown_Value.length == 0;
  const AcNumber_Error = Submit && AcNumber.length == 0;
  const AcHolder_Error = Submit && AcHolder.length == 0;
  const Phone_Error = Submit && Phone.length == 0;

  const AllField =
    DropDown_Value.length != 0 &&
    AcNumber.length != 0 &&
    AcHolder.length != 0 &&
    Phone.length != 0;

  const onSubmit = () => {
    if (bool == 1) {
      setSubmit(true);
    } else {
      setSubmit(true)
      { AllField ? navigation.navigate(VerificationRouteName, { bool: 3 }) : null }

    }
  };

  const [Open, setOpen] = useState(false);
  function MaterialMenu() {
    setOpen(!Open);

    return null;
  }
  const modalizeRef = useRef();

  const onOpen = () => {
    setSubmit(true);
    modalizeRef.current?.open();
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onClose = ({ }) => {
    modalizeRef.current?.close();
  };
  const { bool } = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subC}>
        {bool == 1 ? (
          <View
            style={styles.back}>
            <BackHeader
              title={t('EDIT_BANK')}
              BackonPress={() => props.navigation.navigate(BankAccDetailsRouteName)}
            />
            <TouchableOpacity
              onPress={MaterialMenu}
              activeOpacity={0.7}
              style={{ marginTop: hp(1.5) }}>
              <SvgIcons.More width={wp(6)} height={wp(6)} />
              <Material_Menu
                popText={{ paddingTop: height < 767 ? hp(0.8) : hp(0.5) }}
                Service={true}
                position={{ height: height<767 ? 50 : 60 }}
                DeletePress={onOpen}
                navigation={navigation}
                visible={Open}
                click={() => MaterialMenu()}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <BackHeader
            title={t('ADD_NEW_BANK')}
            BackonPress={() => props.navigation.navigate(ProfileRouteName)}
          />
        )}
        <SmartScrollView alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.mainView}>
            {bool == 1 ? (
              <FontText
                size={normalize(16)}
                pLeft={width * 0.02}
                name={'poppins-medium'}
                style={{ marginBottom: width * 0.015 }}>
                {t('BANK_NAME')}
              </FontText>
            ) : (
              <FontText
                size={normalize(16)}
                pLeft={width * 0.02}
                name={'poppins-medium'}
                style={{ marginBottom: width * 0.015 }}>
                {t('ADD_NEW_BANK')}
              </FontText>
            )}
            <DropDownPicker
              placeholder={t('ENTER_BANK_NAME')}
              placeholderStyle={styles.placeholder}
              labelStyle={{ fontWeight: '600', fontSize: normalize(16) }}
              style={styles.dd}
              dropDownContainerStyle={styles.dropDownContainerStyle}
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
                pLeft={width * 0.02}
                name={'poppins-regular'}
                style={{ color: '#ff0000' }}>
                {DropDown_Error && t('PLEASE_SELECT_BANK')}
              </FontText>
            </View>
          </View>

          <FontText
            pLeft={width * 0.02}
            size={normalize(16)}
            name={'poppins-medium'}>
            {t('ACC_NO')}
          </FontText>
          <Input
            onChangeText={val => setAcNumber(val.trim())}
            value={AcNumber}
            keyboardType={'numeric'}
            placeholder={'0000  0000  0000  0000'}
            maxLength={10}
            returnKeyType="done"
            blurOnSubmit={false}
            inputStyle={styles.inputAccNo}
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
              pLeft={width * 0.02}
              name={'poppins-regular'}
              style={{ color: '#ff0000' }}>
              {AcNumber_Error && t('ENTER_ACC_NO')}
            </FontText>
          </View>

          <FontText
            pLeft={width * 0.02}
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
            inputStyle={styles.inputAccNo}
            fontName={'poppins-regular'}
            style={styles.input}
            height={hp(6)}
            width={hp(90)}
          />

          <View style={styles.ErrorView}>
            <FontText
              size={normalize(14)}
              pLeft={width * 0.02}
              name={'poppins-regular'}
              style={{ color: '#ff0000' }}>
              {AcHolder_Error && t('ENTER_ACC_HOL_NAME')}
            </FontText>
          </View>

          <FontText
            pLeft={width * 0.02}
            size={normalize(16)}
            name={'poppins-medium'}>
            {t('PHONE_NO')}
          </FontText>
          <Input
            onChangeText={val => setPhone(val.trim())}
            value={Phone}
            ref={PhoneNumber}
            keyboardType={'numeric'}
            placeholder={t('ENTER_PHONE_NO')}
            returnKeyType="done"
            maxLength={10}
            onSubmit={() => {
              Keyboard.dismiss();
            }}
            inputStyle={styles.inputAccNo}
            fontName={'poppins-regular'}
            style={styles.input}
            height={hp(6)}
            width={hp(90)}
          />

          {Phone_Error && (
            <View style={styles.ErrorView}>
              <FontText
                size={normalize(14)}
                pLeft={width * 0.02}
                name={'poppins-regular'}
                style={{ color: '#ff0000' }}>
                {Phone_Error && t('PLEASE_ENTER_PHONE')}
              </FontText>
            </View>
          )}
          {bool == 1 ?
            <View style={styles.btn1}>
              <BigButton title={t('SAVE')}
                onClick={onSubmit}
                style={{
                  backgroundColor: AllField ? '#397DFF' : '#397DFF50',
                  marginBottom: hp(2),

                }} />
            </View>

            : <View style={styles.btn}>
              <BigButton title={t('SAVE')}
                onClick={onSubmit}
                style={{
                  backgroundColor: AllField ? '#397DFF' : '#397DFF50',
                  marginBottom: hp(2),

                }} />
            </View>}
        </SmartScrollView>
      </View>
      <BottomSheet
        refname={modalizeRef}
        icon={<SvgIcons.FillTrash height={hp(12)} width={hp(12)} />}
        title={
          <FontText
            style={{ fontWeight: '600', alignSelf: 'center' }}
            name={'poppins-medium'}
            size={normalize(20)}
            textAlign={'center'}>
            {t('DELETE_ACC')}
          </FontText>
        }
        textrightbutton={'Delete'}
        style={styles.rightbtn}
        textleftbutton={'Cancel'}
        bottombutton={true}
        onRightpress={onBack}
        oncancelpress={onClose}></BottomSheet>
    </SafeAreaView>
  );
};

export default AddNewBankAcc;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  subC: { flex: 1, marginHorizontal: wp(4) },
  back: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainView: { zIndex: 1, marginBottom: width * 0.015 },
  input: {
    alignSelf: 'center',
    marginTop: width * 0.01,
  },
  btn1: {
    marginTop: height < 767 ? isAndroid ? hp(18) : hp(22) : hp(26),
  },
  btn: {
    marginTop: height < 767 ? isAndroid ? hp(16) : hp(24) : hp(26),
  },
  contentContainerStyle: { paddingVertical: hp(2), paddingHorizontal: wp(0), backgroundColor: "#ffffff" },
  placeholder: {
    borderRadius: 10,
    color: '#00000040',
    fontSize: normalize(17),
    fontFamily: 'poppins-regular',
    paddingLeft: width * 0.02,
    textAlign: I18nManager.isRTL ? 'right':'left',
  },
  dd: {
    width: width * 0.9,
    borderWidth: 0,
    backgroundColor: colors.viewcolor,
    alignSelf: 'center',
  },
  dropDownContainerStyle: {
    width: wp(90),
    alignSelf: 'center',
    fontFamily: 'poppins-regular',
    fontWeight: '600',
    fontSize: normalize(16),
    borderWidth: 0,
    borderTopWidth: wp(0.2),
    borderTopColor: colors['gray-lightest'],
    backgroundColor: colors['gray-light'],
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ErrorView: { marginTop: width * 0.015, marginBottom: width * 0.01 },
  inputAccNo: {
    backgroundColor: colors.viewcolor,
    borderRadius: 10,
    color: colors.lightViolet,
    paddingLeft: width * 0.04,
    fontFamily: 'poppins-regular',
    fontWeight: '600',
    textAlign:I18nManager.isRTL?'right':'left'
  },
  rightbtn: {
    backgroundColor: '#FF726D',
    borderRadius: 10,
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
});

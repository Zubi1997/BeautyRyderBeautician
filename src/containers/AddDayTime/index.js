import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {hp, wp, normalize, isX, isAndroid} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import FontText from '../../Components/FontText';
import DayTime from '../../Components/DayTime';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import ShopDetail, {routeName as ShopDetailRouteName} from '../ShopDetail';
import {useTranslation} from 'react-i18next';
import BackHeader from '../../Components/BackHeader';
import AddTimeDate,{routeName as AddTimeDateRouteName} from '../ProfileCompletion/AddTimeDate';

export const routeName = 'addDayTime';

const AddDayTime = props => {
  const [sun, setSun] = useState(false);
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(false);
  const [sat, setSat] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [sunFrom, setSunFrom] = useState(null);
  const [sunTo, setSunTo] = useState(null);

  const [monFrom, setMonFrom] = useState(null);
  const [monTo, setMonTo] = useState(null);

  const [tueFrom, setTueFrom] = useState(null);
  const [tueTo, setTueTo] = useState(null);

  const [wedFrom, setWedFrom] = useState(null);
  const [wedTo, setWedTo] = useState(null);

  const [thuFrom, setThuFrom] = useState(null);
  const [thuTo, setThuTo] = useState(null);

  const [friFrom, setFriFrom] = useState(null);
  const [friTo, setFriTo] = useState(null);

  const [satFrom, setSatFrom] = useState(null);
  const [satTo, setSatTo] = useState(null);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [state, setState] = useState('');

  const selectDate = date => {
    if (state === 'fsun') {
      setSunFrom(moment(date).format('LT'));
    } else if (state === 'tsun') {
      setSunTo(moment(date).format('LT'));
    } else if (state === 'fmon') {
      setMonFrom(moment(date).format('LT'));
    } else if (state === 'tmon') {
      setMonTo(moment(date).format('LT'));
    } else if (state === 'ftue') {
      setTueFrom(moment(date).format('LT'));
    } else if (state === 'ttue') {
      setTueTo(moment(date).format('LT'));
    } else if (state === 'fwed') {
      setWedFrom(moment(date).format('LT'));
    } else if (state === 'twed') {
      setWedTo(moment(date).format('LT'));
    } else if (state === 'fthu') {
      setThuFrom(moment(date).format('LT'));
    } else if (state === 'tthu') {
      setThuTo(moment(date).format('LT'));
    } else if (state === 'ffri') {
      setFriFrom(moment(date).format('LT'));
    } else if (state === 'tfri') {
      setFriTo(moment(date).format('LT'));
    } else if (state === 'fsat') {
      setSatFrom(moment(date).format('LT'));
    } else if (state === 'tsat') {
      setSatTo(moment(date).format('LT'));
    }
  };

  const {bool } = props.route.params;

  const onSave = () => {
    bool == 1 ? props.navigation.navigate(AddTimeDateRouteName) : props.navigation.navigate(ShopDetailRouteName, {bool: 1})
  }
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            selectDate(date);
            //   setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          mode="time"
        />
        <BackHeader title = {t('ADD_DAY')} BackonPress = {() => props.navigation.goBack()} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginRight: wp(-4)}}>
          <View>
            <View style={styles.rowview}>
              <FontText
                size={normalize(16)}
                name={'poppins-regular'}
                color="gray-natural"
                textAlign="center">
                {t('SUNDAY')}
              </FontText>
              <View style={styles.row}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-regular'}
                  color={sun ? 'primary' : 'red'}
                  pRight={wp(4)}
                  textAlign="center">
                  {sun ? t('OPEN') : t('CLOSED')}
                </FontText>

                <Switch
                  trackColor={{
                    false: colors['gray-devider'],
                    true: colors.primary,
                  }}
                  thumbColor={colors.white}
                  ios_backgroundColor={colors['gray-devider']}
                  onValueChange={() => setSun(previousState => !previousState)}
                  value={sun}
                  style={{
                    transform: [
                      {scaleX: isAndroid ? 1 : 0.7},
                      {scaleY: isAndroid ? 1 : 0.7},
                    ],
                  }}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginVertical: sun ? hp(-1.8) : null,
                alignSelf: 'flex-start',
              }}>
              {sun ? (
                <DayTime
                  fromOnChangeText={() => {}}
                  fromOnSubmitEditing={() => {}}
                  fromDefaultValue={sunFrom ? JSON.stringify(sunFrom) : null}
                  toDefaultValue={sunTo ? JSON.stringify(sunTo) : null}
                  onFromClick={() => {
                    setState('fsun');
                    setOpen(true);
                  }}
                  onToClick={() => {
                    setState('tsun');
                    setOpen(true);
                  }}
                  fromValue={sunFrom}
                  toOnChangeText={() => {}}
                  toOnSubmitEditing={() => {}}
                  toValue={sunTo}
                />
              ) : null}
            </View>
          </View>

          <View>
            <View style={styles.rowview}>
              <FontText
                size={normalize(16)}
                name={'poppins-regular'}
                color="gray-natural"
                textAlign="center">
                {t('MONDAY')}
              </FontText>

              <View style={styles.row}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-regular'}
                  color={mon ? 'primary' : 'red'}
                  pRight={wp(4)}
                  textAlign="center">
                  {mon ? t('OPEN') : t('CLOSED')}
                </FontText>

                <Switch
                  trackColor={{
                    false: colors['gray-devider'],
                    true: colors.primary,
                  }}
                  thumbColor={colors.white}
                  ios_backgroundColor={colors['gray-devider']}
                  onValueChange={() => setMon(previousState => !previousState)}
                  value={mon}
                  style={{
                    transform: [
                      {scaleX: isAndroid ? 1 : 0.7},
                      {scaleY: isAndroid ? 1 : 0.7},
                    ],
                  }}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginVertical: mon ? hp(-1.8) : null,
                alignSelf: 'flex-start',
              }}>
              {mon ? (
                <DayTime
                  fromOnChangeText={() => {}}
                  fromOnSubmitEditing={() => {}}
                  onFromClick={() => {
                    setState('fmon');
                    setOpen(true);
                  }}
                  onToClick={() => {
                    setState('tmon');
                    setOpen(true);
                  }}
                  fromValue={monFrom}
                  toOnChangeText={() => {}}
                  toOnSubmitEditing={() => {}}
                  toValue={monTo}
                />
              ) : null}
            </View>
          </View>

          <View>
            <View style={styles.rowview}>
              <FontText
                size={normalize(16)}
                name={'poppins-regular'}
                color="gray-natural"
                textAlign="center">
                {t('TUESDAY')}
              </FontText>

              <View style={styles.row}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-regular'}
                  color={tue ? 'primary' : 'red'}
                  pRight={wp(4)}
                  textAlign="center">
                  {tue ? t('OPEN') : t('CLOSED')}
                </FontText>

                <Switch
                  trackColor={{
                    false: colors['gray-devider'],
                    true: colors.primary,
                  }}
                  thumbColor={colors.white}
                  ios_backgroundColor={colors['gray-devider']}
                  onValueChange={() => setTue(previousState => !previousState)}
                  value={tue}
                  style={{
                    transform: [
                      {scaleX: isAndroid ? 1 : 0.7},
                      {scaleY: isAndroid ? 1 : 0.7},
                    ],
                  }}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginVertical: tue ? hp(-1.8) : null,
                alignSelf: 'flex-start',
              }}>
              {tue ? (
                <DayTime
                  fromOnChangeText={() => {}}
                  fromOnSubmitEditing={() => {}}
                  onFromClick={() => {
                    setState('ftue');
                    setOpen(true);
                  }}
                  onToClick={() => {
                    setState('ttue');
                    setOpen(true);
                  }}
                  fromValue={tueFrom}
                  toOnChangeText={() => {}}
                  toOnSubmitEditing={() => {}}
                  toValue={tueTo}
                />
              ) : null}
            </View>
          </View>

          <View>
            <View style={styles.rowview}>
              <FontText
                size={normalize(16)}
                name={'poppins-regular'}
                color="gray-natural"
                textAlign="center">
                {t('WEDNESDAY')}
              </FontText>

              <View style={styles.row}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-regular'}
                  color={wed ? 'primary' : 'red'}
                  pRight={wp(4)}
                  textAlign="center">
                  {wed ? t('OPEN') : t('CLOSED')}
                </FontText>

                <Switch
                  trackColor={{
                    false: colors['gray-devider'],
                    true: colors.primary,
                  }}
                  thumbColor={colors.white}
                  ios_backgroundColor={colors['gray-devider']}
                  onValueChange={() => setWed(previousState => !previousState)}
                  value={wed}
                  style={{
                    transform: [
                      {scaleX: isAndroid ? 1 : 0.7},
                      {scaleY: isAndroid ? 1 : 0.7},
                    ],
                  }}
                />
              </View>
            </View>

            <View
              style={{
                alignItems: 'center',
                marginVertical: wed ? hp(-1.8) : null,
                alignSelf: 'flex-start',
              }}>
              {wed ? (
                <DayTime
                  fromOnChangeText={() => {}}
                  fromOnSubmitEditing={() => {}}
                  onFromClick={() => {
                    setState('fwed');
                    setOpen(true);
                  }}
                  onToClick={() => {
                    setState('twed');
                    setOpen(true);
                  }}
                  fromValue={wedFrom}
                  toOnChangeText={() => {}}
                  toOnSubmitEditing={() => {}}
                  toValue={wedTo}
                />
              ) : null}
            </View>
          </View>

          <View>
            <View style={styles.rowview}>
              <FontText
                size={normalize(16)}
                name={'poppins-regular'}
                color="gray-natural"
                textAlign="center">
                {t('THURSDAY')}
              </FontText>

              <View style={styles.row}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-regular'}
                  color={thu ? 'primary' : 'red'}
                  pRight={wp(4)}
                  textAlign="center">
                  {thu ? t('OPEN') : t('CLOSED')}
                </FontText>

                <Switch
                  trackColor={{
                    false: colors['gray-devider'],
                    true: colors.primary,
                  }}
                  thumbColor={colors.white}
                  ios_backgroundColor={colors['gray-devider']}
                  onValueChange={() => setThu(previousState => !previousState)}
                  value={thu}
                  style={{
                    transform: [
                      {scaleX: isAndroid ? 1 : 0.7},
                      {scaleY: isAndroid ? 1 : 0.7},
                    ],
                  }}
                />
              </View>
            </View>

            <View
              style={{
                alignItems: 'center',
                marginVertical: thu ? hp(-1.8) : null,
                alignSelf: 'flex-start',
              }}>
              {thu ? (
                <DayTime
                  fromOnChangeText={() => {}}
                  fromOnSubmitEditing={() => {}}
                  onFromClick={() => {
                    setState('fthu');
                    setOpen(true);
                  }}
                  onToClick={() => {
                    setState('tthu');
                    setOpen(true);
                  }}
                  fromValue={thuFrom}
                  toOnChangeText={() => {}}
                  toOnSubmitEditing={() => {}}
                  toValue={thuTo}
                />
              ) : null}
            </View>
          </View>

          <View>
            <View style={styles.rowview}>
              <FontText
                size={normalize(16)}
                name={'poppins-regular'}
                color="gray-natural"
                textAlign="center">
                {t('FRIDAY')}
              </FontText>

              <View style={styles.row}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-regular'}
                  color={fri ? 'primary' : 'red'}
                  pRight={wp(4)}
                  textAlign="center">
                  {fri ? t('OPEN') : t('CLOSED')}
                </FontText>

                <Switch
                  trackColor={{
                    false: colors['gray-devider'],
                    true: colors.primary,
                  }}
                  thumbColor={colors.white}
                  ios_backgroundColor={colors['gray-devider']}
                  onValueChange={() => setFri(previousState => !previousState)}
                  value={fri}
                  style={{
                    transform: [
                      {scaleX: isAndroid ? 1 : 0.7},
                      {scaleY: isAndroid ? 1 : 0.7},
                    ],
                  }}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginVertical: fri ? hp(-1.8) : null,
                alignSelf: 'flex-start',
              }}>
              {fri ? (
                <DayTime
                  fromOnChangeText={() => {}}
                  fromOnSubmitEditing={() => {}}
                  onFromClick={() => {
                    setState('ffri');
                    setOpen(true);
                  }}
                  onToClick={() => {
                    setState('tfri');
                    setOpen(true);
                  }}
                  fromValue={friFrom}
                  toOnChangeText={() => {}}
                  toOnSubmitEditing={() => {}}
                  toValue={friTo}
                />
              ) : null}
            </View>
          </View>

          <View>
            <View style={styles.rowview}>
              <FontText
                size={normalize(16)}
                name={'poppins-regular'}
                color="gray-natural"
                textAlign="center">
                {t('SATURDAY')}
              </FontText>

              <View style={styles.row}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-regular'}
                  color={sat ? 'primary' : 'red'}
                  pRight={wp(4)}
                  textAlign="center">
                  {sat ? t('OPEN') : t('CLOSED')}
                </FontText>

                <Switch
                  trackColor={{
                    false: colors['gray-devider'],
                    true: colors.primary,
                  }}
                  thumbColor={colors.white}
                  ios_backgroundColor={colors['gray-devider']}
                  onValueChange={() => setSat(previousState => !previousState)}
                  value={sat}
                  style={{
                    transform: [
                      {scaleX: isAndroid ? 1 : 0.7},
                      {scaleY: isAndroid ? 1 : 0.7},
                    ],
                  }}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginVertical: sat ? hp(-1.8) : null,
                alignSelf: 'flex-start',
              }}>
              {sat ? (
                <DayTime
                  fromOnChangeText={() => {}}
                  fromOnSubmitEditing={() => {}}
                  onFromClick={() => {
                    setState('fsat');
                    setOpen(true);
                  }}
                  onToClick={() => {
                    setState('tsat');
                    setOpen(true);
                  }}
                  fromValue={satFrom}
                  toOnChangeText={() => {}}
                  toOnSubmitEditing={() => {}}
                  toValue={satTo}
                />
              ) : null}
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonview}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.goBack()}
            style={[styles.btn, {backgroundColor: colors.white}]}>
            <FontText
              size={normalize(16)}
              name={'poppins-medium'}
              color="gray-natural"
              textAlign="center">
              {t('CANCEL')}
            </FontText>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onSave()}
            style={styles.btn}>
            <FontText
              size={normalize(16)}
              name={'poppins-medium'}
              color="white"
              textAlign="center">
              {t('SAVE')}
            </FontText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({

  safe:{flex: 1, backgroundColor: colors.white},
  container: {
    flex: 1,
    paddingTop: isX ? hp(0) : hp(1),
    backgroundColor: colors.white,
    paddingHorizontal:wp(2)
  },
  rowview: {
    width: wp(92),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(1.5),
    marginHorizontal:wp(3)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:wp(3)
  },
  btn: {
    backgroundColor: colors.primary,
    width: wp(44),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
  },
  buttonview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: wp(2),
    marginTop: hp(2),
    marginBottom: hp(2),
  },
});

export default AddDayTime;

import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import SvgIcons from '../../assets/SvgIcons';
import NavigationBar from '../../Components/NavigationBar';
import FontText from '../../Components/common/FontText/index';
import {useTranslation} from 'react-i18next';
import CustomeTextInput from '../../Components/CustomeTextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {routeName as mapLocationRouteName} from '../MapLocation';
import {routeName as addDayTimeRouteName} from '../AddDayTime';
import ImagePicker from 'react-native-image-crop-picker';
import {TimeData} from '../../helper/data';

export const routeName = 'shopDetail';

const shopDetail = props => {
  const {t} = useTranslation();
  const shopNameRef = useRef();
  const bussinessNameRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const shopTimeRef = useRef();
  const websiteRef = useRef();
  const twitterRef = useRef();
  const facebookRef = useRef();
  const instaRef = useRef();
  const pintRef = useRef();

  const [shopName, setShopName] = useState('');
  const [bussinessName, setBussinessName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shopTime, setShopTime] = useState('');
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');
  const [insta, setInsta] = useState('');
  const [pint, setPint] = useState('');

  const [showData, setShowData] = useState('');
  const {navigation} = props;
  const [open, setOpen] = useState(false);
  const [dropValue, setDropValue] = useState(null);
  const [items, setItems] = useState([
    {label: t('MALE'), value: 'Male'},
    {label: t('FEMALE'), value: 'Female'},
    {label: t('UNISEX'), value: 'Unisex'},
  ]);

  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const [isImage, setIsImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const addImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setIsImage(image);
    });
  };

  const ShopTime = data => {
    return TimeData.map((item, index) => {
      return (
        <View style={styles.shoptime}>
          <FontText
            size={normalize(14)}
            name={'poppins-medium'}
            color="black"
            textAlign="center">
            {t(item.day)}
          </FontText>
          <View style={styles.mainview}>
            <FontText
              size={normalize(14)}
              name={'poppins-medium'}
              color="black"
              textAlign="center">
              {item.from}
            </FontText>
            <FontText
              size={normalize(14)}
              name={'poppins-medium'}
              color="black"
              textAlign="center">
              {' - '}
            </FontText>
            <FontText
              size={normalize(14)}
              name={'poppins-medium'}
              color="black"
              textAlign="center">
              {item.to}
            </FontText>
          </View>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        <NavigationBar
          hasCenter
          hasLeft
          hasRight
          style={styles.nav}
          left={
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.pop()}>
              <SvgIcons.BackBlack height={wp(7)} width={wp(7)} />
            </TouchableOpacity>
          }
          center={
            <FontText
              size={normalize(20)}
              name={'poppins-semibold'}
              color="black"
              textAlign="center">
              {t('SHOP_DETAILS')}
            </FontText>
          }
          right={null}
          centerStyle={styles.center}
        />

        <ScrollView
          contentContainerStyle={{paddingBottom: hp(3)}}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <View style={styles.profileimgview}>
            <View style={styles.shadow}>
              {isImage ? (
                <Image source={{uri: isImage.path}} style={styles.profilepic} />
              ) : (
                <Image
                  source={require('../../assets/img/Profile/p1.jpg')}
                  style={styles.profilepic}
                />
              )}

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  isImage ? setModalVisible(true) : addImage();
                }}
                style={styles.camerabtn}>
                <SvgIcons.Camera height={wp(7)} width={wp(7)} />
              </TouchableOpacity>
            </View>
          </View>

          <CustomeTextInput
            lable={t('SHOP_NAME')}
            smallLable={''}
            ref={shopNameRef}
            onSubmitEditing={() => {}}
            value={shopName}
            onChangeText={value => {
              setShopName(value);
            }}
            returnKeyType="next"
          />

          <CustomeTextInput
            lable={t('BUSINESS_NAME')}
            smallLable={t('BUSINESS_NAME_TAG')}
            ref={bussinessNameRef}
            onSubmitEditing={() => {}}
            value={bussinessName}
            onChangeText={value => {
              setBussinessName(value);
            }}
            returnKeyType="next"
          />

          <CustomeTextInput
            lable={t('ADDRESS')}
            ref={addressRef}
            onSubmitEditing={() => {}}
            value={address}
            onChangeText={value => {
              setAddress(value);
            }}
            returnKeyType="next"
          />
          <FontText
            size={normalize(16)}
            name={'poppins-medium'}
            color="blackNatural"
            pBottom={hp(0.5)}
            pLeft={wp(4)}
            textAlign="left">
            {t('MAP_LOCATION')}
          </FontText>
          <TouchableOpacity
            style={styles.mapview}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate(mapLocationRouteName);
            }}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={tokyoRegion}
              onRegionChangeComplete={region => setRegion(region)}>
              <Marker coordinate={tokyoRegion} />
            </MapView>
          </TouchableOpacity>

          <CustomeTextInput
            lable={t('PHONE_NO')}
            ref={phoneNumberRef}
            onSubmitEditing={() => {}}
            value={phoneNumber}
            onChangeText={value => {
              setPhoneNumber(value);
            }}
            returnKeyType="done"
            maxLength ={10}
            keyboardType='numeric'
          />
          <View style={styles.shopview}>
            <FontText
              size={normalize(16)}
              name={'poppins-medium'}
              color="blackNatural"
              pBottom={hp(0.5)}
              textAlign="left">
              {t('SHOP_TIME')}
            </FontText>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate(addDayTimeRouteName,{bool:0})}>
              <FontText
                size={normalize(12)}
                name={'poppins-medium'}
                color="primary"
                pBottom={hp(0.5)}
                textAlign="right">
                {showData ? t('EDIT') : t('ADD_DAY')}
              </FontText>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            {showData ? (
              ShopTime(TimeData)
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setShowData('1');
                }}>
                <FontText
                  size={normalize(12)}
                  name={'poppins-medium'}
                  color="primary"
                  textAlign="right">
                  {t('SHOW')}
                </FontText>
              </TouchableOpacity>
            )}
          </View>
          <FontText
            size={normalize(16)}
            name={'poppins-medium'}
            color="blackNatural"
            pBottom={hp(0.5)}
            pLeft={wp(4)}
            textAlign="left">
            {t('SALON_TYPE')}
          </FontText>
          <DropDownPicker
            placeholder={t('SELECT_ITEM')}
            open={open}
            value={dropValue}
            items={items}
            setOpen={setOpen}
            setValue={setDropValue}
            setItems={setItems}
            listMode="SCROLLVIEW"
            zIndex={1000}
            style={styles.dropdown}
            showTickIcon={false}
            dropDownContainerStyle={styles.dropdowncontainer}
            ArrowUpIconComponent={() => (
              <SvgIcons.ArrowUp height={wp(6)} width={wp(6)} />
            )}
            ArrowDownIconComponent={() => (
              <SvgIcons.ArrowDown height={wp(6)} width={wp(6)} />
            )}
          />

          <CustomeTextInput
            lable={t('WEBSITE')}
            ref={websiteRef}
            onSubmitEditing={() => {}}
            value={website}
            onChangeText={value => {
              setWebsite(value);
            }}
            returnKeyType="next"
          />
          <CustomeTextInput
            lable={t('TWITTER')}
            ref={twitterRef}
            onSubmitEditing={() => {}}
            value={twitter}
            onChangeText={value => {
              setTwitter(value);
            }}
            returnKeyType="next"
          />
          <CustomeTextInput
            lable={t('FACEBOOK')}
            ref={facebookRef}
            onSubmitEditing={() => {}}
            value={facebook}
            onChangeText={value => {
              setFacebook(value);
            }}
            returnKeyType="next"
          />
          <CustomeTextInput
            lable={t('INSTAGRAM')}
            ref={instaRef}
            onSubmitEditing={() => {}}
            value={insta}
            onChangeText={value => {
              setInsta(value);
            }}
            returnKeyType="next"
          />

          <CustomeTextInput
            lable={t('PINTEREST')}
            ref={pintRef}
            onSubmitEditing={() => {}}
            value={pint}
            onChangeText={value => {
              setPint(value);
            }}
            returnKeyType="done"
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: wp(4),
              marginVertical: hp(2),
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
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
              onPress={() => {}}
              style={styles.btn}>
              <FontText
                size={normalize(16)}
                name={'poppins-medium'}
                color="white"
                textAlign="center">
                {t('SAVE_CHANGES')}
              </FontText>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              activeOpacity={0.7}>
              <View>
                <FontText
                  size={normalize(16)}
                  name={'montserrat-semibold'}
                  color={'primary'}
                  textAlign="center">
                  {t('CANCEL')}
                </FontText>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainview: {flexDirection: 'row', alignItems: 'center'},
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    height: hp(18),
    width: hp(18),
    borderRadius: hp(9),
    borderColor: colors.white,
  },
  profileimgview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.22,
    elevation: 6,
    backgroundColor: 'white',
    margin: wp(3),
    borderRadius: hp(1),
    paddingVertical: hp(1),
    paddingHorizontal: hp(1),
    borderRadius: hp(10),
  },
  camerabtn: {
    position: 'absolute',
    backgroundColor: colors.primary,
    bottom: 0,
    right: wp(5),
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
    borderRadius: wp(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    width: wp(92),
    alignSelf: 'center',
    backgroundColor: colors['gray-light'],
    borderWidth: 0,
    height: hp(7.5),
    borderRadius: wp(4),
    fontFamily: 'poppins-regular',
    fontWeight: 'bold',
    fontSize: normalize(16),
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
  },
  dropdowncontainer: {
    width: wp(92),
    alignSelf: 'center',
    fontFamily: 'poppins-regular',
    fontWeight: '600',
    fontSize: normalize(16),
    borderWidth: 0,
    borderTopWidth: wp(0.2),
    borderTopColor: colors['gray-lightest'],
    backgroundColor: colors['gray-light'],
  },
  btn: {
    backgroundColor: colors.primary,
    width: wp(45),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: wp(4),
  },
  mapview: {
    width: wp(92),
    height: hp(23),
    alignSelf: 'center',
    borderRadius: wp(4),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.popupblackbg,
  },
  inputContainer: {
    backgroundColor: colors['gray-light'],
    width: wp(92),
    minHeight: hp(7.5),
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  shopview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(4),
  },
  shoptime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: wp(4),
    marginVertical: hp(1.5),
  },
  nav: {paddingVertical: hp(1.5), paddingTop: isX ? hp(0) : hp(1)},
  center: {alignItems: 'flex-start', justifyContent: 'flex-start'},
});

export default shopDetail;

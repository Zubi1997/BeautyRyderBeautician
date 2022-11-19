import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  I18nManager,
  Modal,
} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import colors from '../../assets/colors';
import BackHeader from '../../Components/BackHeader';
import Input from '../../Components/common/Input';
import FontText from '../../Components/FontText';
import {hp, isAndroid, isX, normalize, wp} from '../../styles/responsiveScreen';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import AddTimeDate, {routeName as AddTimeDateRouteName} from './AddTimeDate';
import SvgIcons from '../../assets/SvgIcons';
import TitleSubTitle from '../../Components/TitleSubTitle';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useTranslation} from 'react-i18next';
import ImagePicker from 'react-native-image-crop-picker';
import BigButton from '../../Components/BigButton';
import SmartScrollView from '../../Components/common/SmartScrollView';

const {width, height} = Dimensions.get('screen');

export const routeName = 'AddAddress';

const AddAddress = props => {
  const {t} = useTranslation();

  const [IsImage, setIsImage] = useState(null);
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [OpenMap, setOpenMap] = useState(false);
  const [Submit, setSubmit] = useState(false);

  const [ModelOpen, setModelOpen] = useState(false);
  const [seconds, setSeconds] = useState(60);

  const Image_Error = Submit && typeof URI != 'string';
  const Name_Error = Submit && Name.length == 0;
  const Phone_Error = Submit && Phone.length == 0;
  const Address_Error = Submit && Address.length == 0;
  const Maps_Error = Submit && !OpenMap;

  const AllField =
    // typeof URI == 'string' &&
    Name.length != 0 &&
    Phone.length != 0 &&
    Address.length != 0 &&
    OpenMap;

  // Location
  const [CurrentLongitude, setCurrentLongitude] = useState();
  const [CurrentLatitude, setCurrentLatitude] = useState();

  // Refs
  const PhoneRef = useRef();
  const AddressRef = useRef();
  const OpenCamera = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setIsImage(image);
    });
  };

  const GetLocation = () => {
    setOpenMap(true);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude = position.coords.longitude;
        const currentLatitude = position.coords.latitude;
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      error => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  }, []);

  const submitBtnPress = () => {
    setSubmit(true);

    if (AllField) {
      setModelOpen(true);
    }
  };

  useEffect(() => {
    let Interval;

    if (ModelOpen) {
      Interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          clearInterval(Interval);
        }
      }, 1000);
    }

    return () => clearInterval(Interval);
  }, [ModelOpen, seconds]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <BackHeader
        title={t('COMPLETE_PROFILE')}
        BackonPress={() => props.navigation.goBack()}
        rightText={'1/3'}
        style ={{marginHorizontal:wp(2)}}
      />

      <ProgressBar
        progress={0.3}
        color={'#397DFF'}
        style={styles.ProgressBar}
      />

      <SmartScrollView contentContainerStyle= {styles.contentContainerStyle} showsVerticalScrollIndicator={false} style={{flex: 1}}>

          <View style={styles.addressView}>
            <TitleSubTitle Title =  {t('ADD_ADDRESS')} SubTitle =  {t('ADD_ADDRESS_TAG')}  />
            <View
              style={[
                styles.ImageMainView,
                {borderColor: Image_Error ? '#ff0000' : 'transparent'},
              ]}>
              <View style={styles.ImageView}>
                {IsImage ? (
                   <Image
                   source={{uri: IsImage.path}}
                   style={{ height: hp(20),
                    width: hp(20),
                    borderRadius: hp(10),
                    borderColor: colors.white,}}
                 />
               ) : (
                <FontText
                    name={'poppins-medium'}
                    size={normalize(14)}
                    style={{color: '#00000060'}}>
                    {t('UPLOAD_IMAGE')}
                  </FontText>
                )}
              </View>

              <TouchableOpacity
                onPress={() => OpenCamera()}
                style={styles.cameraView}>
                <Image
                  source={require('../../assets/images/camera.png')}
                  resizeMode="cover"
                  style={styles.camera}
                />
              </TouchableOpacity>
            </View>

            <View style={{flex: 1}}>
              <FontText name={'poppins-medium'} size={normalize(16)}>
                {t('BUSINESS_NAME')}
              </FontText>
              <FontText
                name={'poppins-medium'}
                pTop={width * 0.01}
                pBottom={width * 0.02}
                size={normalize(12)}
                style={{color: '#00000060'}}>
                {t('INVOICE')}
              </FontText>

              <Input
                placeholder={t('NAME')}
                fontSize={normalize(16)}
                returnKeyType="next"
                blurOnSubmit={false}
                onChangeText={val => setName(val.trim())}
                inputStyle={styles.InputStyle}
                onSubmit={() => PhoneRef.current.focus()}
                fontName={'poppins-regular'}
                style={styles.Input}
                height={hp(6)}
                width={hp(90)}
              />

              <View style={styles.ErrorView}>
                <FontText
                  size={normalize(14)}
                  pLeft={width * 0.01}
                  name={'poppins-regular'}
                  style={{color: '#ff0000'}}>
                  {Name_Error ? t('PLZ_ENTER_NAME') : ''}
                </FontText>
              </View>

              <FontText name={'poppins-medium'} size={normalize(16)}>
                {t('PHONE_NO')}
              </FontText>
              <Input
                keyboardType={'numeric'}
                placeholder={t('ENTER_PHONE_NO')}
                fontSize={normalize(16)}
                returnKeyType="next"
                blurOnSubmit={false}
                onChangeText={val => setPhone(val.trim())}
                maxLength={10}
                ref={PhoneRef}
                inputStyle={styles.InputStyle}
                onSubmit={() => AddressRef.current.focus()}
                fontName={'poppins-regular'}
                style={styles.Input}
                height={hp(6)}
                width={hp(90)}
              />
              <View style={styles.ErrorView}>
                <FontText
                  size={normalize(14)}
                  pLeft={width * 0.01}
                  name={'poppins-regular'}
                  style={{color: '#ff0000'}}>
                  {Phone_Error ? t('PLZ_ENTER_PHONE') : ''}
                </FontText>
              </View>

              <FontText name={'poppins-medium'} size={normalize(16)}>
                {t('ADDRESS')}
              </FontText>
              <Input
                placeholder={t('ENTER_ADDRESS')}
                fontSize={normalize(16)}
                returnKeyType="go"
                onChangeText={val => setAddress(val.trim())}
                ref={AddressRef}
                blurOnSubmit={false}
                inputStyle={styles.InputStyle}
                onSubmit={() => Keyboard.dismiss()}
                fontName={'poppins-regular'}
                style={styles.Input}
                height={hp(6)}
                width={hp(90)}
              />
              <View style={styles.ErrorView}>
                <FontText
                  size={normalize(14)}
                  pLeft={width * 0.01}
                  name={'poppins-regular'}
                  style={{color: '#ff0000'}}>
                  {Address_Error ? t('PLZ_ENTER_ADD') : ''}
                </FontText>
              </View>

              {/* Map View */}
              <FontText name={'poppins-medium'} size={normalize(16)}>
                {t('MAP_LOCATION')}
              </FontText>

              <View style={styles.MapMainView}>
                <TouchableOpacity onPress={() => GetLocation()}>
                  {!OpenMap && (
                    <FontText
                      name={'poppins-medium'}
                      size={normalize(14)}
                      style={{color: '#00000060'}}>
                      {t('OPEN_MAP')}
                    </FontText>
                  )}
                </TouchableOpacity>
                {OpenMap && CurrentLatitude != '' && (
                  <MapView
                    style={styles.map}
                    region={{
                      latitude: CurrentLatitude,
                      longitude: CurrentLongitude,
                      latitudeDelta: 0.015,
                      longitudeDelta: 0.0121,
                    }}>
                    <Marker
                      coordinate={{
                        latitude: CurrentLatitude,
                        longitude: CurrentLongitude,
                      }}
                      title={'You'}
                    />
                  </MapView>
                )}
              </View>

              <View style={styles.ErrorView}>
                <FontText
                  size={normalize(14)}
                  pLeft={width * 0.01}
                  name={'poppins-regular'}
                  style={{color: '#ff0000'}}>
                  {Maps_Error ? t('PLZ_SELECT_LOCATION') : ''}
                </FontText>
              </View>
            </View>
          </View>
        <BigButton title =    {t('CONTINUE')}  style ={{alignSelf:'center'}} onClick= {() => submitBtnPress()}  />
      </SmartScrollView>

      <Modal
        transparent={true}
        visible={ModelOpen}
        animationType="slide"
        onRequestClose={() => setModelOpen(false)}>
        <View style={{flex: 1, backgroundColor: '#00000080'}}>
          <View style={styles.model}>
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => setModelOpen(false)}
                style={styles.modelopen}>
                <Image
                  source={require('../../assets/images/Cross.png')}
                  resizeMode="contain"
                  style={styles.cross}
                />
              </TouchableOpacity>
              <SvgIcons.Sucess
                width={width * 0.35}
                height={width * 0.35}
                style={{alignSelf: 'center'}}
              />
              <TitleSubTitle
                TextStyle={{marginTop: width * 0.05}}
                style={{margin: 0, marginHorizontal: width * 0.08}}
                Title={t('VERIFY_NO')}
                SubTitle={t('CHECK_INBOX')}
                textalign={'center'}
                pLeft={wp(3.5)}
              />

              <OTPInputView
                style={styles.otp}
                pinCount={4}
                editable={true}
                autoFocusOnLoad={false}
                codeInputFieldStyle={styles.otpinput}
                onCodeFilled={code => {
                  console.log(
                    `${t('Code is')} ${code}, ${t('you are good to go!')}`,
                  );
                }}
              />

              <View style={styles.secView}>
                <FontText
                  name={'poppins-medium'}
                  size={normalize(14)}
                  textAlign={'center'}
                  color={'lightViolet'}>
                  {`${t('RESEND_CODE')}`}
                  <FontText style={{color: '#397DFF'}}>
                    {`00:${seconds < 10 ? '0' : ''}`}
                    {seconds}
                    {t('SEC')}
                  </FontText>
                </FontText>
              </View>

              <BigButton title = {t('VERIFY')} style ={{justifyContent:'flex-end',alignSelf:'center',marginBottom:hp(4)}} onClick ={() => {
                  setModelOpen(false);
                  props.navigation.navigate(AddTimeDateRouteName);
                }}  />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#fff'},
  ProgressBar: {
    width: width * 0.90,
    alignSelf: 'center',
    height: width * 0.02,
    borderRadius: width * 0.02,
    marginVertical: width * 0.02,
  },
  ImageMainView: {
    backgroundColor: '#fff',
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 100,
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: width * 0.2,
    },
    shadowColor: '#00000013',
    shadowOpacity: 1,
    shadowRadius: 33,
    // elevation: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ff00000',
    borderColor: 'transparent',
    marginTop:hp(2),
    marginBottom: height * 0.03,
  },
  ImageView: {
    backgroundColor: '#00000010',
    width: width * 0.38,
    height: width * 0.38,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Input: {
    width: '100%',
  },

  ErrorView: {
    marginTop: width * 0.015,
    marginBottom: width * 0.01,
  },
  cameraView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 100,
    backgroundColor: '#397DFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '60%',
    height: '60%',
    tintColor: '#fff',
  },
  InputStyle: {
    backgroundColor: colors.viewcolor,
    borderRadius: 10,
    color: colors.lightViolet,
    paddingLeft: wp(3),
    textAlign: I18nManager.isRTL ? 'right':'left',
  },
  map: {width: '99%', height: '99%', borderRadius: 10},
  MapMainView: {
    height: width * 0.5,
    borderRadius: 20,
    marginTop: width * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000010',
    overflow: 'hidden',
  },
  BTN: {
    width: width * 0.9,
    alignSelf: 'center',
    height: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.04,
    marginVertical: width * 0.03,
  },
  otpinput: {
    width: width * 0.17,
    height: width * 0.15,
    borderWidth: 0,
    borderRadius: 14,
    fontSize: normalize(20),
    margin: wp(1),
    color: colors.violet,
    backgroundColor: '#F7F8FA',
    fontWeight: 'bold',
  },
  model: {
    width: width,
    height: height <767 ?isAndroid ? hp(68) : hp(65)  : hp(55),
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
  },
  modelopen: {
    width: width * 0.05,
    height: width * 0.05,
    alignSelf: 'flex-end',
    marginRight: width * 0.05,
    marginTop: width * 0.03,
  },
  cross: {
    width: '100%',
    height: '100%',
  },
  otp: {
    height: hp(8),
    width: width * 0.8,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: width * 0.03,
  },
  secView: {
    marginHorizontal: 25,
    marginBottom: width * 0.05,
  },
  mainButton: {
    flex: null,
    backgroundColor: '#397DFF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(0),
    marginBottom: height > 768 ? width * 0.06 : width * 0.02,
  },
  addressView: {flex: 1, paddingHorizontal: width * 0.02},
  contentContainerStyle:{paddingVertical:hp(2),paddingHorizontal:wp(2)},
});

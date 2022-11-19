import React, {Component, useState, useRef, useCallback} from 'react';
import {TextInput, ProgressBar} from 'react-native-paper';
import FontText from '../../Components/common/FontText';
import colors from '../../assets/colors';
import BackHeader from '../../Components/BackHeader';
import SvgIcons from '../../assets/SvgIcons';
import {Modalize} from 'react-native-modalize';
import ImagePicker from 'react-native-image-crop-picker';
import TitleSubTitle from '../../Components/TitleSubTitle';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import {useTranslation} from 'react-i18next';
import BigButton from '../../Components/BigButton';
import PhoneNo, {routeName as PhoneNoRouteName} from './PhoneNo';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Single_step from './components/Single_step';
import Required_steps_head from './components/Required_steps_head';

const {width, height} = Dimensions.get('screen');

export const routeName = 'ShopPic';

const ShopPic = ({navigation}) => {
  const {t} = useTranslation();
  const close = () => setVisible(false);
  const modalizeRef = useRef();
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
  const [isImage, setIsImage] = useState(null);

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        onClose()
        setIsImage(image);
      })
      .catch(err => {
        console.log('openCamera catch' + err.toString());
      });
  };

  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        onClose()
        setIsImage(image);
      })
      .catch(err => {
        console.log('openCamera catch' + err.toString());
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Required_steps_head />
      <ScrollView style={styles.container}>
        {/* <BackHeader
          BackonPress={() => navigation.goBack()}
          RightItemLabel={t('SKIP')}
          onPress={() => navigation.navigate('Tab')}
        /> */}
        <View style={{flex: 1,marginTop:20}}>
          {/* <ProgressBar
            progress={0.6}
            color={colors.primary}
            style={styles.progress}
          /> */}

          <TitleSubTitle
            Title={t('Take a photo of your CNIC Front Side')}
            SubTitle={t('Take_a_picture')}
            textalign={'left'}
            style={{fontSize:20}}
            pTop={hp(1)}
          />


          <TouchableOpacity style={styles.subcontainer} onPress={onOpen}>
            <View style={styles.round}>
              {isImage ? (
                <Image source={{uri: isImage.path}} style={styles.profilepic} />
              ) : (
                <SvgIcons.file />
              )}
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.btnView}>
          <FontText
            name={'poppins-semibold'}
            size={normalize(14)}
            pBottom={hp(2)}
            textAlign={'center'}
            color={'lightViolet'}>
            {t('SUPPORTED_FILE')}
          </FontText>
          <BigButton
            title={t('SUBMIT')}
            onClick={() => {
              {
                if(isImage){
                  // navigation.navigate(PhoneNoRouteName)
                  navigation.goBack()
                }
                else{
                  alert('Please upload image first')
                }
              } 
            }}
          />
        </View>

        <Modalize ref={modalizeRef} withHandle={false} modalHeight={hp(20)}>
          <FontText
            name={'poppins-medium'}
            size={normalize(16)}
            textAlign={'center'}
            pTop={hp(2)}
            color={'textcolor'}>
            {t('CHOOSE')}
          </FontText>
          <View style={styles.camera}>
            <TouchableOpacity style={styles.item} onPress={openCamera}>
              <FontText
                name={'poppins-medium'}
                size={normalize(16)}
                pTop={hp(1)}
                color={'textcolor'}>
                {t("CAMERA")}
              </FontText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={chooseImage}>
              <FontText
                name={'poppins-medium'}
                size={normalize(16)}
                pTop={hp(1)}
                color={'textcolor'}>
                {t("GALL")}
              </FontText>
            </TouchableOpacity>
          </View>
        </Modalize>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(5),
  },
  progress: {
    marginHorizontal: wp(3),
    marginVertical: wp(2),
    height: hp(1),
    borderRadius: 14,
  },
  round: {
    height: wp(50),
    width: wp(50),
    backgroundColor: colors.primaryLight,
    borderRadius:  hp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: height * 0.02,
  },
  subcontainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: height * 0.45,
  },
  item: {justifyContent: 'center', alignItems: 'center'},
  profilepic: {
    height: wp(50),
    width: wp(50),
    borderRadius: hp(100),
    borderColor: colors.white,
  },
  camera: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: wp(15),
  },
});

export default ShopPic;

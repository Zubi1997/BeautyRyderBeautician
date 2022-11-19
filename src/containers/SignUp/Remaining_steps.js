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
  Linking
} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import {useTranslation} from 'react-i18next';
import BigButton from '../../Components/BigButton';
import PhoneNo, {routeName as PhoneNoRouteName} from './PhoneNo';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Single_step from './components/Single_step';
import ShopPic, {routeName as ShopPicRouteName} from './ShopPic';
import Required_steps_head from './components/Required_steps_head';

const {width, height} = Dimensions.get('screen');


export const routeName = 'Remaining_steps';

const Remaining_steps = ({navigation}) => {
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
          <FontText
            name={'poppins-bold'}
            size={normalize(18)}
            color={colors.black}
            style={{marginLeft:10,fontSize:normalize(20),color:colors.black}}
            >
            {t('Welcome_only')+', Syed Saqib'}
          </FontText>
          <TitleSubTitle
            Title={t('Requiredsteps')}
            SubTitle={t('Heres_you_need')}
            textalign={'left'}
            style={{fontSize:20}}
            pTop={hp(1)}
          />

        <Single_step 
          text1={t('terms_condition')}
          text2={t('Recommended next step')}
          style2={{color:colors.primary}}
          margintop={wp(3)}
          onpress={()=>Linking.openURL('https://termify.io/terms-and-conditions-generator?gclid=CjwKCAjwtKmaBhBMEiwAyINuwE4ePum_va5yZqOReVLrtDxneuQSrIkHHcyI8edafy7_EDrjwJ5YThoCQOAQAvD_BwE')}
        />
        <Single_step 
          text1={t('CNIC Front Side')}
          text2={t('Get Started')}
          onpress={()=>navigation.navigate(ShopPicRouteName)}
          margintop={wp(4)}
        />
        <Single_step
          text1={t('Pertner Photo')}
          text2={t('Get Started')}
          onpress={()=>alert(terms)}
          margintop={wp(4)}
        />
        <Single_step 
          text1={t('Beautician License Front')}
          text2={t('Get Started')}
          onpress={()=>navigation.navigate(ShopPicRouteName)}
          margintop={wp(4)}
        />

        <View>
          <TitleSubTitle
              Title={t('Submitted')}
              // SubTitle={t('Heres_you_need')}
              textalign={'left'}
              style={{fontSize:20}}
              pTop={hp(1)}
            />
          <Single_step 
            text1={t('CNIC Front Side')}
            text2={t('Get Started')}
            onpress={()=>navigation.navigate(ShopPicRouteName)}
            margintop={wp(0)}
            submitted={true}
          />
        </View>

        </View>

       
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
    borderRadius: 100,
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

export default Remaining_steps;

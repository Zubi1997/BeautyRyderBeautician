import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  hp,
  wp,
  normalize,
  isIOS,
  isX,
  isAndroid,
} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import FontText from '../common/FontText';
import Button from '../common/Button';
import SvgIcons from '../../assets/SvgIcons';
import { useTranslation } from 'react-i18next';
// import {SliderBox} from 'react-native-image-slider-box';

// const screenWidth = Dimensions.get('window').width;
const { width, height } = Dimensions.get('screen')

const CustomeCard = props => {
  const { t } = useTranslation();
  const { data } = props;
  console.log('data is...', data)
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <TouchableOpacity activeOpacity={0.7}
        onPress={props.onPress}>
        <View style={styles.view}>
          {props.upComing ?

            (
              <>
                <View style={styles.imageView}>
                  <Image
                    source={data.coverImg}
                    style={styles.user}
                  />

                  <FontText
                    name={'poppins-regular'}
                    size={normalize(16)}
                    style={styles.name}>
                    {data.name}
                  </FontText>

                  <FontText size={normalize(16)} style={styles.sign}>
                    $
                  </FontText>
                </View>
                <View style={styles.ServiceView}>
                  <View style={styles.Service}>
                    <FontText
                      name={'poppins-medium'}
                      size={normalize(12)}
                      style={styles.ServiceText}>
                      {t('TOTAL_SERVICE')}
                    </FontText>

                    <View style={styles.ServiceCount}>
                      <FontText
                        name={'poopins-regular'}
                        size={normalize(12)}
                        style={styles.ServiceCountText}>
                        {data.serviceCount}
                      </FontText>
                    </View>
                    <FontText
                      name={'poppins-medium'}
                      size={normalize(16)}
                      textAlign={'right'}
                      style={styles.price}>
                      {data.charge}
                    </FontText>
                  </View>
                </View>
              </>


            )
            : (<>
              <View style={styles.imageView}>
                <Image
                  source={data.coverImg}

                  style={styles.user}
                />

                <FontText
                  name={'poppins-regular'}
                  size={normalize(16)}
                  style={styles.name}>
                  {data.name}
                </FontText>
              </View>
              <View style={styles.mainView}>
                <View style={styles.service}>
                  <FontText
                    name={'poppins-medium'}
                    size={normalize(12)}
                    //   textAlign={'left'}
                    style={styles.serviceText}>
                    {t('TOTAL_SERVICE')}
                  </FontText>

                  <View style={styles.serviceCount}>
                    <FontText
                      name={'poopins-regular'}
                      size={normalize(12)}
                      style={styles.serviceCountText}>
                      {data.serviceCount}
                    </FontText>
                  </View>
                  <FontText
                    name={'poppins-medium'}
                    size={normalize(16)}
                    textAlign={'right'}
                    style={styles.price}>
                    {/* <FontText size={normalize(14)}>$</FontText> */}
                    {'$' + data.charge}
                  </FontText>
                </View>
              </View>
            </>)}
          <View style={[styles.DateTimeView,
          { marginTop: height < 767 ? props.upComing ? hp(1) : hp(1) : hp(0) }

          ]}>
            <View style={[styles.DateTimeSubView, { marginTop: props.upcoming ? hp(-1) : hp(0) }]}>
              <Image
                source={require('../../assets/img/Appoiment/Calendar.png')}
                style={styles.Calendar}
              />
              <FontText
                nam
                e={'poppins-medium'}
                size={normalize(12)}
                style={styles.Datetext}>
                {data.date}
              </FontText>
              <View style={styles.dot} />
              <Image
                source={require('../../assets/img/Appoiment/time.png')}
                style={styles.clock}
              />
              <FontText
                name={'poppins-medium'}
                size={normalize(12)}
                style={styles.Datetext}>
                {data.time}
              </FontText>
              <View style={styles.dot} />
              <View style={styles.box}>
                <FontText
                  name={'poppins-medium'}
                  size={normalize(12)}
                  style={styles.boxText}>
                  {data.alocateTime}
                </FontText>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  safe: { flex: 1, backgroundColor: 'rgb(255,255,255)' },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: ,
  },
  view: {
    width: wp(90),
    height: isAndroid ? '90%' : '90%',
    marginHorizontal: wp(4),
    backgroundColor: '#ffffff',
    // opacity: 0.3,
    marginTop: hp(3),

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 24,
    shadowColor: 'rgba(218, 218, 218, 0.31)',
    shadowOpacity: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 20,
  },
  imageView: { flex: 1, flexDirection: 'row' },
  user: {
    width: wp(23),
    height: wp(22),
    borderRadius: wp(4),
    marginTop: hp(2),
    marginLeft: wp(2),
    marginRight: wp(4),
  },
  name: {
    fontWeight: '600',
    display: 'flex',
    marginTop: hp(3),
    height: '70%',
  },
  sign: {
    fontWeight: '600',
    textAlign: 'right',
    width: width * 0.22,
    height: hp(3),
    marginTop: hp(3),
  },
  ServiceView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height < 767 ? hp(-7) : hp(-6),
    width: wp(100),
  },
  service: {
    flexDirection: 'row',
    marginTop: hp(1),
    // marginLeft:wp(5),
    alignSelf: 'flex-end',
    width: '68%',
  },
  mainView: {
    // flex: 1,

    marginTop: height < 767 ? hp(-8) : hp(-5.5),
    paddingTop: height < 767 ? hp(0) : hp(0)
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // width: wp(100),
  },
  Service: {
    flexDirection: 'row',
    marginTop: hp(1),

    marginLeft: wp(0),
    width: '40%',
  },
  serviceText: {
    fontWeight: '500',
    marginTop: hp(0),
    marginRight: wp(2)
  },
  ServiceText: {
    fontWeight: '500',
    marginTop: hp(0.5),
    width: '60%',
    marginLeft: wp(-1),
  },
  serviceCountText: {
    color: '#FF4746',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: hp(0.8)
  },
  serviceCount: {
    backgroundColor: '#FF474620',
    borderRadius: 50,
    height: wp(9),
    width: wp(9),
    marginLeft: wp(1),
    marginTop: hp(-1),
  },
  ServiceCount: {
    backgroundColor: '#FF474620',
    borderRadius: 50,
    height: wp(9),
    width: wp(9),
    marginLeft: wp(0.5),
    marginTop: hp(-0.8),
  },
  ServiceCountText: {
    color: '#FF4746',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: hp(0.8)
    // margin: wp(2.5),
  },
  price: { fontWeight: '600', width: width * 0.2 },
  DateTimeView: {
    flex: 1,
    //  paddingBottom: height < 767 ? hp(1.5) : hp(0),
    marginTop: hp(2)
  },
  DateTimeSubView: {
    // height: '100%',
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(4),
    // marginTop: hp(1.5),
  },
  Calendar: {
    width: wp(5),
    height: wp(5),
    tintColor: '#15093E',
    // marginVertical: hp(1),
    // marginLeft: wp(4),
  },
  Datetext: { fontWeight: '500' },
  dot: {
    width: wp(2),
    height: wp(2),
    backgroundColor: '#397DFF',
    borderRadius: wp(5),
    opacity: 0.3,
  },
  clock: {
    width: wp(5),
    height: wp(5),
    tintColor: '#15093E',
    // marginVertical: hp(1),
    // marginLeft: wp(4),
  },
  box: {
    width: wp(30),
    height: isAndroid ? hp(6) : hp(5),
    backgroundColor: 'rgba(70, 255, 144, 0.15)',
    borderRadius: wp(2),
    marginVertical: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: { color: '#0D8B47' },
});

export default CustomeCard;

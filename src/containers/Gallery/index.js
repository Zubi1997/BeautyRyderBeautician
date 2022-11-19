import React, { Component, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { hp, wp, normalize, isIOS, isX } from '../../styles/responsiveScreen';
import FontText from '../../Components/common/FontText';
import BackHeader from '../../Components/BackHeader';
import SvgIcons from '../../assets/SvgIcons';
import BigButton from '../../Components/BigButton';
import AddContent, { routeName as AddContentRouteName } from './AddContent';
import { useTranslation } from 'react-i18next';
import EmptyDefault from '../../Components/EmptyDefault';

export const routeName = 'Galllery';

const { width, height } = Dimensions.get('screen');

const Gallery = props => {
  const { t } = useTranslation();
  const [show, setshow] = useState(true);
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subC}>
        {show ? (
          <>
            <View style={{ flexDirection: 'row' }}>
              <BackHeader
                style={{ width: '50%' }}
                title={t('GALLERY')}
                BackonPress={() => navigation.goBack()}
              />
            </View>
            <EmptyDefault icon={<SvgIcons.VideoImage />} Title={t('GALLERY_SUBTAG')} Subtitle={t('LOREM')} navigation={() => navigation.goBack()} />
            <View style={styles.btn}>
              <BigButton
                title={t('ADD_CONTENT')}
                onClick={() => setshow(!show)}
              />
            </View>
          </>
        ) : (
          <>
            <BackHeader
              title={t('ADD_CONTENT')}
              BackonPress={() => navigation.goBack()}
            />
            <View style={{ flex: 1 }}>
              <View style={styles.galleryView}>
                <SvgIcons.Gallery />
                <FontText
                  name={'poppins-medium'}
                  size={normalize(16)}
                  pLeft={wp(4)}>
                  {t('IMAGES')}
                </FontText>
              </View>
              <TouchableOpacity
                style={styles.box}
                onPress={
                  () => navigation.navigate(AddContentRouteName)
                }>
                <SvgIcons.Export
                  style={{
                    alignSelf: 'center',
                  }}
                />
                <FontText
                  name={'poppins-medium'}
                  size={normalize(16)}
                  textAlign={'center'}
                  style={{ color: '#8384A1' }}>
                  {t('UPLOAD')}
                </FontText>
                <FontText
                  name={'poppins-medium'}
                  size={normalize(16)}
                  textAlign={'center'}
                  style={{ color: '#8384A1' }}>
                  {t('FORMATE')}
                </FontText>
              </TouchableOpacity>

              <View style={styles.video}>
                <SvgIcons.Video />
                <FontText
                  name={'poppins-medium'}
                  size={normalize(16)}
                  pLeft={wp(4)}>
                  {t('VIDEO')}
                </FontText>
              </View>
              <TouchableOpacity
                onPress={
                  () => navigation.navigate(AddContentRouteName)
                }
                style={styles.box}>
                <SvgIcons.Export
                  style={{
                    alignSelf: 'center',
                  }}
                />
                <FontText
                  name={'poppins-medium'}
                  size={normalize(16)}
                  textAlign={'center'}
                  style={{ color: '#8384A1' }}>
                  {t('UPLOAD')}
                </FontText>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  box: {

    width: wp(90),
    height: hp(20),
    justifyContent: 'center',
    backgroundColor: '#F7F8FA',
    alignSelf: 'center',
    marginVertical: hp(4),
    borderRadius: 14,
  },
  container: { flex: 1, backgroundColor: '#ffffff' },
  subC: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  videoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lorem: { fontWeight: 'normal', color: '#8384A1', width: wp(80) },
  btn: {
    justifyContent: 'flex-end',
    marginBottom: height * 0.02,
    alignItems: 'center',
  },
  galleryView: {
    flexDirection: 'row',
    marginTop: hp(5),
    marginHorizontal: wp(2),
  },
  video: {
    flexDirection: 'row',
    marginHorizontal: wp(2),
  },
});

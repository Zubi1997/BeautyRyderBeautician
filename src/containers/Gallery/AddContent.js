import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import FontText from '../../Components/common/FontText';
import {hp, normalize, wp} from '../../styles/responsiveScreen';
import Images from './Images';
import VideoData from './VideoData';

export const routeName = 'AddContent';

const AddContent = (props) => {
  const {t} = useTranslation();
  const [ActiveBtn, setActiveBtn] = useState(true);


  const {navigation} = props;
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View
          style={styles.subView}>
          <BackHeader
            title={t('GALLERY')}
            BackonPress={() => navigation.goBack()}
          />
          <View
            style={styles.ContentView}>
            <TouchableOpacity
              style={[styles.photoBtn,{ backgroundColor: ActiveBtn  ? '#397DFF' : '#397DFF1A',}]}
              onPress={() => setActiveBtn(true)}>
              <FontText
                size={normalize(14)}
                name={'poppins-medium'}
                pTop={hp(1.5)}
                style={{
                  color: ActiveBtn  ? '#fff' : '#15093E85',
                }}
                textAlign={'center'}
                pLeft={wp(5)}>
                {t('PHOTO')}
              </FontText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.videoBtn,{
                backgroundColor: ActiveBtn  ? '#397DFF1A' : '#397DFF',
              }]}
              onPress={() => setActiveBtn(false)}>
              <FontText
                size={normalize(14)}
                name={'poppins-medium'}
                pTop={hp(1.5)}
                style={{
                  color: ActiveBtn  ? '#15093E85' : '#fff',
                }}
                textAlign={'center'}>
                {t('VIDEO')}
              </FontText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          {ActiveBtn ? (
            <Images  navigation={navigation} />
          ) : (
            <VideoData  navigation={navigation} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddContent;

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
  subView:{
    flexDirection: 'row',
    marginHorizontal: wp(3),
  },
  container:{flex: 1, marginHorizontal: wp(2)},
  safe:{flex: 1, backgroundColor: '#ffffff'},
  ContentView:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    marginRight: wp(2),
    marginTop: hp(1),
  },
  photoBtn:{
    width: wp(20),

    height: hp(6),
    borderBottomLeftRadius: wp(12),
    borderTopLeftRadius: wp(12),
  },
  videoBtn:{
    width: wp(20),
    borderBottomRightRadius:wp(12),
    borderTopRightRadius:wp(12),
    height: hp(6),
  }
});

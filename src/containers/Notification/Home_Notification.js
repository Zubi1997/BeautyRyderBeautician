import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import FontText from '../../Components/FontText';
import NotificationHeader from '../../Components/common/NotificationHeader/NotificationHeader';
import SvgIcons from '../../assets/SvgIcons';
import { normalize, wp } from '../../styles/responsiveScreen';
import { useTranslation } from 'react-i18next';
import { NotificationData } from '../../helper/data';
import EmptyDefault from '../../Components/EmptyDefault';

export const routeName = 'Notification_Full';

const { width, height } = Dimensions.get('screen');

const Home_Notification = props => {
  const { t } = useTranslation();
  const [show, setShow] = useState(true);
  function RenderItems(item, index) {
    return (
      <View style={styles.RenderBox}>
        <View style={styles.TitleMainView}>
          <View style={styles.TitleSubView}>
            <Image
              source={item.image}
              resizeMode="contain"
              style={{
                width: width * 0.08,
                height: width * 0.08,
              }}
            />

            <FontText
              name={'poppins-semibold'}
              textAlign={'center'}
              pLeft={10}
              size={normalize(14)}>
              {t(item.title)}
            </FontText>
          </View>

          <FontText
            name={'poppins-regular'}
            textAlign={'center'}
            pLeft={10}
            style={{ color: '#00000080' }}
            size={normalize(12)}>
            {item.time}
          </FontText>
        </View>

        <FontText
          name={'poppins-regular'}
          textAlign={'left'}
          style={styles.text}
          size={normalize(14)}>
          {item.text}
        </FontText>
        <View style={styles.HorizontalBar} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      {show ? <>
        <NotificationHeader
          Name={t('NOTIFICATION')}
          navigation={() => props.navigation.goBack()}
        />
        <EmptyDefault icon={<SvgIcons.NotificationDefault />} onPress={() => setShow(!show)} Title={t('NOTIFICATION_TAG')} Subtitle={t('TAG')} />
      </>

        :
        <>
        <NotificationHeader style={{ width: '42%' }}
          Name={t('NOTIFICATION')}
          navigation={() => props.navigation.goBack()}
          icon={true}
        />
          <View>
            <FlatList
              data={NotificationData}
              keyExtractor={(value, index) => index.toString()}
              renderItem={({ item, index }) => RenderItems(item, index)}
            />
            <View style={styles.NewEraMainView}>
              <Image
                source={require('../../assets/images/NotificationGirl.png')}
                resizeMode="cover"
                style={styles.icon}
              />

              <FontText
                name={'poppins-medium'}
                textAlign={'left'}
                style={styles.tag}
                color={'#8384A1'}
                size={normalize(14)}>
                {t('NOTI_SUB_TAG')}
              </FontText>

              <FontText
                name={'poppins-regular'}
                textAlign={'center'}
                style={styles.time}
                size={normalize(12)}>
                10m ago
              </FontText>
            </View>
          </View></>}
    </SafeAreaView>
  );
};

export default Home_Notification;

const styles = StyleSheet.create({
  RenderBox: {
    borderBottomColor: '#000',
    paddingVertical: width * 0.02,
    marginTop: 5,
  },
  TitleMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
  },
  TitleSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.6,
  },
  HorizontalBar: {
    borderWidth: 0.5,
    borderColor: '#00000050',
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: width * 0.05,
  },
  NewEraMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    justifyContent: 'space-between',
    marginVertical: width * 0.02,
  },
  text: { width: width * 0.67, alignSelf: 'center', color: '#00000080' },
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  icon: { width: width * 0.27, height: width * 0.2, borderRadius: 10 },
  tag: { width: width * 0.6, alignSelf: 'center' },
  time: {
    position: 'absolute',
    bottom: width * 0.01,
    right: width * 0.07,
    color: '#00000080',
  },
});

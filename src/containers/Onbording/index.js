import React, {useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import FontText from '../../Components/FontText';
import {normalize, hp, wp, isX, isAndroid} from '../../styles/responsiveScreen';
import {useTranslation, withTranslation} from 'react-i18next';
import colors from '../../assets/colors';
import BigButton from '../../Components/BigButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import Login, {routeName as LogInRouteName} from '../LogIn';

export const routeName = 'onboarding';

const {height, width} = Dimensions.get('screen');

const Onboarding = props => {
  const {t} = useTranslation();
  const {navigation} = props;

  const refRBSheet = useRef();

  const data = [
    {name: "GET", sub: 'ORDER'},
    {name: 'BOOK', sub: 'ORDER'},
    {name: '200+', sub: 'ORDER'},
  ];

  const _renderItem = (item,index) => {
    return(
    <View style={styles.boxview}>
    <View style={styles.box}></View>
    <View>
      <FontText
        size={normalize(18)}
        name={'poppins-semibold'}
        color="black"
        pTop={hp(0.5)}
        textAlign="left">
        {t(item.name )}
      </FontText>
      <FontText
        size={normalize(14)}
        name={'poppins-regular'}
        color="gray-natural"
        pTop={hp(0.5)}
        textAlign="left">
        {t(item.sub)}
      </FontText>
    </View>
  </View>
  )
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/App_icon.jpg')}
        style={styles.logo}
      />
      <FontText
        size={normalize(26)}
        name={'poppins-medium'}
        color="blackNatural"
        pTop={hp(1)}
        textAlign="left">
        {t('WELCOME')}
      </FontText>
      <FontText
        size={normalize(26)}
        name={'poppins-medium'}
        color="blackNatural"
        pTop={hp(1)}
        textAlign="left">
        {t('BeauticianApp')}
      </FontText>
      <FontText
        size={normalize(14)}
        name={'poppins-regular'}
        color="gray-natural"
        pTop={hp(2)}
        textAlign="left">
        {t('OUR')}
      </FontText>

      <FlatList   scrollEnabled={false}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => _renderItem(item)}
      />
      <View style={styles.btnView}>
        <BigButton
          title={t('GetStarted')}
          onClick={() => navigation.navigate('SignUp')}
        />
      </View>
      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnPressMask={true}
          height={height > 768 ? height * 0.85 : height * 0.93}
          customStyles={styles.bottom}>
        </RBSheet>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? hp(0.5) : hp(4),
    marginHorizontal: wp(4),
  },
  logo: {
    marginTop: hp(4),
    height: wp(24),
    width: wp(24),
    borderRadius:20
  },
  sublogo: {
    height: wp(8),
    width: wp(40),
  },
  box: {
    backgroundColor: colors.primaryLight,
    height: hp(7),
    width: hp(7),
    borderRadius: wp(3),
    marginRight: wp(2),
  },
  boxview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(6),
  },
  btnView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: height > 768 ? height * 0.04 : height * 0.03,
  },
  bottom: {
    wrapper: {
      backgroundColor: 'black',
    },

    container: {
      borderTopColor: colors.primary,
      borderTopWidth: wp(1.5),
    },
  },
});

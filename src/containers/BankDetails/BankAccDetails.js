import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import FontText from '../../Components/common/FontText';
import {hp, isAndroid, normalize, wp} from '../../styles/responsiveScreen';
import SvgIcons from '../../assets/SvgIcons';
import {FlatList} from 'react-native-gesture-handler';
import data, {bankData} from '../../helper/data';
import BigButton from '../../Components/BigButton';
import {t} from 'i18next';
import AddNewBankAcc, {
  routeName as AddNewBankAccRouteName,
} from './AddNewBankAcc';

export const routeName = 'BankAccDetails';

const {height, width} = Dimensions.get('screen');

const BankAccDetails = ({navigation}) => {
  const [SelectedButton, setSelectedButton] = useState(0);

  function renderItems(item) {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setSelectedButton(item.name)}>
          <View style={styles.mainc}>
            <FontText
              name={'poppins-medium'}
              size={normalize(14)}
              style={styles.bankName}
              pTop={hp(2)}
              pLeft={hp(2)}>
              {item.bankName}
            </FontText>
            <FontText
              name={'poppins-medium'}
              size={normalize(18)}
              style={styles.cardNo}
              pTop={hp(1)}
              pLeft={hp(2)}>
              {item.CardNo}
            </FontText>
            <FontText
              name={'poppins-medium'}
              size={normalize(14)}
              style={styles.nametext}
              pTop={hp(0.5)}
              pLeft={hp(2)}>
              {item.name}
            </FontText>
            <View style={styles.Radio}>
              {SelectedButton === item.name ? (
                <SvgIcons.RadioOn width={wp(6)} height={wp(6)} />
              ) : (
                <SvgIcons.RadioOff width={wp(6)} height={wp(6)} />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subC}>
        <BackHeader
          title={t('BANK_ACC')}
          BackonPress={() => navigation.navigate(AddNewBankAccRouteName,{bool:2})}
        />
        <FlatList data={bankData} renderItem={({item}) => renderItems(item)} />
        <BigButton
          style={styles.withdraw}
          title={t('WITHDRAW')}
          onClick={() => SelectedButton ?
            navigation.navigate(AddNewBankAccRouteName, {bool: 1}) : null}
        />
      </View>
    </SafeAreaView>
  );
};

export default BankAccDetails;

const styles = StyleSheet.create({
  mainc: {
    flex: 1,
    width: wp(85),
    height: hp(15),
    borderRadius: 12,
    borderColor: '#8384A1',
    borderWidth: 1,
    marginTop: hp(4),
    alignSelf: 'center',
  },
  bankName: {color: '#8384A1', marginLeft: wp(2)},
  cardNo: {color: '#15093E', fontWeight: '600', marginLeft: wp(2)},
  nametext: {color: '#15093E', marginLeft: wp(2)},
  Radio: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: wp(5),
    marginTop:height< 767 ? isAndroid ? hp(-5) : hp(-4) : hp(-2),
  },
  withdraw: {marginBottom: height * 0.02},
  subC: {flex: 1, marginHorizontal: wp(3), alignSelf: 'center'},
  container: {flex: 1, backgroundColor: '#ffffff'},
});

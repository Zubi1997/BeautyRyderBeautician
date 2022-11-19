import React from 'react';
import { Dimensions, SafeAreaView, View, StyleSheet } from 'react-native';
import SvgIcons from '../../assets/SvgIcons';
import { hp, wp, normalize } from '../../styles/responsiveScreen';
import BackHeader from '../../Components/BackHeader';
import BigButton from '../../Components/BigButton';
import AddNewBankAcc, {
  routeName as AddNewBankAccRouteName,
} from './AddNewBankAcc';
import { t } from 'i18next';
import EmptyDefault from '../../Components/EmptyDefault';

export const routeName = 'Bank';

const { height, width } = Dimensions.get('screen');

const Bank = props => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
        style={{ marginHorizontal: wp(2) }}
        title={t('BANK_DETAILS')}
        BackonPress={() => navigation.goBack()}
      />
      <EmptyDefault icon={<SvgIcons.BankArt />} Title={t('BANK_ACC_SUBTAG')} Subtitle={t('LOREM')} />

      <View style={styles.btnView}>
        <BigButton
          title={t('ADD_NEW_BANK')}
          onClick={() => navigation.navigate(AddNewBankAccRouteName, { bool: 2 })}
        />
      </View>
    </SafeAreaView>
  );
};

export default Bank;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  mainview: {
    flex: 1,
    alignItems: 'center',
  },
  lorem: { fontWeight: 'normal', color: '#8384A1', width: wp(80) },
  btnView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
});

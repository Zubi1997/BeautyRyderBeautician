import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useTranslation, withTranslation } from 'react-i18next';
import AppointmentDetails, {
  routeName as AppointmentDetailsRouteName,
} from './appointmentDetails';
import CustomeCard from '../../Components/Card';
import { FlatList } from 'react-native-gesture-handler';
import { AppointmentData } from '../../helper/data';

export const routeName = 'Completed';

const Completed = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.safe}>
      <FlatList data={AppointmentData} renderItem={({ item }) => <CustomeCard upComing={false} data={item}
        onPress={() => navigation.navigate(AppointmentDetailsRouteName, { bool: 3, adata: item })} />} />
    </SafeAreaView>
  );
};

export default Completed;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ffffff' }
});

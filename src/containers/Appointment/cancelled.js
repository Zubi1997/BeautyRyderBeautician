import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useTranslation, withTranslation} from 'react-i18next';
import AppointmentDetails, {
  routeName as AppointmentDetailsRouteName,
} from './appointmentDetails';
import CustomeCard from '../../Components/Card';
import { FlatList } from 'react-native-gesture-handler';
import { AppointmentData } from '../../helper/data';

export const routeName = 'Cancelled';

const Cancelled = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.safe}>
      <FlatList data={ AppointmentData} showsVerticalScrollIndicator={false} bounces={false} renderItem={ ({item}) =>
      <CustomeCard upComing ={false} data = {item} onPress={() =>
        navigation.navigate(AppointmentDetailsRouteName, {bool: 2,adata:item}) }/>
       } />
    </SafeAreaView>
  );
};

export default Cancelled;

const styles = StyleSheet.create({
  safe:{flex: 1, backgroundColor: '#ffffff'}
});

import React, {useEffect, useState,useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList
} from 'react-native';
import {useTranslation, withTranslation} from 'react-i18next';
import AppointmentDetails, {
  routeName as AppointmentDetailsRouteName,
} from './appointmentDetails';
import CustomeCard from '../../Components/Card';
import { AppointmentData } from '../../helper/data';


export const routeName = 'Upcoming';

const Upcoming = ({navigation}) => {
  const {t} = useTranslation();

  const FlatListRef = useRef();

   return (
    <SafeAreaView style={styles.safe}>
      <FlatList data={ AppointmentData} showsVerticalScrollIndicator={false} renderItem={ ({item}) => <CustomeCard upComing ={true} data ={item} onPress={() =>
        navigation.navigate(AppointmentDetailsRouteName, {bool: 1,adata:item})
      } />} />
    </SafeAreaView>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  safe: {flex: 1, backgroundColor: 'rgb(255,255,255)'},
})

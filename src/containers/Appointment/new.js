import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Cancelled from './cancelled';
import Upcoming from './upcoming';
import Completed from './completed';
import { useTranslation } from 'react-i18next';

const New = props => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      {props.tabTitle == 'Upcoming' ? (
        <Upcoming navigation={props.navigation} />
      ) : props.tabTitle == 'Cancelled' ? (
        <Cancelled navigation = {props.navigation} />
      ) : (
      <Completed navigation={props.navigation} />
      )}
    </SafeAreaView>
  );
};

export default New;

const styles = StyleSheet.create({});

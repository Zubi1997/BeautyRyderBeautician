import React, {Component, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput, ProgressBar} from 'react-native-paper';
import FontText from '../../Components/common/FontText';
import colors from '../../assets/colors';
import BackHeader from '../../Components/BackHeader';
import SvgIcons from '../../assets/SvgIcons';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import {useTranslation} from 'react-i18next';

import SucessFullDefault from '../../Components/SucessFullDefault/SucessFullDefault';
import { CheckBox, Icon } from "react-native-elements";
import Remaining_steps, {routeName as Remaining_steps_route} from '../SignUp/Remaining_steps';

const {width, height} = Dimensions.get('screen');

export const routeName = 'Accountcreated';

const Accountcreated = ({navigation}) => {
  const {t} = useTranslation();
  const [loader, setLoader] = useState(false);
  var [data2, setdata2] = useState([
    {
      id: "1",
      skill: "Makeup",
      check: false,
      startTime: "working_time_sun_start",
      endTime: "working_time_sun_end",
    },
    {
      id: "2",
      skill: "Cutting",
      check: false,
      startTime: "working_time_mon_start",
      endTime: "working_time_mon_end",
    },
    {
      id: "3",
      skill: "Hair dresser",
      check: false,
      startTime: "working_time_tue_start",
      endTime: "working_time_tue_end",
    },
    {
      id: "4",
      skill: "Groom specialist",
      check: false,
      startTime: "working_time_wed_start",
      endTime: "working_time_wed_end",
    },
    {
      id: "5",
      skill: "Bride specialist",
      check: false,
      startTime: "working_time_thu_start",
      endTime: "working_time_thu_end",
    },

  ]);
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <BackHeader
            BackonPress={() => navigation.navigate('SignUp')}
            RightItemLabel={t('SKIP')}
            onPress={() => navigation.navigate('Tab')}
          />
          <SucessFullDefault style ={{marginTop:hp(1)}}   Title={t('ACCOUNT_CREATED')}  Subtitle={t('PLEASE_COMPLETE_PROFILE')}  />

          <View style={styles.subcontainer}>
            <FontText
              name={'poppins-semibold'}
              size={normalize(18)}
              pTop={hp(2)}
              pBottom={hp(2)}
              pLeft={wp(5)}
              color={'textcolor'}>
              {t('Choose_skill')}
            </FontText>
            {data2.map(( item, index ) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin:3
                    // justifyContent: "space-between",
                  }}
                >
                  <CheckBox
                    checked={item.check}
                    onPress={() => {
                      const val = data2[index];
                      val.check = !val.check;
                      // alert(val.check)
                      data2[index] = val;
                      // setTimeout(() => {
                      setdata2(data2);
                      setTimeout(() => {
                        setLoader(!loader);
                      }, 10);
                      // }, 200);
                    }}
                    checkedColor={colors.primary}
                    uncheckedColor={colors.primary}
                    size={25}
                  />
                  <FontText
                    name={'poppins-Regular'}
                    size={normalize(15)}
                    pLeft={wp(3)}
                    color={'textcolor'}>
                    {item.skill}
                  </FontText>
                 

                </View>
              ))}
              
            {/* <ProgressBar
              progress={0.15}
              color={colors.primary}
              style={styles.progress}
            /> */}
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(Remaining_steps_route)}
            style={styles.touchableOpacityStyle}>
            <SvgIcons.Arrow2 />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: '#fff'},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(5),
  },
  subcontainer: {
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderRadius: 14,
    width: width * 0.89,
    alignSelf: 'center',
    paddingBottom: 0,
    marginTop: hp(1),
  },
  progress: {
    marginHorizontal: wp(5),
    marginTop: wp(4),
    height: hp(1),
    borderRadius: 14,
  },
  itemview: {
    flexDirection: 'row',
    marginHorizontal: wp(6),
    marginTop: hp(1),
  },
  touchableOpacityStyle: {
    width: width * 0.13,
    height: width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
});
export default Accountcreated;

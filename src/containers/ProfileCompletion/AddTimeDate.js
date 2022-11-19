import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import { ProgressBar } from 'react-native-paper';
import FontText from '../../Components/FontText';
import { hp, normalize, wp } from '../../styles/responsiveScreen';
import Title_And_ViewAll_ForHomeComponent from '../../Components/Title_And_ViewAll_ForHomeComponent';
import colors from '../../assets/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import AddSocial, { routeName as AddSocialRouteName } from './AddSocial';
import { useTranslation } from 'react-i18next';
import TitleSubTitle from '../../Components/TitleSubTitle';
import AddDayTime,{routeName as AddDayTimeRouteName} from '../AddDayTime';
import BigButton from '../../Components/BigButton';
import { dayData, ddServiceData } from '../../helper/data';

const { width, height } = Dimensions.get('screen');

export const routeName = 'AddTimeDate';

const AddTimeDate = props => {
  const { t } = useTranslation();

  const [ShowTime, setShowTime] = useState(false);
  const [Selected, setSelected] = useState(0);

  const [DropDown_Open, setDropDown_Open] = useState(false);
  const [DropDown_Value, setDropDown_Value] = useState('');
  const [DropDown_Item, setDropDown_Item] = useState(ddServiceData);

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
        title={t('COMPLETE_PROFILE')}
        BackonPress={() => props.navigation.goBack()}
        rightText={'2/3'}
        style ={{marginHorizontal:wp(2)}}
      />

      <ProgressBar
        progress={0.6}
        color={'#397DFF'}
        style={styles.ProgressBar}
      />

        <TitleSubTitle style ={{marginHorizontal:wp(5)}} Title={t('ADD_SHOP_TIME')} SubTitle={t('ENTER_OPENING')} />

        <View style={styles.component}>
          <Title_And_ViewAll_ForHomeComponent
            Title={t('SHOP_TIME')}
            Text={t('ADD_DAY')}
            TextPress={() => props.navigation.navigate(AddDayTimeRouteName,{bool:1})}
          />

          {!ShowTime ? (
            <TouchableOpacity
              onPress={() => setShowTime(true)}
              style={styles.show}
            />
          ) : (
            <View style={styles.timeView}>
              {dayData.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelected(index)}
                  style={styles.DayView}>
                  <FontText
                    style={{ color: Selected == index ? '#000000' : '#00000070' }}
                    name="poppins-medium"
                    size={normalize(14)}>
                    {item.Day}
                  </FontText>
                  <FontText
                    style={{ color: Selected == index ? '#000000' : '#00000070' }}
                    name="poppins-medium"
                    size={normalize(14)}>
                    {item.Time}
                  </FontText>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View style={{ marginTop: width * 0.05 }}>
            <DropDownPicker
              placeholder={t('SELECT_SALON')}
              placeholderStyle={styles.placeholder}
              labelStyle={styles.label}
              style={styles.dd}
              dropDownContainerStyle={styles.ddContainer}
              open={DropDown_Open}
              value={DropDown_Value}
              items={DropDown_Item}
              setOpen={setDropDown_Open}
              setValue={setDropDown_Value}
              setItems={setDropDown_Item}
            />
          </View>
        </View>

        <BigButton title =  {t('CONTINUE')} onClick ={() => props.navigation.navigate(AddSocialRouteName) } style ={{marginBottom : hp(2) ,alignSelf:'center'}}  />
    </SafeAreaView>
  );
};

export default AddTimeDate;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  ProgressBar: {
    width: width * 0.90,
    alignSelf: 'center',
    height: width * 0.02,
    borderRadius: width * 0.02,
    marginVertical: width * 0.02,
  },
  component: { flex: 1, marginTop: width * 0.05 },
  show: {
    width: width * 0.9,
    alignSelf: 'center',
    height: width * 0.15,
    backgroundColor: '#F7F8FA',
    marginTop: width * 0.02,
    borderRadius: width * 0.025,
  },
  timeView: {
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: '#F7F8FA',
    marginTop: width * 0.02,
    borderRadius: width * 0.025,
    height: width * 0.65,
    paddingVertical: width * 0.025,
  },
  DayView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: width * 0.01,
    marginHorizontal: width * 0.05,
  },
  placeholder: {
    borderRadius: 10,
    color: '#00000040',
    fontSize: normalize(17),
    fontFamily: 'poppins-semibold',
  },
  label: { fontWeight: '600', fontSize: normalize(16) },
  dd: {
    width: width * 0.9,
    borderWidth: 0,
    backgroundColor: colors.viewcolor,
    alignSelf: 'center',
  },
  ddContainer: {
    width: width * 0.9,
    marginLeft: width * 0.03,
    borderWidth: 0,
    borderColor: '#00000050',
    backgroundColor: colors.viewcolor,
    alignSelf: 'center',
  },
  continue: {
    backgroundColor: '#397DFF',
    width: width * 0.9,
    height: width * 0.12,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: width * 0.03,
    justifyContent: 'center',
    marginVertical: width * 0.03,
  },
});

import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {hp, wp, normalize, isIOS, isX} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import SvgIcons from '../../assets/SvgIcons';
import CustomeTextInput from '../../Components/CustomeTextInput';
import BigButton from '../../Components/BigButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ManageBarberData} from '../../helper/data';
import ActiveBarbers from '../../Components/ActiveBarbers';
import {t} from 'i18next';
import EmptyDefault from '../../Components/EmptyDefault';
import NotificationHeader from '../../Components/common/NotificationHeader/NotificationHeader';

export const routeName = 'manageBarbers';

const ManageBarbers = ({navigation}) => {
  const nameRef = useRef();
  const refRBSheet = useRef();

  const [name, setName] = useState('');
  const [isEmpty, setIsEmpty] = useState(null);

  const SheetOpen = () => {
    refRBSheet.current.open();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
      <NotificationHeader style ={{width : '50%'}} pLeft ={wp(2)} Name = {t('MANAGE_BARBERS')} icon ={true}  navigation ={() => navigation.goBack()} />
        {isEmpty ? (
          <ActiveBarbers data={ManageBarberData} Click={() => {}} />
        ) : (
          <View style ={{flex:1,marginTop:hp(-3)}}>
            <EmptyDefault
              icon ={<SvgIcons.NoContact />} Title = {t('MANGAE_TAG')} Subtitle =  {t('LOREM')}
            />
            <View style={styles.btn}>
              <BigButton
                title={t('ADD_BARBERS')}
                onClick={() => refRBSheet.current.open()}
              />
            </View>

            <RBSheet
              ref={refRBSheet}
              closeOnPressMask={true}
              customStyles={styles.rbSheetView}>
              <View style={{marginVertical: hp(2)}}>
                <CustomeTextInput
                  lable={t('BARBER_NAME')}
                  ref={nameRef}
                  onSubmitEditing={() => {}}
                  value={name}
                  onChangeText={value => {
                    setName(value);
                  }}
                  returnKeyType="next"
                />
                <View style={styles.subbtn}>
                  <BigButton
                    title={t('ADD')}
                    onClick={() => {
                      refRBSheet.current.close();
                      setIsEmpty('1');
                    }}
                  />
                </View>
              </View>
            </RBSheet>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  line: {
    backgroundColor: colors['gray-light'],
    height: hp(0.3),
  },
  mainContainer: {flex: 1, backgroundColor: '#ffffff'},
  nav: {paddingVertical: hp(1.5), paddingTop: isX ? hp(0) : hp(1)},
  center: {alignItems: 'flex-start', justifyContent: 'flex-start'},
  subView: {
    alignItems: 'center',
    marginHorizontal: wp(4),
  },
  btn: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom:hp(2)
  },
  rbSheetView: {
    wrapper: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    container: {
      height: hp(30),
      borderTopColor: colors.primary,
      borderTopWidth: wp(1),
    },
  },
  subbtn: {alignItems: 'center', marginTop: hp(1.5)},
});

export default ManageBarbers;

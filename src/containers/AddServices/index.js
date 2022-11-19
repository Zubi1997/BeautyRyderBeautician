import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { normalize, hp, wp, isX, isAndroid } from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import FontText from '../../Components/FontText';
import BigButton from '../../Components/BigButton';
import SvgIcons from '../../assets/SvgIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import ServiceItemList from '../../Components/ServiceItemList';
import ImagePicker from 'react-native-image-crop-picker';
import ServiceDetail, {
  routeName as ServiceDetailRouteName,
} from '../Services/ServicesDetail';
import { t } from 'i18next';
import NotificationHeader from '../../Components/common/NotificationHeader/NotificationHeader';
import EmptyDefault from '../../Components/EmptyDefault';
import { serviceData } from '../../helper/data';

export const routeName = 'addServices';

const AddServices = ({ props, navigation }) => {
  const [open, setOpen] = useState(false);
  const [dropValue, setDropValue] = useState(null);
  const [items, setItems] = useState(serviceData);

  const initialList = [
    {
      id: 0,
      name: 'hello',
      time: '05:05 am',
      price: '10',
    },
    {
      id: 1,
      name: 'hii',
      time: '06:05 am',
      price: '20',
    },



  ];

  const change = (name, value1, index, item) => {
    const value = parseInt(value1 ? value1 : 0);

    if (name == 'name') {
      initialList[index].name = value;
    } else if (name == 'time') {
      initialList[index].time = value;
    } else {
      initialList[index].price = value;
    }

    initialList.push({
      initialList: initialList,
    });
    console.log('inital list ....',initialList)
  };

  const [value, setValue] = useState("");

  onWarpCancelPress = index => {
    Alert.alert(
      t('CONFIRM_DELETE'),
      t('DELETE_SERVICES'),
      [
        { text: t('YES'), onPress: () => onConfirmWarpDelete(index) },
        {
          text: t('CANCEL'),
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  };


  onConfirmWarpDelete = index => {
    initialList.splice(index, 1);
  };

  const [isImage, setIsImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const addImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setIsImage(image);
    });
  };

  const [serviceName, setServiceName] = useState('');
  const serviceNameRef = useRef();

  const renderItem = (item, index) => {
    return (
      <ServiceItemList
        data={item}
        onWarpCancelPress={index => onWarpCancelPress(index)}
        onChangeValue={change}
      />
    );
  };

  const [show, setshow] = useState(true)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {show ? <View style={styles.containerC}>

        <NotificationHeader Name={t('SERVICES')} icon={true} navigation={() => navigation.goBack()} />

        <View style={styles.mainView}>
          <EmptyDefault icon={<SvgIcons.ServicesArt />} Title={t('SERVICE_TAG')} Subtitle={t('LOREM')} />
          <View style={styles.btn1}>
            <BigButton
              title={t('ADD_SERVICES')}
              onClick={() => {
                setshow(!show);
              }}
            />
          </View>
        </View>
      </View> :
        <View style={styles.container}>
          <ScrollView>
            <NotificationHeader style={{ width: '45%' }} Name={t('ADD_SERVICES')} icon={false} navigation={() => navigation.pop()} />

            <View style={{ marginHorizontal: wp(4) }}>
              <View style={styles.profileimgview}>
                <View style={styles.shadow}>
                  {isImage ? (
                    <Image
                      source={{ uri: isImage.path }}
                      style={styles.profilepic}
                    />
                  ) : (
                    <Image
                      source={require('../../assets/img/Profile/p1.jpg')}
                      style={styles.profilepic}
                    />
                  )}
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      addImage();
                    }}
                    style={styles.camerabtn}>
                    <SvgIcons.Camera height={wp(7)} width={wp(7)} />
                  </TouchableOpacity>
                </View>
              </View>
              <FontText
                size={normalize(16)}
                name={'poppins-medium'}
                color="blackNatural"
                pBottom={hp(0.5)}
                textAlign="left">
                {t('SERVICE_TYPE')}
              </FontText>
              <DropDownPicker
                open={open}
                value={dropValue}
                items={items}
                placeholder={t('SELECT_SERVICE')}
                setOpen={setOpen}
                setValue={setDropValue}
                setItems={setItems}
                listMode="SCROLLVIEW"
                zIndex={1000}
                style={styles.dropdown}
                showTickIcon={false}
                dropDownContainerStyle={styles.dropdowncontainer}
                ArrowUpIconComponent={() => (
                  <SvgIcons.ArrowUp height={wp(6)} width={wp(6)} />
                )}
                ArrowDownIconComponent={() => (
                  <SvgIcons.ArrowDown height={wp(6)} width={wp(6)} />
                )}
              />

              <View style={styles.row}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-medium'}
                  color="blackNatural"
                  pBottom={hp(0.5)}
                  textAlign="left">
                  {t('SERVICE_NAME')}
                </FontText>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                  <FontText
                    size={normalize(16)}
                    name={'poppins-medium'}
                    color="primary"
                    pBottom={hp(0.5)}
                    textAlign="left">
                    {t('ADD_MORE')}
                  </FontText>
                </TouchableOpacity>
              </View>
              <View style={{ marginHorizontal: wp(-4) }}>

                <FlatList
                data={initialList}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item.id}
                contentContainerStyle={{paddingVertical: hp(2)}}
              />
              </View>
              <View style={styles.btn}>
                <BigButton
                  title={t('ADD_SERVICES')}
                  onClick={() => navigation.navigate(ServiceDetailRouteName)}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      }
    </SafeAreaView>
  );
};

export default AddServices;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerC: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: { flex: 1, backgroundColor: '#ffffff' },
  center: { alignItems: 'flex-start', justifyContent: 'flex-start' },
  mainView: { justifyContent: 'space-between', flex: 1 },
  subView: { alignItems: 'center', marginHorizontal: wp(4) },
  btn1: { alignItems: 'center', marginBottom: hp(4) },
  back: { paddingVertical: hp(1.5), paddingTop: isX ? hp(5) : hp(1) },
  center: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  profileimgview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.22,
    elevation: 6,
    backgroundColor: 'white',
    margin: wp(3),
    borderRadius: hp(1),
    paddingVertical: hp(1),
    paddingHorizontal: hp(1),
    borderRadius: hp(10),
  },
  camerabtn: {
    position: 'absolute',
    backgroundColor: colors.primary,
    bottom: 0,
    right: wp(5),
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
    borderRadius: wp(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilepic: {
    height: hp(18),
    width: hp(18),
    borderRadius: hp(9),
    borderColor: colors.white,
  },
  dropdowncontainer: {
    width: wp(92),
    alignSelf: 'center',
    fontFamily: 'poppins-regular',
    fontWeight: '600',
    fontSize: normalize(16),
    borderWidth: 0,
    borderTopWidth: wp(0.2),
    borderTopColor: colors['gray-lightest'],
    backgroundColor: colors['gray-light'],
  },
  dropdown: {
    width: wp(92),
    alignSelf: 'center',
    backgroundColor: colors['gray-light'],
    borderWidth: 0,
    height: hp(7.5),
    borderRadius: wp(4),
    fontFamily: 'poppins-regular',
    fontWeight: 'bold',
    fontSize: normalize(16),
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(1),
  },
  btn: { alignItems: 'center', marginBottom: hp(1) },
});

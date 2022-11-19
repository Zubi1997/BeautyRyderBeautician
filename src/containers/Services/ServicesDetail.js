//import liraries
import React, {Component, useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  UIManager,
  LayoutAnimation,
  Dimensions,
} from 'react-native';
import {
  hp,
  wp,
  normalize,
  isIOS,
  isX,
  isAndroid,
} from '../../styles/responsiveScreen';
import BackHeader from '../../Components/BackHeader';
import Material_Menu from '../../Components/common/Material_Menu/Material_Menu';
import colors from '../../assets/colors';
import FontText from '../../Components/common/FontText';
import SvgIcons from '../../assets/SvgIcons';
import BottomSheet from '../../Components/bottomSheet';

import {CONTENT} from '../../helper/data';
import fonts from '../../assets/fonts';
import AddServices, {routeName as AddServiceRouteName} from '../AddServices';
import BigButton from '../../Components/BigButton';
import {t} from 'i18next';

const {width, height} = Dimensions.get('screen');

export const routeName = 'ServiceDetail';

const ExpandableComponent = (
  {item, onClickFunction, navigation, onDeleteFunction},
  props,
) => {
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [SelectedButton, setSelectedButton] = useState(0);
  const [Open, setOpen] = useState(false);

  function MaterialMenu() {
    setOpen(!Open);

    return null;
  }

  const [checked, setChecked] = useState(item.val);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  const modalizeRef = useRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <View style={styles.container1}>
          <FontText
            name={'poppins-medium'}
            size={normalize(14)}
            color={'textcolor'}
            textAlign={'left'}>
            {item.category_name}
          </FontText>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginHorizontal: wp(5),
            }}
            onPress={() => onClickFunction(!item.isExpanded)}>
            {item.isExpanded ? (
              <SvgIcons.Vectors style={{marginTop: hp(0.8)}} />
            ) : (
              <SvgIcons.Down style={{marginTop: hp(0.8)}} />
            )}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={MaterialMenu}>
            <SvgIcons.More height={wp(6)} width={wp(6)} />
          </TouchableOpacity>
          <Material_Menu
         bank = {true}
         BlogIntenal={true}
         popText ={{marginTop:hp(0.2)}}
            position = {{height: height<767 ?80 :  100}}
            DeletePress={onDeleteFunction}
            EditPress={() => navigation.navigate(AddServiceRouteName)}

            visible={Open}
            click={() => MaterialMenu()}
          />
        </View>

        {item.isExpanded ? (
          <View style={styles.lineE} />
        ) : (
          <View style={styles.line0} />
        )}
        <View style={[styles.lineView, {height: layoutHeight}]}>
          {item.subcategory.map((item, key, index) => (
            <View key={key}>
              <View style={styles.itemView}>
                <View style={styles.subItemView}>
                  <FontText style={styles.text01}>{item.val}</FontText>

                  <FontText style={styles.text02}>{item.sub}</FontText>
                </View>

                <View style={styles.price}>
                  <FontText style={styles.text03}>{item.price}</FontText>
                </View>
              </View>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
};

// // create a component
const ServiceDetail = props => {
  const [listDataSource, setListDataSource] = useState(CONTENT);

  const {navigation} = props;

  const [multiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      );
    }
    setListDataSource(array);
  };
  const modalizeRef = useRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: wp(3)}}>
        <BackHeader
          title={t('SERVICES')}
          titleColor={'textcolor'}
          BackonPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.scrolltext}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 0, flex: 1}}>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              onDeleteFunction={onOpen}
              navigation={props.navigation}
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
          <View style={styles.btn}>
            <BigButton
              style={{alignSelf: 'center'}}
              title={t('ADD_SERVICES')}
              onClick={() => {}}
            />
          </View>
        </ScrollView>
        <BottomSheet
          refname={modalizeRef}
          icon={<SvgIcons.FillTrash height={hp(12)} width={hp(12)} />}
          title={
            <FontText
              style={styles.delete}
              name={'poppins-medium'}
              size={normalize(20)}
              textAlign={'center'}>
              {t('DELETE_SERVICES')}
            </FontText>
          }
          textrightbutton={t('DELETE')}
          style={styles.bottomSheetView}
          textleftbutton={t('CANCEL')}
          bottombutton={true}
          oncancelpress={onClose}></BottomSheet>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  progress: {
    marginHorizontal: wp(5),
    height: hp(1),
    borderRadius: 14,
  },
  mines: {
    marginTop: hp(1),
    marginRight: wp(0),
    marginLeft: wp(40),
  },
  min: {
    flexDirection: 'row',
  },
  menus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.lightViolet,
    borderLeftColor: colors.lightViolet,
    borderRightColor: colors.lightViolet,
    borderTopColor: colors.white,

    borderWidth: 0.5,
    marginHorizontal: hp(2.5),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  menu: {
    marginTop: hp(1),
    fontFamily: fonts['poppins-medium'],
    fontSize: normalize(14),
    fontWeight: '500',
    color: colors['violet'],
    marginLeft: wp(4),
  },
  timemenu: {
    marginTop: hp(4),
    marginLeft: wp(-16),
    color: colors.lightViolet,
  },
  count: {
    marginTop: hp(2),
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: colors.lightViolet,
    marginHorizontal: hp(2.5),
    justifyContent: 'space-between',
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(2.5),
    flexDirection: 'row',
  },
  count1: {
    marginTop: hp(2),
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderWidth: 0.5,
    borderColor: colors.lightViolet,
    marginHorizontal: hp(2.5),
    justifyContent: 'space-between',
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(2.5),
    flexDirection: 'row',
  },
  Radio: {
    width: '20%',
  },
  header: {
    padding: 15,
    borderColor: colors.lightViolet,
    marginTop: hp(2),
    borderWidth: 1,
  },
  dropdown1: {
    height: wp(3),
    width: wp(3),
    marginLeft: wp(0),
    marginTop: hp(0.8),
  },
  line0: {
    borderWidth: 0,
    borderColor: colors['lightgrey'],
    marginTop: hp(2),
    marginBottom: hp(-1.8),
    marginLeft: wp(-4.2),
    width: wp(91),
  },
  lineE: {
    borderWidth: 0.5,
    borderColor: '#8384A1',
    marginTop: hp(2),
    width: wp(85),
    alignSelf: 'center',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: hp(2),
  },
  text01: {
    fontFamily: fonts['poppins-medium'],
    fontSize: normalize(14),
    fontWeight: '500',
    color: colors['violet'],
  },
  text02: {
    fontFamily: fonts['poppins-medium'],
    fontSize: normalize(12),
    fontWeight: '500',
    marginRight: wp(0),
    opacity: 0.5,
    textAlign: 'left',
    color: colors['violet'],
    paddingTop: hp(0.5),
  },
  text03: {
    textAlign: 'right',
    fontFamily: fonts['poppins-medium'],
    fontSize: normalize(14),
    fontWeight: '500',
    color: colors['violet'],
    marginRight: width * 0.02,
    paddingBottom: hp(2),
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  lineView: {
    overflow: 'hidden',
  },
  subItemView: {
    width: '50%',
    paddingHorizontal: wp(4),
  },
  price: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: wp(4),
  },
  scrolltext: {flex: 1, paddingTop: width * 0.02},
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: height * 0.02,
    marginTop: hp(4),
  },
  delete: {fontWeight: '600', alignSelf: 'center'},
  bottomSheetView: {
    backgroundColor: '#FF726D',
    borderRadius: 10,
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
});

//make this component available to the app
export default ServiceDetail;

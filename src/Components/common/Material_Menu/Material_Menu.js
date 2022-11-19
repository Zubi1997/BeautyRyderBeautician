import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  I18nManager,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import colors from '../../../assets/colors';
import SvgIcons from '../../../assets/SvgIcons';
import { hp, isIOS, isX, normalize, wp } from '../../../styles/responsiveScreen';

const {height,width} = Dimensions.get('screen');

const Material_Menu = props => {
  const { t } = useTranslation();
  const [Selected, setSelected] = useState(0);
  // console.log('props: ', props);

  const hideMenu = () => props.click();

  const showMenu = () => props.click();

  const onEdit =() => {
    props.click();
    props.EditPress();

  }

  const onDelete =() => {
    props.click();
    props.DeletePress();

  }





  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Menu
        style={[styles.MenuMainView, props.position]}
        visible={props.visible}
        onRequestClose={hideMenu}>
        {props.BlogIntenal || props.Service ? (
          <View>
            <MenuItem
              textStyle={styles.MenuItemStyle}
              onPressIn={() => setSelected(0)}
              onPress={hideMenu}>

              <View style={[styles.popUpView,props.popUp]}>

                {props.bank ?
                <TouchableOpacity activeOpacity={0.7} style ={styles.menu} onPress ={onEdit}>
                  <SvgIcons.Edit />
                  <Text style={[styles.popUpText,props.popText]}>{t('EDIT')}</Text>
                </TouchableOpacity>
   : null  }
                <TouchableOpacity activeOpacity={0.7} style ={styles.menu} onPress ={onDelete}>


                  <SvgIcons.Trash />
                  <Text style={[styles.popUpText,props.popText]}>{t('DELETE')}</Text>

                  </TouchableOpacity>

              </View>
            </MenuItem>
          </View>
        ) : (
          <View>
            <MenuItem
              textStyle={styles.MenuItemStyle}
              onPressIn={() => setSelected(0)}
              onPress={hideMenu}>
              <View style={styles.DotMainView}>
                <View style={styles.DotContainer}>
                  <View
                    style={[
                      styles.Dot,
                      {
                        backgroundColor:
                          Selected == 0 ? colors.primary : 'transparent',
                      },
                    ]}
                  />
                </View>
                <Text style={styles.Text}>
                  {props.BlogScreen ? t('POPULAR') : t('ALL')}
                </Text>
              </View>
            </MenuItem>
            <MenuItem
              textStyle={styles.MenuItemStyle}
              onPressIn={() => setSelected(1)}
              onPress={hideMenu}>
              <View style={styles.DotMainView}>
                <View style={styles.DotContainer}>
                  <View
                    style={[
                      styles.Dot,
                      {
                        backgroundColor:
                          Selected == 1 ? colors.primary : 'transparent',
                      },
                    ]}
                  />
                </View>

                <Text style={styles.Text}>
                  {props.BlogScreen ? t('LATEST') : t('COMPLETED')}
                </Text>
              </View>
            </MenuItem>
            <MenuItem
              textStyle={styles.MenuItemStyle}
              onPressIn={() => setSelected(2)}
              onPress={hideMenu}>
              <View style={styles.DotMainView}>
                <View style={styles.DotContainer}>
                  <View
                    style={[
                      styles.Dot,
                      {
                        backgroundColor:
                          Selected == 2 ? colors.primary : 'transparent',
                      },
                    ]}
                  />
                </View>
                <Text style={styles.Text}>
                  {props.BlogScreen ? t('FAVORITES') : t('DISPUTE')}
                </Text>
              </View>
            </MenuItem>
          </View>
        )}
      </Menu>
    </TouchableWithoutFeedback>
  );
};

export default Material_Menu;

const styles = StyleSheet.create({
  MenuMainView: {
    width: '35%',
    height: 150,

    // top: isIOS ? hp(0) : hp(72),
    shadowOffset: {
      width: 10,
      height: 14,
    },
    shadowColor: 'rgba(14, 32, 97, 1)',
    shadowOpacity: 0.3,
    shadowRadius: 50,
    borderRadius: 10,
    elevation: 50,

  },
  Text: {
    fontSize: normalize(16),
    width: '100%',
    marginLeft: 10,
    marginTop:height <767  ? hp(-0.8) :hp(-0.3),
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  DotContainer: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 50,
    alignItems: 'center',

    // marginLeft: I18nManager.isRTL ? -10 : 0,
    justifyContent: 'center',
  },
  Dot: {
    width: '60%',
    height: '60%',
    borderRadius: 50,
    // marginLeft:10
  },
  MenuItemStyle: {
    width: Platform.OS == 'ios' ? '90%' : '100%',
    height: '90%',
    alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
    marginTop: hp(3),
    marginLeft: I18nManager.isRTL ? null : Platform.OS == 'ios' ? 0 : -20,
    marginRight: I18nManager.isRTL ? (Platform.OS == 'ios' ? 0 : -20) : null,
  },
  DotMainView: {
    flexDirection: 'row',
    width: wp(25),
    // marginRight: 20,
  },
  popUpView: {
    flex:1,
    // flexDirection: 'column',
    // width: wp(20),
  },
  menu:{flexDirection:'row',padding:hp(1),width:'100%'},
  popUpText:{
    fontSize: normalize(16),
    width: '100%',
    // flex:1,
    marginLeft: 10,
    marginRight:20,
    // backgroundColor:'red',
    marginTop:height <767  ? hp(-0.5) :hp(-0.1),
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  }
});

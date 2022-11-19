//import liraries
import React, {Component, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import colors from '../../assets/colors';
import SvgIcons from '../../assets/SvgIcons';
import {hp, wp, normalize} from '../../styles/responsiveScreen';
import SelectDropdown from 'react-native-select-dropdown';
import Button from '../common/Button';
import FontText from '../common/FontText';
import TitleSubTitle from '../TitleSubTitle';
import Input from '../common/Input';
import SmartScrollView from '../common/SmartScrollView';

const {width, height} = Dimensions.get('screen');

// create a component
const BottomSheet = props => {
  const Reson = ['Why you cancel?', 'what your problem?'];
  const {
    refname,
    title,
    RightItemIcon,
    bottombutton,
    icon,
    subTitle,
    dropDown,
    textInput,
    textrightbutton,
    textleftbutton,
    oncancelpress,
    onRightPress,
    subTitlec,
    style,
    textalign,
    pTop,
    Textstyle,
  } = props;

  function customRenderer() {
    return (
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <View style={{flex: 0.04, backgroundColor: colors.primary}}></View>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          {RightItemIcon != null && (
            <TouchableOpacity onPress={oncancelpress}>
              <SvgIcons.Cross
                height={hp(5)}
                width={hp(5)}
                marginHorizontal={wp(85)}
                marginTop={hp(2)}
              />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flex: 1,
            marginTop: hp(1),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {icon}
          <TitleSubTitle
            Title={title}
            pTop={hp(1)}
            Textstyle={{fontWeight: '100'}}
            textalign={'center'}
          />
          <TitleSubTitle
            SubTitle={subTitle}
            pTop={hp(0)}
            Textstyle={{fontWeight: '100', marginTop: hp(10)}}
            textalign={'center'}
          />
          <FontText
            textAlign={'center'}
            pTop={pTop}
            style={{...styles.subtext, Textstyle}}
            size={normalize(14)}
            name={'poppins-medium'}
            color={'lightViolet'}>
            {subTitlec}
          </FontText>
        </View>

        {dropDown == true ? (
          <View style={{height: '30%', marginTop: height * -0.23}}>
            <SelectDropdown
              buttonStyle={styles.button}
              buttonTextStyle={styles.buttontext}
              dropdownStyle={styles.dropdown}
              rowTextStyle={styles.rowtext}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require('../../assets/img/Appoiment/down.png')}
                    style={styles.down}
                  />
                );
              }}
              data={Reson}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Select Reason Here'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
        ) : null}

        {textInput == true ? (
          /* <View style={styles.ti}>
            <Input
              placeholder={'Note/Message'}
              multiLine={true}
              textAlign={'left'}
              style={styles.textInput}></Input>
          </View> */
          <View style={styles.ti}>
            {/* <KeyboardAvoidingView
              keyboardVerticalOffset={
                Platform.OS == 'ios' ? height * 0.5 : null
              }
              behavior={Platform.OS == 'ios' && 'position'} */}
            {/* style={styles.ti}> */}
            <TextInput
              onSubmitEditing={Keyboard.dismiss}
              multiline={true}
              style={styles.textInput}
              placeholder={'Note/Message'}
            />
            {/* </KeyboardAvoidingView> */}
          </View>
        ) : null}

        {bottombutton == true ? (
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: wp(3),
              marginBottom: height * 0.05,
            }}>
            {textleftbutton != null && (
              <Button
                height={hp(7)}
                width={wp(50)}
                onPress={oncancelpress}
                style={{
                  // backgroundColor: colors.button,
                  borderRadius: 20,
                  marginHorizontal: wp(4),
                  marginTop: hp(2),
                }}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-medium'}
                  color={'lightViolet'}>
                  {textleftbutton}
                </FontText>
              </Button>
            )}
            {textrightbutton != null && (
              <Button
                height={hp(7)}
                width={wp(50)}
                style={props.style}
                onPress={onRightPress}>
                <FontText
                  size={normalize(16)}
                  name={'poppins-medium'}
                  color={'white'}>
                  {textrightbutton}
                </FontText>
              </Button>
            )}
          </View>
        ) : null}
      </View>
    );
  }

  return (
    <Modalize
      withHandle={false}
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        scrollEnabled: false,
      }}
      ref={refname}
      modalHeight={width * 0.8}
      customRenderer={customRenderer}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subtext: {
    // marginHorizontal: wp(-5),
    fontWeight: '400',
    marginTop: hp(-8),
    marginLeft: wp(4),
    marginRight: wp(4),
    // marginHorizontal: wp(5),
  },
  button: {
    width: wp(85),
    alignSelf: 'center',
    marginTop: hp(5),
    borderRadius: wp(3),
    // flexDirection: 'row',
    backgroundColor: '#F7F8FA',
  },
  buttontext: {
    textAlign: 'left',
    opacity: 0.5,
    color: '#8384A1',

    // backgroundColor: 'red',
  },
  dropdown: {
    backgroundColor: '#F7F8FA',
    opacity: 1,
    marginTop: hp(1),
  },
  rowtext: {color: '#000000', textAlign: 'left'},
  down: {width: wp(8), height: wp(8)},
  ti: {
    width: wp(85),
    height: hp(20),
    // borderWidth: 0.5,
    // borderColor: '#00000080',
    marginTop: height * -0.06,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#F7F8FA',

    // flex: 0.9,
  },
  textInput: {
    marginLeft: wp(5),
    fontSize: normalize(16),
    fontWeight: '400',
    fontFamily: 'poppins-regular',
    // marginTop: Platform.OS == 'ios' ? 10 : 0,
    textAlign: 'left',
  },
});

//make this component available to the app
export default BottomSheet;

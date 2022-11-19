import { t } from 'i18next';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const TextInputWithLogo = props => {
  return (
    <View style={[styles.Box, props.ContainerStyle]}>
      {props.BackPress ? (
        <TouchableOpacity
          style={{
            height: '80%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={props.BackPress}>
          <Image
            source={require('../../../assets/images/BackBtn.png')}
            resizeMode="contain"
            style={{
              width: width * 0.05,
              height: width * 0.05,
              marginLeft: 10,
              tintColor: '#00000070',
            }}
          />
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        onPress={props.FullPress}
        style={{
          flex: 1,
        }}>
        <TextInput
          placeholder={t('SEARCH_LOCATION')}
          style={{
            height: width * 0.1,
            paddingLeft: 10,
            color: '#000',
          }}
          onFocus={props.onFocus}
        />
      </TouchableOpacity>

      {props.logo ? (
        <TouchableOpacity onPress={props.navigation}>
          <Image
            source={require('../../../assets/images/Search.png')}
            style={{
              width: 25,
              height: 25,
              tintColor: '#15093E90',
              marginRight: props.filter ? 0 : 15,
            }}
          />
        </TouchableOpacity>
      ) : null}

      {props.filter ? (
        <TouchableOpacity onPress={props.filterPressed}>
          <Image
            source={require('../../../assets/images/FilterIcon.png')}
            style={{
              width: 25,
              height: 25,
              marginHorizontal: 15,
            }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default TextInputWithLogo;

const styles = StyleSheet.create({
  Box: {
    height: width * 0.12,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
  },
});

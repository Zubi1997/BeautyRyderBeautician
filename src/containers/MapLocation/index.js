import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { hp, wp, normalize, isX, isAndroid } from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import SvgIcons from '../../assets/SvgIcons';
import BigButton from '../../Components/BigButton';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import appConstant from '../../helper/appConstant';

export const routeName = 'mapLocation';

const MapLocation = ({ navigation }) => {
  const searchRef = useRef();
  const mapRef = useRef(null);

  const [search, setSearch] = useState('');

  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const goToTokyo = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(tokyoRegion, 3 * 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.pop();
          }}
          style={{ width: '10%' }}>
          <SvgIcons.BackBlack height={wp(8)} width={wp(8)} />
        </TouchableOpacity>
        <TextInput
          ref={searchRef}
          style={styles.txtinput}
          onSubmitEditing={() => { }}
          value={search}
          onChangeText={value => {
            setSearch(value);
          }}
          returnKeyType={'done'}
          textAlign="left"
        />
        <View style={styles.serachView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setSearch('');
            }}>
            <SvgIcons.MapClose height={wp(8)} width={wp(8)} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => { }}>
            <SvgIcons.MapSetting height={wp(8)} width={wp(8)} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mapview}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          ref={mapRef}
          initialRegion={tokyoRegion}
          onRegionChangeComplete={region => setRegion(region)}>
          <Marker coordinate={tokyoRegion} />
        </MapView>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => goToTokyo()}
          style={styles.locationbtn}>
          <SvgIcons.MapLocation height={wp(7)} width={wp(7)} />
        </TouchableOpacity>
        <View style={styles.btn}>
          <BigButton
            title={appConstant.ConfirmLocation}
            onClick={() => navigation.pop()}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isX ? hp(5) : hp(1),
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: colors['gray-light'],
    width: wp(92),
    borderRadius: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: wp(2),
  },
  txtinput: {
    width: '65%',
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    fontSize: normalize(16),
    height: hp(7.5),
    paddingHorizontal: wp(4),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapview: {
    width: wp(100),
    height: hp(90),
    alignSelf: 'center',
    marginTop: hp(1.5),
  },
  btn: {
    width: wp(100),
    alignItems: 'center',
    position: 'absolute',
    bottom: isAndroid ? hp(6) : hp(7),
  },
  locationbtn: {
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
    paddingVertical: wp(4),
    borderRadius: wp(10),
    position: 'absolute',
    right: wp(4),
    bottom: hp(17),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.22,
    elevation: 6,
  },
  serachView: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
  },
});

export default MapLocation;

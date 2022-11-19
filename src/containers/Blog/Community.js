import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import SvgIcons from '../../assets/SvgIcons';
import Material_Menu from '../../Components/common/Material_Menu/Material_Menu';
import FontText from '../../Components/FontText';
import { blogData } from '../../helper/data';
import {hp, normalize, wp} from '../../styles/responsiveScreen';
import BlogItem from './BlogItem';
import BlogList from './BlogList';

const {width, height} = Dimensions.get('screen');

export const routeName = 'Community';

const Community = props => {
  const {t} = useTranslation();

  const [isGrid, isGridSelected] = useState(true);
  const [islist, issetlist] = useState(false);
  const [visible, setVisible] = useState(false);

  const onselectitem = () => {
    isGridSelected(false);
    issetlist(true);
  };

  const onselectlist = () => {
    isGridSelected(true);
    issetlist(false);
  };

  function MaterialMenu() {
    setVisible(!visible);

    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subC}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <View style={styles.filtericon}>
            <Image
              source={require('../../assets/images/filter-edit.png')}
              style={styles.iconview}
            />
            <FontText
              style={styles.timedetail}
              size={normalize(14)}
              name="Poppins-Regular"
              color="lightViolet">
              {t('FILTERS')}
            </FontText>
          </View>

          <Material_Menu
            position={{
              position: 'absolute',
              top: height * 0.28,
            }}
            visible={visible}
            ServiceDetails={true}
            click={() => MaterialMenu()}
            DotColor={'#397DFF'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onselectitem}>
          {islist ? (
            <SvgIcons.Themeorange height={hp(2.5)} width={hp(2.5)} />
          ) : (
            <SvgIcons.Theme height={hp(2.5)} width={hp(2.5)} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.Grid} onPress={onselectlist}>
          {isGrid ? (
            <SvgIcons.Category height={hp(3)} width={hp(3)} />
          ) : (
            <SvgIcons.Categoryblank height={hp(2.5)} width={hp(2.5)} />
          )}
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        {isGrid ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={blogData}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <BlogItem navigation={props.navigation} item={item} />;
            }}
            scrollEnabled={true}
            keyExtractor={(value, index) => index.toString()}
          />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={blogData}
            style={{marginTop: hp(1)}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(value, index) => index.toString()}
            scrollEnabled={true}
            renderItem={({item}) => {
              return <BlogList navigation={props.navigation} item={item} />;
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Community;

const styles = StyleSheet.create({
  filtericon: {
    flexDirection: 'row',
    marginVertical: hp(0.5),
    justifyContent: 'center',
    marginHorizontal: width * 0.02,
  },
  iconview: {
    width: hp(2.5),
    height: hp(2.5),
  },
  timedetail: {
    fontWeight: '500',
    marginLeft: wp(1),
  },
  container: {flex: 1, backgroundColor: '#fff'},
  subC: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginVertical: width * 0.0105,
    alignItems: 'center',
  },
  Grid: {marginRight: width * 0.05, marginLeft: width * 0.02},
});

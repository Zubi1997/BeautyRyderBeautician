import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgIcons from '../../assets/SvgIcons';
import { blogData } from '../../helper/data';
import {hp, normalize, wp} from '../../styles/responsiveScreen';
import BlogItem from './BlogItem';
import BlogList from './BlogList';

const {width, height} = Dimensions.get('screen');

export const routeName = 'My Blog';


const MyBlog = props => {
  const [isGrid, isGridSelected] = useState(true);
  const [islist, issetlist] = useState(false);

  const onselectitem = () => {
    isGridSelected(false);
    issetlist(true);
  };

  const onselectlist = () => {
    isGridSelected(true);
    issetlist(false);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View
        style={styles.mainContainer}>
        <TouchableOpacity onPress={onselectitem}>
          {islist ? (
            <SvgIcons.Themeorange height={hp(2.5)} width={hp(2.5)} />
          ) : (
            <SvgIcons.Theme height={hp(2.5)} width={hp(2.5)} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryView}
          onPress={onselectlist}>
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

export default MyBlog;

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
  categoryView:{marginRight: width * 0.05, marginLeft: width * 0.02},
  mainContainer:{
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginVertical: width * 0.0105,
    alignItems: 'center',
  },
  safe:{flex: 1, backgroundColor: '#fff'},
});

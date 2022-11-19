import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import BlogCustomeCard from './BlogCustomeCard';
import { hp, wp, normalize } from '../../styles/responsiveScreen';
import SvgIcons from '../../assets/SvgIcons';
import FontText from '../../Components/common/FontText';
import { SliderBox } from 'react-native-image-slider-box';
import BlogInternalCommet, {
  routeName as BlogInternalCommetRouteName,
} from './BlogInternalCommet';
import Material_Menu from '../../Components/common/Material_Menu/Material_Menu';
import { useTranslation } from 'react-i18next';
import CreateEditBlog, {
  routeName as CreateEditBlogRouteName,
} from './CreateEditBlog';
import BackHeader from '../../Components/BackHeader';
import { blogData } from '../../helper/data';

const { width, height } = Dimensions.get('screen');

export const routeName = 'BlogInternal';

// create a component
const BlogInternal = props => {
  const { t } = useTranslation();

  const { navigation } = props;
  const [visible, setVisible] = useState(false);
  const { item } = props.route.params;
  function MaterialMenu() {
    setVisible(!visible);

    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topMainView}>
        <View style={styles.mainView}>
          <BackHeader BackonPress={() => navigation.goBack()} />
          <SvgIcons.Javed
            height={hp(5)}
            width={hp(5)}
            style={{ marginLeft: wp(2) }}
          />
          <View style={styles.txtView}>
            <FontText
              style={styles.javed}
              size={normalize(12)}
              name={'poppins-medium'}
              color="blackColor">
              {item.name}
            </FontText>
            <FontText
              style={styles.javed}
              size={normalize(10)}
              name={'poppins-regular'}
              color="lightViolet">
              {item.date}
            </FontText>
          </View>
        </View>
        <TouchableOpacity onPress={() => MaterialMenu()}>
          <SvgIcons.More height={hp(3.5)} width={hp(3.5)} />
          <Material_Menu
            editPress={() =>
              props.navigation.navigate(CreateEditBlogRouteName, {
                Screen: 'Edit',
              })
            }
            bank={true}
            BlogIntenal={true}
            EditPress={() => props.navigation.navigate(CreateEditBlogRouteName, {
              Screen: 'Edit',
            })}
            popText={{ paddingTop: height < 767 ? hp(0.6) : hp(0) }}
            DeletePress={() => { }}
            position={styles.material_menu}
            visible={visible}
            click={() => MaterialMenu()}
          />
        </TouchableOpacity>
      </View>


        <FlatList
          style={{ marginTop: hp(2) }}
          showsVerticalScrollIndicator={false}
          data={blogData}
          ListHeaderComponent={() => {return(
            <View>
            <View style={{ ...styles.card }}>
            <View style={styles.imag}>
              <SliderBox
                ImageComponentStyle={{ height: '100%' }}
                images={item.image}
                dotColor="white"
                inactiveDotColor="rgba(0, 0, 0, 0)"
                resizeMode="cover"
                dotStyle={styles.dotView}
              />
            </View>
          </View>

          <View style={styles.tagView}>
            <FontText
              style={styles.hair}
              size={normalize(20)}
              name={'poppins-medium'}
              color="blackColor">
              {item.nameshop}
            </FontText>
            <FontText
              style={styles.javed}
              size={normalize(14)}
              name={'poppins-medium'}
              color="lightViolet">
              {t('BEST_TAG')}
            </FontText>
          </View>
          </View>
          )}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(Value, index) => index.toString()}
          renderItem={({ item }) => {
            return <BlogCustomeCard {...item}></BlogCustomeCard>
          }}
        />

      <View style={styles.pops}>
        <TouchableOpacity style={styles.iconView}>
          <SvgIcons.RedHeart height={hp(4)} width={hp(5)} />
          <FontText
            style={styles.txt}
            size={normalize(16)}
            name={'poppins-medium'}
            color="blackColor">
            110
          </FontText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(BlogInternalCommetRouteName,{data:item})}>
          <View style={styles.iconView}>
            <SvgIcons.Chat height={hp(4)} width={hp(5)} />
            <FontText
              style={styles.txt}
              size={normalize(16)}
              name={'poppins-medium'}
              color="blackColor">
              05
            </FontText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconView}>
          <SvgIcons.Share height={hp(5)} width={hp(5)} />
          <FontText
            style={styles.txt}
            size={normalize(16)}
            name={'poppins-medium'}
            color="blackColor">
            {t('SHARE')}
          </FontText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pops: {
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowColor: 'rgba(0,0,0,0.4)',
    elevation: 6,
    backgroundColor: '#fff',
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.06,
    alignSelf: 'center',
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topMainView: {
    flexDirection: 'row',
    marginHorizontal: wp(4),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: wp(2.5),
  },
  javed: {
    marginHorizontal: wp(2),
  },
  txtView: { marginLeft: width * 0.02 },
  imag: {
    height: wp(60),
    width: wp(100),
    overflow: 'hidden',
  },
  iconView: {
    marginVertical: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  hair: { marginBottom: width * 0.05, textAlign: 'left' },
  tagView: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: width * 0.05,
  },
  dotView: {
    width: 11,
    height: 11,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
  },

  txt: { marginHorizontal: wp(1) },
  material_menu: {
    position: 'absolute',
    top: height >= 768 ? height * 0.12 : height * 0.07,
    height: width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.22,
    elevation: 6,
    width: wp(100),
    marginVertical: hp(1),
  },
});

//make this component available to the app
export default BlogInternal;

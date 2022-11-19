//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import Commentrender from './Commentrender';
import {hp, wp, normalize} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import {useTranslation} from 'react-i18next';
import { blogData } from '../../helper/data';

const {width, height} = Dimensions.get('screen');

export const routeName = 'BlogInternalCommet';


// create a component
const BlogInternalCommet = props => {
  const {t} = useTranslation();
const {data} = props.route.params;
  const [searchvalue, setSearchValue] = useState();
  const {item, onPress, navigation} = props;

  return (
    <SafeAreaView style={styles.maincontainer}>
      <BackHeader
        title={`${t('COMMENTS')} (5)`}
        titleColor="textcolor"
        BackonPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <FlatList
          style={{marginTop: hp(2)}}
          showsVerticalScrollIndicator={false}
          data={blogData}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <Commentrender item={item}></Commentrender>;
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {color: colors.white},
  box: {
    marginTop: hp(3.5),
    height: hp(12),
    width: wp(84.5),
    backgroundColor: colors.viewcolor,
    marginHorizontal: wp(6),
    borderRadius: 15,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingHorizontal: wp(6),
  },
});

//make this component available to the app
export default BlogInternalCommet;

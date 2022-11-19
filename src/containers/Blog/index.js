import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ProfileHeader from '../../Components/Home/ProfileHeader';
import TextInputWithLogo from '../../Components/common/TextInputWithLogo/TextInputWithLogo';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyBlog, { routeName as MyBlogRouteName } from './MyBlog';
import Community, { routeName as CommunityRouteName } from './Community';
import { normalize } from '../../styles/responsiveScreen';
import LinearGradient from 'react-native-linear-gradient';
import FontText from '../../Components/FontText';
import { routeName as CreatEditBlogRouteName } from './CreateEditBlog';
import { useTranslation } from 'react-i18next';
import Home_Notification,{routeName as Home_NotificationRouteName}from '../Notification/Home_Notification';

const { width, height } = Dimensions.get('screen');
const Tab = createMaterialTopTabNavigator();

export const routeName = 'Blog';

const Blog = props => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ProfileHeader
        Name={'Mane Beautilocks'}
        Blog={true}
        style={styles.header}
        navigation={() => props.navigation.navigate(Home_NotificationRouteName)}
      />

      <TextInputWithLogo
        PlaceHolder={t('SEARCH_BLOG')}
        ContainerStyle={styles.input}
        logo={true}
      />

      <View style={styles.tab}>
        <Tab.Navigator
          screenOptions={{
            tabBarInactiveTintColor: '#15093E90',
            tabBarActiveTintColor: '#397DFF',
            tabBarLabelStyle: {
              fontSize: normalize(15),
              fontFamily: 'poppins-medium',
              textTransform: 'capitalize',
            },
            tabBarIndicatorStyle: {
              borderBottomWidth: 3,
              borderBottomColor: '#397DFF',
            },
            tabBarStyle: {
              borderBottomWidth: 1,
              borderBottomColor: '#8384A1',
            },
          }}>
          <Tab.Screen name={t('BLOG ')} component={MyBlog} />
          <Tab.Screen name={t('COMMUNITY')} component={Community} />
        </Tab.Navigator>
      </View>

      {/* Floting Plus icon */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#1565FF', '#33C1FF']}
        style={styles.linear}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate(CreatEditBlogRouteName, {
              Screen: 'Create',
            })
          }
          style={styles.createView}>
          <FontText
            name="poppins-regular"
            size={normalize(38)}
            pTop={width * 0.025}
            style={{ color: '#fff' }}>
            +
          </FontText>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: { width: width * 0.9, alignSelf: 'center', marginVertical: 8 },
  input: {
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: '#F7F8FA',
    height: width * 0.13,
    borderRadius: width * 0.03,
  },
  tab: { flex: 1, marginTop: width * 0.01 },
  linear: {
    borderRadius: 100,
    position: 'absolute',
    bottom: width * 0.05,
    right: width * 0.05,
    backgroundColor: '#ff0',
  },
  createView: {
    width: width * 0.17,
    height: width * 0.17,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

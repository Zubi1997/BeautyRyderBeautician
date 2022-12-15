import { View,Text,StyleSheet, ScrollView,Dimensions, Image, FlatList, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Graph_tab_grey_icon, Graph_tab_icon, Map_tab_grey_icon, Map_tab_icon, Setting_tab_grey_icon, Setting_tab_icon } from '../../assets/Svgs/svg_icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Graphs from './Graphs';
import Maps from './Maps';
import Settings from './Settings';

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
const Tab = createBottomTabNavigator();

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../Drawer/index';
import Review from '../BottomTab/RatingReview';
import SupportNoti from '../BottomTab/SupportNoti';
import Messages from '../BottomTab/Messages';
import DateDistances from '../BottomTab/DateDistances';


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notifications from "./Notifications/Notifications";
import colors from "../../assets/colors";

const Stack = createNativeStackNavigator();


function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}
const SettingStack = () => {
  return (
    // <NavigationContainer theme={navTheme}>
    <Stack.Navigator
      // initialRouteName="Order"
      initialRouteName='Settings'
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="SupportNoti" component={SupportNoti} />
      <Stack.Screen name="Messages" component={Messages} />
      {/* <Stack.Screen name="Setting" component={Setting} /> */}
      <Stack.Screen name="DateDistances" component={DateDistances} />

      {/* <Stack.Screen name='RenewOffer' component={RenewOffer}/>
      <Stack.Screen name='Preview' component={Preview}/> */}
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
const MapStack = () => {
  return (
    // <NavigationContainer theme={navTheme}>
    <Stack.Navigator
      // initialRouteName="Order"
      initialRouteName='Maps'
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
const NotificationStack = () => {
  return (
    // <NavigationContainer theme={navTheme}>
    <Stack.Navigator
      // initialRouteName="Order"
      initialRouteName='Notifications'
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Notifications" component={Notifications} />
      {/* <Stack.Screen name="Messages" component={Messages} /> */}
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '75%',
        },
      }}
      drawerContent={props => {
        return <CustomDrawerContent {...props} />;
      }}
      >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="Review" component={Review} />
      

     
    </Drawer.Navigator>
    // <Drawer.Navigator useLegacyImplementation>
    //   <Drawer.Screen name="Feed" component={Feed} />
    //   <Drawer.Screen name="Article" component={Article} />
    // </Drawer.Navigator>
  );
}



const HomeStack = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
       <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height:windowHeight/10,
            // backgroundColor: 'black',
            // borderTopWidth: 1,
            // borderTopColor: 'black',
            paddingTop: 15,
            paddingBottom: 15,
          },

          tabBarIcon: ({focused}) => {
            console.log('/////////',route.name,focused);
            if (route.name === 'MapStack') {
              if (focused) {
                return (
                  <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                      <Map_tab_icon/>
                  </View>
                );
              } else {
                return (
                  <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                      <Map_tab_grey_icon />
                  </View>
                );
              }
            }
            if (route.name === 'Graphs') {
              if (focused) {
                return (
                  <View style={{width:'100%',height:'100%',alignItems:'center',alignItems:'center',justifyContent:'center'}}>
                      <Graph_tab_icon />
                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                  </View>
                );
              } else {
                return (
                  <View style={{width:'100%',alignItems:'center',alignItems:'center',justifyContent:'center'}}>
                      <Graph_tab_grey_icon />
                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                  </View>
                );
              }
            }
           
           
            if (route.name === 'SettingStack') {
              if (focused) {
                return (
                  <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                      <Setting_tab_icon />

                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                  </View>
                );
              } else {
                return (
                  <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                      <Setting_tab_grey_icon />
                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                  </View>
                );
              }
            }
            if (route.name === 'NotificationStack') {
              if (focused) {
                return (
                  <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                      <Ionicons name="md-notifications-circle-outline" style={{color: colors.primary, fontSize: 40}} />
                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                  </View>
                );
              } else {
                return (
                  <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                      <Ionicons name="md-notifications-circle-outline" style={{color: colors.grey_btn, fontSize: 40}} />
                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                  </View>
                );
              }
            }
          },
        })}
        >
        <Tab.Screen name="MapStack" component={MapStack} />
        <Tab.Screen name="Graphs" component={Graphs} />
        <Tab.Screen name="SettingStack" component={SettingStack} />
        <Tab.Screen name="NotificationStack" component={NotificationStack} />

      </Tab.Navigator>
     
    </>
  );
};

export default function App() {
  return (
    // <NavigationContainer>
      <MyDrawer />
    // </NavigationContainer>
  );
}


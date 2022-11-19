import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image, FlatList, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Graph_tab_grey_icon, Graph_tab_icon, Map_tab_grey_icon, Map_tab_icon, Setting_tab_grey_icon, Setting_tab_icon } from '../../assets/Svgs/svg_icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Graphs from './Graphs';
import Maps from './Maps';
import Settings from './Settings';
import colors from "../../assets/colors";

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    // <Tab.Navigator 
    // screenOptions={{headerShown: false}}
    // >
    //   <Tab.Screen name="Maps" component={Maps} />
    //   <Tab.Screen name="Graphs" component={Graphs} />
    //   <Tab.Screen name="Settings" component={Settings} />

    // </Tab.Navigator>
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
            if (route.name == 'Maps') {
              if (focused) {
                return (
                  <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:windowHeight/25,height:windowHeight/25}}>
                      <Map_tab_grey_icon />
                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                    </View>
                  </View>
                );
              } else {
                return (
                  <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:windowHeight/25,height:windowHeight/25}}>
                      <Map_tab_icon />
                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                    </View>
                  </View>
                );
              }
            }
            if (route.name == 'Graphs') {
              if (focused) {
                return (
                  <View style={{width:'100%',height:'100%',alignItems:'center',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:windowHeight/25,height:windowHeight/25}}>
                      <Graph_tab_icon />
                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                    </View>
                  </View>
                );
              } else {
                return (
                  <View style={{width:'100%',alignItems:'center',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:windowHeight/25,height:windowHeight/25}}>
                      <Graph_tab_grey_icon />
                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                    </View>
                  </View>
                );
              }
            }
           
           
            if (route.name == 'Settings') {
              if (focused) {
                return (
                  <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:windowHeight/25,height:windowHeight/25}}>
                      <Setting_tab_icon />settings-outline
                      <Ionicons name='settings-outline' size={20} color={colors.greytxt} />
                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                    </View>
                  </View>
                );
              } else {
                return (
                  <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:windowHeight/25,height:windowHeight/25}}>
                      <Setting_tab_grey_icon />
                      {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
                    </View>
                  </View>
                );
              }
            }
          },
        })}
        >
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen name="Graphs" component={Graphs} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
  );
}

export default Dashboard
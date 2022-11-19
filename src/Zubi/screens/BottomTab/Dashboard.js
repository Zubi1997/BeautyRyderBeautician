import { View,Text,StyleSheet, ScrollView,Dimensions, Image, FlatList, TouchableOpacity, Modal } from "react-native";
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

// function Dashboard() {
//   return (
//     // <Tab.Navigator 
//     // screenOptions={{headerShown: false}}
//     // >
//     //   <Tab.Screen name="Maps" component={Maps} />
//     //   <Tab.Screen name="Graphs" component={Graphs} />
//     //   <Tab.Screen name="Settings" component={Settings} />

//     // </Tab.Navigator>
//     <Tab.Navigator
//         screenOptions={({route}) => ({
//           headerShown: false,
//           tabBarShowLabel: false,
//           tabBarHideOnKeyboard: true,
//           tabBarStyle: {
//             height:windowHeight/10,
//             // backgroundColor: 'black',
//             // borderTopWidth: 1,
//             // borderTopColor: 'black',
//             paddingTop: 15,
//             paddingBottom: 15,
//           },

//           tabBarIcon: ({focused}) => {
//             console.log('/////////',route.name,focused);
//             if (route.name === 'Maps') {
//               if (focused) {
//                 return (
//                   <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
//                       <Map_tab_icon/>
//                   </View>
//                 );
//               } else {
//                 return (
//                   <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
//                       <Map_tab_grey_icon />
//                   </View>
//                 );
//               }
//             }
//             if (route.name === 'Graphs') {
//               if (focused) {
//                 return (
//                   <View style={{width:'100%',height:'100%',alignItems:'center',alignItems:'center',justifyContent:'center'}}>
//                       <Graph_tab_icon />
//                       {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
//                   </View>
//                 );
//               } else {
//                 return (
//                   <View style={{width:'100%',alignItems:'center',alignItems:'center',justifyContent:'center'}}>
//                       <Graph_tab_grey_icon />
//                       {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
//                   </View>
//                 );
//               }
//             }
           
           
//             if (route.name === 'Settings') {
//               if (focused) {
//                 return (
//                   <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
//                       <Setting_tab_icon />

//                       {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
//                   </View>
//                 );
//               } else {
//                 return (
//                   <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
//                       <Setting_tab_grey_icon />
//                       {/* <CustomText label="Home" textStyle={styles.activeLabel} /> */}
//                   </View>
//                 );
//               }
//             }
//           },
//         })}
//         >
//         <Tab.Screen name="Maps" component={Maps} />
//         <Tab.Screen name="Graphs" component={Graphs} />
//         <Tab.Screen name="Settings" component={Settings} />
//       </Tab.Navigator>
//   );
// }

// export default Dashboard



import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../Drawer/index';


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
            if (route.name === 'Maps') {
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
           
           
            if (route.name === 'Settings') {
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
          },
        })}
        >
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen name="Graphs" component={Graphs} />
        <Tab.Screen name="Settings" component={Settings} />
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


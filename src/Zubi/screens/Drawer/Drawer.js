import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  AsyncStorage,
  View,
  StatusBar,
} from "react-native";

import {
  Text,
  TouchableRipple
} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import AppRoutes from '../../../navigation/routes';




const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const DrawerContent = ({ navigation }) => {

  async function Log_out() {
    //  console.log();
    await AsyncStorage.clear()
    // console.log(navigation.dangerouslyGetParent());
    // navigation.navigate('App', { screen: 'Login' });
    navigation.navigate('LoginStack');
   
  }

  return (
    <View style={{width:'50%',backgroundColor:'red'}} >
     
    </View>
  );

}

export default function DashboardDrawer() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     expoPushToken:'',
  //     notification:false,
  //   };

  // }

 

 

 

  // render(props) {
  return (

    <NavigationContainer

      independent={true}>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent  {...props} />}
        drawerStyle={{

          marginTop: 20,
          backgroundColor: 'rgba(79, 72, 85, 0.9)',
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,

        }}
        overlayColor="transparent"
        drawerType={Dimensions.width >= 768 ? 'permanent' : 'front'}
        drawerPosition="right"
        initialRouteName="AppRoutes">

        <Drawer.Screen name="AppRoutes" component={AppRoutes} />
        {/* <Drawer.Screen name="LoginStack" component={LoginStack} />
        <Drawer.Screen name="EditProfile" component={EditProfile} /> */}
        {/* <Stack.Screen name="Dashboard" component={Dashboard} options={{title:'Home',headerShown:false}} /> */}
        {/* <Drawer.Screen name="App" component={App}  /> */}




      </Drawer.Navigator>
    </NavigationContainer>

  );
  // }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurredImage: {
    width: 192,
    height: 192,
  },
  nonBlurredContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

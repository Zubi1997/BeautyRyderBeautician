import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Zubi/screens/Authentication/Splash';
import Onboarding1 from '../Zubi/screens/Authentication/Onboarding1';
import Onboarding2 from '../Zubi/screens/Authentication/Onboarding2';
import Phone_Auth from '../Zubi/screens/Authentication/PhoneAuth';
import Phone_otp from '../Zubi/screens/Authentication/Phone_otp';
import ChooseAccount from '../Zubi/screens/Authentication/ChooseAccount';
import Password from '../Zubi/screens/Authentication/Password';
import Category from '../Zubi/screens/Authentication/Category';
import Required_steps from '../Zubi/screens/Authentication/Required_steps';
import CNIC_front from '../Zubi/screens/Authentication/CNIC_front';
import CNIC_detailed_image from '../Zubi/screens/Authentication/CNIC_detailed_image';
import Inreview_document from '../Zubi/screens/Authentication/Inreview_document';


//zubi end
const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Required_steps"
        screenOptions={{headerShown: false}}>
          {/* zubi start */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Phone_Auth" component={Phone_Auth} />
        <Stack.Screen name="Phone_otp" component={Phone_otp} />
        <Stack.Screen name="ChooseAccount" component={ChooseAccount} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Required_steps" component={Required_steps} />
        <Stack.Screen name="CNIC_front" component={CNIC_front} />
        <Stack.Screen name="CNIC_detailed_image" component={CNIC_detailed_image} />
        <Stack.Screen name="Inreview_document" component={Inreview_document} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

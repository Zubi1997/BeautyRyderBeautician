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
import Help from '../Zubi/screens/Authentication/Help';
import Dashboard from '../Zubi/screens/BottomTab/Dashboard';

//Asim Screens
import Review from '../Zubi/screens/BottomTab/RatingReview';
import Support from '../Zubi/screens/BottomTab/SupportNoti';
import Chat from '../Zubi/screens/BottomTab/Messages';
import Setting from '../Zubi/screens/BottomTab/Settings';
import DateDistances from '../Zubi/screens/BottomTab/DateDistances';
import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';
import Pdf_viewer from '../Zubi/screens/Authentication/Pdf_viewer';


//zubi end
const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <MenuProvider>
    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
          {/* asim code */}
        {/* <Stack.Screen name="Review" component={Review} /> */}
        {/* <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="DateDistances" component={DateDistances} /> */}
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
        <Stack.Screen name="Help" component={Help} />
        {/* dummy */}
        <Stack.Screen name="Pdf_viewer" component={Pdf_viewer} />
        {/* dummy */}

        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
    </MenuProvider>
  );
}

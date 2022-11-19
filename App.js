import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import AppRoutes from './src/navigation/routes';
// import SplashScreen from 'react-native-splash-screen';
// import './src/Constants/i18n';

Dimensions.get('window').height;
Dimensions.get('window').width;
const App = () => {
  useEffect(() => {
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 2000);
  });
  return <AppRoutes />;
};

export default App;

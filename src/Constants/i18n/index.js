// import AsyncStorage from '@react-native-community/async-storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';
import English from './Langauges/English.json';
import Arabic from './Langauges/Arabic.json';

const resources = {
  en: English,
  ar: Arabic,
};

i18n.use(initReactI18next).init({
  resources,
  lng: I18nManager.isRTL ? 'ar' : 'en',

  react: {
    useSuspense: false,
  },
  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

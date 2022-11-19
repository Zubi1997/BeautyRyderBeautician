import React from 'react';
import {useTranslation, withTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  I18nManager,
  SafeAreaView,
} from 'react-native';
import colors from '../../assets/colors';
import BackHeader from '../../Components/BackHeader';
import FontText from '../../Components/common/FontText';
import {hp, isX, normalize, wp} from '../../styles/responsiveScreen';
import RNRestart from 'react-native-restart';

export const routeName = 'ChangeLan';

const ChangeLan = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const languageList = [
    {id: 1, name: 'English', value: 'en'},
    {id: 2, name: 'Arabic', value: 'ar'},
  ];

  const renderItem = ({item, index}) => {
    const onLanguagePress = item => {
      if (item.name === 'Arabic') {
        i18n.changeLanguage(item.value).then(() => {
          I18nManager.forceRTL(i18n.language === 'ar');
          RNRestart.Restart();
        });
      } else {
        i18n.changeLanguage(item.value).then(() => {
          I18nManager.forceRTL(false);
          RNRestart.Restart();
        });
      }
    };

    return (
      <TouchableOpacity
        onPress={() => onLanguagePress(item, index)}
        style={styles.container}>
        <FontText size={normalize(18)} pTop={hp(1.5)} pBottom={hp(1.5)}>
          {item.name}
        </FontText>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
        title={t('CHANGE_LAN')}
        BackonPress={() => navigation.goBack()}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={languageList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: isX ? hp(6) : hp(3.5),
    paddingHorizontal: wp(1),
  },
  separator: {
    height: hp(0.1),
    width: '100%',
    backgroundColor: colors.lightgrey,
    alignSelf: 'center',
  },
  list: {
    paddingHorizontal: wp(5),
  },
});

export default withTranslation()(ChangeLan);

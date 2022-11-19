import React, { createRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  I18nManager,
} from 'react-native';
import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';
import ImageCropPicker from 'react-native-image-crop-picker';
import BackHeader from '../../Components/BackHeader';
import FontText from '../../Components/FontText';
import { normalize } from '../../styles/responsiveScreen';
import VideoScreen, { routeName as VideoScreenRouteName } from './VideoScreen';

const { width, height } = Dimensions.get('screen');

export const routeName = 'CreateEditBlog';

const CreateEditBlog = props => {
  const { t } = useTranslation();

  const _editor = createRef();

  const Screen = props?.route?.params?.Screen;
  const [Text, setText] = useState(Screen == 'Create' ? '' : t('HAIR_TAG'));

  const [Images, setImages] = useState([]);


  const DeleteData = (item, Mainindex) => {
    setImages(preValue => {
      return preValue.filter((img, index) => index != Mainindex);
    });
  };

  const OpenGallery = () => {
    ImageCropPicker.openPicker({
      mediaType: 'any',
      multiple: true,
    }).then(image => {
      setImages(preValue => {
        return [...image, ...preValue];
      });
    });
  };

  const videoScreen = item => {
    if (item.path.includes('mp4')) {
      props.navigation.navigate(VideoScreenRouteName, { Data: item });
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <BackHeader
        title={Screen == 'Edit' ? t('EDIT_BLOG') : t('CREATE_BLOG')}
        BackonPress={() => props.navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={Images}
          contentContainerStyle={{ paddingHorizontal: width * 0.02 }}
          style={{ paddingLeft: width * 0.03 }}
          keyExtractor={(value, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => videoScreen(item)}
              style={styles.Images}>
              <Image
                source={{ uri: item.path }}
                resizeMode="stretch"
                style={styles.image}
              />

              {/* Video Button */}
              <View style={styles.video}>
                {item.path.includes('mp4') ? (
                  <Image
                    source={require('../../assets/images/PlayBtn.png')}
                    resizeMode="contain"
                    style={styles.playbtn}
                  />
                ) : null}
              </View>

              {Screen == 'Create' && (
                <TouchableOpacity
                  onPress={() => DeleteData(item, index)}
                  style={styles.CrossImage}>
                  <Image
                    source={require('../../assets/images/Cross.png')}
                    resizeMode="contain"
                    style={styles.cross}
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          )}
        />

        <FontText
          name="poppins-regular"
          size={normalize(14)}
          pTop={width * 0.025}
          pLeft={width * 0.05}
          style={{ color: '#8384A1' }}>
          {t('JPG')}
        </FontText>

        {/* Upload Media */}
        {Screen == 'Create' && (
          <View>
            <FontText
              name="poppins-semibold"
              size={normalize(16)}
              pTop={width * 0.05}
              pLeft={width * 0.05}>
              {t('UPLOAD_MEDIA')}
            </FontText>

            <TouchableOpacity
              onPress={() => OpenGallery()}
              style={styles.Title}>
              <FontText
                name="poppins-regular"
                size={normalize(16)}
                style={{ color: '#8384A1' }}>
                {t('CHOOSE_FILE')}
              </FontText>

              <Image
                source={require('../../assets/images/UploadMedia.png')}
                resizeMode="contain"
                style={styles.uploadMedia}
              />
            </TouchableOpacity>
          </View>
        )}

        {/* Blog Title */}
        <View>
          <FontText
            name="poppins-semibold"
            size={normalize(16)}
            pTop={width * 0.05}
            pLeft={width * 0.05}>
            {t('BLOG_TITLE')}
          </FontText>

          <View style={styles.Title}>
            <TextInput
              style={{
                fontSize: normalize(16),
                fontFamily:
                  Screen == 'Create' ? 'poppins-semibold' : 'poppins-regular',
                color: Screen == 'Create' ? '#000' : '#8384A1',
                textAlign: I18nManager.isRTL ? 'right':'left',
              }}
              placeholder={Screen == 'Create' ? t('ENTER_BLOG_TITLE') : ''}
              onChangeText={val => setText(val)}
              value={Text}
            />
          </View>
        </View>

        {/* Blog Details */}
        <View>
          <FontText
            name="poppins-semibold"
            size={normalize(16)}
            pTop={width * 0.05}
            pLeft={width * 0.05}>
            {t('BLOG_DETAILS')}
          </FontText>

          <View style={styles.quill}>
            <QuillEditor
              autoSize={true}
              theme={{
                background: '#F7F8FA',
                color: '#000',
                placeholder: 'Enter Text',
                textAlign: I18nManager.isRTL ? 'right':'left',
              }}
              style={[{ fontSize: normalize(40) }]}
              options={[
                ['bold', 'italic', 'underline'],
                [{ header: 1 }, { header: 2 }],
                [{ align: [] }],
                [
                  { color: ['#000000', '#e60000', '#ff9900', 'yellow'] },
                  { background: [] },
                ],
                [{ font: ['poppins-regular', 'poppins-semibold'] }],
              ]}
              ref={_editor}
            />

            <QuillToolbar
              styles={{
                FontText: { fontSize: 25 },
                toolbar: {
                  provider: provided => ({
                    ...provided,
                    borderTopWidth: 0,
                  }),
                  root: provided => ({
                    ...provided,
                    backgroundColor: '#fff',
                    width: width * 0.84,
                  }),
                },
              }}
              editor={_editor}
              options={'full'}
              theme="light"
            />
          </View>
        </View>

        {/* Buttons View */}
        <View style={styles.btnView}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={[
              styles.Btn,
              { alignItems: 'stretch', paddingLeft: width * 0.05 },
            ]}>
            <FontText
              name="poppins-semibold"
              style={{ color: '#8384A1' }}
              size={normalize(16)}>
              {t('CANCEL')}
            </FontText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={[styles.Btn, { backgroundColor: '#397DFF' }]}>
            <FontText
              name="poppins-semibold"
              size={normalize(16)}
              style={{ color: '#fff' }}>
              {Screen == 'Create' ? t('SAVE') : t('SAVE_CHANGES')}
            </FontText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEditBlog;

const styles = StyleSheet.create({
  Images: {
    width: width * 0.28,
    height: width * 0.28,
    marginRight: width * 0.02,
    marginTop: width * 0.02,
  },
  Btn: {
    width: width * 0.45,
    height: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.02,
    marginLeft: width * 0.02,
  },
  Title: {
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: '#F7F8FA',
    borderRadius: width * 0.03,
    height: width * 0.13,
    marginTop: width * 0.02,
    justifyContent: 'center',
    paddingHorizontal: width * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CrossImage: {
    position: 'absolute',
    top: -width * 0.015,
    right: 0,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 100,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 1,
    shadowRadius: 21,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
  },
  video: {
    position: 'absolute',
    top: width * 0.08,
    left: width * 0.08,
  },
  playbtn: {
    width: width * 0.1,
    height: width * 0.08,
    tintColor: '#fff',
  },
  cross: {
    width: width * 0.04,
    height: width * 0.04,
    tintColor: '#ff0000',
  },
  uploadMedia: { width: width * 0.07, height: width * 0.07 },
  quill: {
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: '#F7F8FA',
    borderRadius: width * 0.03,
    marginTop: width * 0.02,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.03,
    height: width * 0.65,
  },
  btnView: {
    flexDirection: 'row',
    width: width * 0.95,
    alignSelf: 'center',
    marginVertical: width * 0.05,
    alignItems: 'center',
  },
});

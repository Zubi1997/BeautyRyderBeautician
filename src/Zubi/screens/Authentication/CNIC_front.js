
import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image, FlatList, TouchableOpacity, Modal } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../../assets/colors";
import { Camera_logo, CNIC_empty, Dark_logo, File_logo, Light_logo, Minus_box, Onboarding1_image, Plus_box } from "../../assets/Svgs/svg_images";
import Divider from "../../Components/Divider";
import GradientButton from "../../Components/Buttons/GradientButton";
import Text_heading from "../../Components/Text_components/Text_heading";
import LinearGradient from 'react-native-linear-gradient';
import Text_sub_heading from "../../Components/Text_components/Text_sub_heading";
import Font_style from "../../assets/Font_style";
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker, { types } from 'react-native-document-picker';

import Entypo from 'react-native-vector-icons/Entypo';

// import AsyncStorage from "@react-native-async-storage/async-storage";

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
export default function CNIC_front({ navigation }) {

    const [modalVisible_camera, set_modalVisible_camera] = useState(false);
    const [photo_detail_modal, set_photo_detail_modal] = useState(false);

    const [image, setImage] = useState(null);
    const [next_button, set_next_button] = useState(false);


  useEffect(() => {
      const constructor = async () => {

      };
      constructor();
    }, [])

    const openCamera = () => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      })
        .then(image => {
          // onClose()
          console.log(image.path);
          set_modalVisible_camera(false)
          set_next_button(true)
          setImage(image.path);
        })
        .catch(err => {
          alert(err.toString())
          console.log('openCamera catch' + err.toString());
        });
    };
    const file_picker=async()=>{
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.pdf],
        allowMultiSelection: true,
      });
      console.log(response);
      navigation.navigate('Pdf_viewer')
      //content://com.android.providers.media.documents/document/document%3A1000017501
    }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollview}>
            <View style={styles.header}>
                <View style={styles.heading}>
                    <Text_heading text="Take a photo of your CNIC Front Side"/>
                </View>
                <View style={styles.description}>
                    <Text_sub_heading style={{textAlign:'center',fontSize:14}} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
                </View>
                <View style={styles.image_view}>
                    {image?
                    // <Text>jdnvsjk</Text>
                    <TouchableOpacity 
                    
                    onPress={()=>set_photo_detail_modal(true)} 
                    // onPress={()=>navigation.navigate('CNIC_detailed_image')} 
                    style={{width:windowWidth/1.5,height:windowWidth/2.5,alignItems:'center'}}>
                      <TouchableOpacity onPress={()=>{setImage(''),set_next_button(false)}} style={{alignSelf:'flex-end',marginVertical:10,marginRight:10}}>
                        <Entypo
                            name="circle-with-cross"
                            style={{color:colors.primary, fontSize: 25}}
                          />
                      </TouchableOpacity>
                      <Image
                        style={{height:windowWidth/4,width:windowWidth/2.5,marginHorizontal:50,marginTop:-10}}
                        source={{uri:image}}
                      />
                    </TouchableOpacity>
                    :
                    <View style={{width:windowWidth/1.5,height:windowWidth/2.5,padding:30}}>
                      <CNIC_empty />
                    </View>
                    }
                </View>
            </View>
            {/* <View style={styles.zoom_view}>
                <View style={{marginLeft:10}}>
                    <Plus_box />
                </View>
                <View style={{marginLeft:10}}>
                    <Minus_box />
                </View>
            </View> */}
            {next_button?
            <GradientButton onpress={()=>navigation.navigate('Required_steps',{image:true})} Title1='Next'/>
            :
            <GradientButton onpress={()=>set_modalVisible_camera(true)} Title1='TAKE PHOTO'/>
            }
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible_camera}
              onRequestClose={() => {
                set_modalVisible_camera(!modalVisible_camera);
              }}
            >
              <View  style={styles.centeredView}>
              <TouchableOpacity onPress={()=>set_modalVisible_camera(false)} style={{flex:1}}></TouchableOpacity>
                <LinearGradient colors={[colors.gradient1,colors.gradient2]} style={styles.modalView} >

                    <View style={{flex:1,flexDirection:'row',borderBottomColor:colors.divider,borderBottomWidth:1}}>
                        <TouchableOpacity onPress={()=>openCamera()} style={styles.camera_logo}>
                          <Camera_logo />
                          <Text style={styles.cancel_txt}>Camera</Text>
                        </TouchableOpacity>

                        <View style={{width:1,height:'100%',backgroundColor:colors.divider}}></View>
                        
                        <TouchableOpacity onPress={()=>file_picker()} style={styles.camera_logo}>
                          <File_logo />
                          <Text style={styles.cancel_txt}>Files</Text>
                        </TouchableOpacity>  

                    </View>
                    <TouchableOpacity onPress={()=>set_modalVisible_camera(false)} style={{padding:20,alignItems:'center',justifyContent:'center'}}>
                      <Text style={[styles.cancel_txt,{marginTop:0}]}>Cancel</Text>
                    </TouchableOpacity>

                </LinearGradient>
              </View>
            </Modal>

            <Modal
              animationType="slide"
              transparent={false}
              visible={photo_detail_modal}
              onRequestClose={() => {
                set_photo_detail_modal(!photo_detail_modal);
              }}
            >
              <View  style={styles.centeredView}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollview}>
                  <View style={styles.header}>
                      <View style={styles.image_view}>
                        {image?
                        // <Text>jdnvsjk</Text>
                        <TouchableOpacity onPress={()=>{}} style={{width:windowWidth/2,height:windowWidth/2}}>
                          <Image
                            style={{height:'100%',width:'100%'}}
                            source={{uri:image}}
                          />
                        </TouchableOpacity>
                        :
                        <View style={{width:windowWidth/2,height:windowWidth/2}}>
                          <CNIC_empty />
                        </View>
                        }
                      </View>
                  </View>
                  {/* <View style={styles.zoom_view}>
                      <View style={{marginLeft:10}}>
                          <Plus_box />
                      </View>
                      <View style={{marginLeft:10}}>
                          <Minus_box />
                      </View>
                  </View> */}

                  <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                      <View style={{width:(windowWidth/2)-30,height:2,backgroundColor:colors.divider}}></View>
                      <TouchableOpacity onPress={()=>{
                        set_photo_detail_modal(false)
                        navigation.navigate({
                              name: 'Required_steps',
                              params: { image:true },
                              merge: true,
                            });
                        navigation.navigate('Required_steps',{image:true})
                        }}>
                          <LinearGradient colors={[colors.gradient1,colors.gradient2]} style={styles.cross_view}>
                              <Entypo name='cross' size={30} color={colors.white} />
                          </LinearGradient>
                      </TouchableOpacity>
                      <View style={{width:(windowWidth/2)-30,height:2,backgroundColor:colors.divider}}></View>
                  </View>
                
              </ScrollView>
              </View>
            </Modal>
        </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.background,
    padding:20
  },
  scrollview:{
    flexGrow:1,
    marginBottom:20
  },
  header:{
    alignItems:'center'
  },
  heading:{
    marginTop:40
  },

  picker_view:{
    marginTop:30
  },
  description:{
    marginTop:20,
    alignItems:'center'
  },
  single_cat:{
    borderWidth:1,
    borderColor:colors.divider,
    padding:20,
    flexDirection:'row',
    marginTop:20
  },
  image_view:{
    borderRadius:4,
    borderColor:colors.divider,
    borderWidth:2,
    // paddingHorizontal:50,
    // alignItems:'center',
    marginTop:30,
  },
  cat_txt_view:{
    flex:1,
    marginLeft:10,
    justifyContent:'center'
  },
  cat_txt1:{
    fontSize:18,
    color:colors.black
  },
cat_txt2:{
    fontSize:16,
    color:colors.greytxt,
    marginTop:5
},
zoom_view:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:100
},
centeredView: {
  flex: 1,
  justifyContent: 'flex-end',
  // alignItems: "center",
},
modalView: {
  height: "40%",
  width: "100%",
  alignSelf: "flex-end",
  backgroundColor: "green",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
cancel_txt:{
  color:'white',
  fontFamily:Font_style.Poppins_Regular,
  fontSize:20,
  marginTop:10
},
camera_logo:{
  height:'100%',
  width:'50%',
  alignItems:'center',
  justifyContent:'center'
},
cross_view:{
  height:60,
  width:60,
  borderRadius:100,
  alignItems:'center',
  justifyContent:'center',
  position:'relative'

}

});
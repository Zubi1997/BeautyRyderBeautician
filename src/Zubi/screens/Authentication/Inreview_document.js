
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
import Entypo from 'react-native-vector-icons/Entypo';

// import AsyncStorage from "@react-native-async-storage/async-storage";

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
export default function CNIC_front({ navigation }) {

    const [modalVisible_camera, set_modalVisible_camera] = useState(false);
    const [photo_detail_modal, set_photo_detail_modal] = useState(false);

    const [image, setImage] = useState(null);

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
          setImage(image.path);
        })
        .catch(err => {
          alert(err.toString())
          console.log('openCamera catch' + err.toString());
        });
    };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollview}>
            <View style={styles.header}>
                <View style={styles.heading}>
                    <Text_heading text="We're reviewng your document"/>
                </View>
                <View style={styles.description}>
                    <Text_sub_heading style={{textAlign:'center'}} text="It usually takes less than a day for us to complete the process."/>
                </View>
            </View>
         

            <GradientButton end={true} onpress={()=>set_modalVisible_camera(true)} Title1='Next'/>

           
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
    paddingHorizontal:50,
    padding:30,
    alignItems:'center',
    marginTop:50
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
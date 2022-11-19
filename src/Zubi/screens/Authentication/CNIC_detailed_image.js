
import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image, FlatList, TouchableOpacity, Modal } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../../assets/colors";
import { Camera_logo, CNIC_empty, Dark_logo, File_logo, Light_logo, Minus_box, Onboarding1_image, Plus_box } from "../../assets/Svgs/svg_images";
import Divider from "../../Components/Divider";
import GradientButton from "../../Components/Buttons/GradientButton";
import Text_heading from "../../Components/Text_components/Text_heading";
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';

// import AsyncStorage from "@react-native-async-storage/async-storage";

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
export default function CNIC_front({ navigation }) {

    const [modalVisible_camera, set_modalVisible_camera] = useState(false);
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
            {/* <View style={styles.dropdown_view}> */}
           
            {/* </View> */}
            <View style={styles.zoom_view}>
                <View style={{marginLeft:10}}>
                    <Plus_box />
                </View>
                <View style={{marginLeft:10}}>
                    <Minus_box />
                </View>
            </View>

            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <View style={{width:(windowWidth/2)-30,height:2,backgroundColor:colors.divider}}></View>
                <TouchableOpacity onPress={()=>navigation.dispatch(navigation.pop(2))}>
                    <LinearGradient colors={[colors.gradient1,colors.gradient2]} style={styles.cross_view}>
                            <Entypo name='cross' size={30} color={colors.white} />
                    </LinearGradient>
                </TouchableOpacity>
                <View style={{width:(windowWidth/2)-30,height:2,backgroundColor:colors.divider}}></View>
            </View>
           
        </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.background,
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

  image_view:{
    borderRadius:4,
    borderColor:colors.divider,
    borderWidth:2,
    paddingHorizontal:50,
    padding:30,
    alignItems:'center',
    marginTop:50
  },

zoom_view:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:50
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
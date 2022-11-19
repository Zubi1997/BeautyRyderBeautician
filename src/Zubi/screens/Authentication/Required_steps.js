
import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image, FlatList, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../../assets/colors";
import { Dark_logo, Light_logo, Onboarding1_image, Required_step } from "../../assets/Svgs/svg_images";
import Divider from "../../Components/Divider";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Text_heading from "../../Components/Text_components/Text_heading";
import LinearGradient from 'react-native-linear-gradient';
import Text_sub_heading from "../../Components/Text_components/Text_sub_heading";
import Text18 from "../../Components/Text_components/Text18";
import { CONTENT } from "../../../helper/data";
import { useFocusEffect } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import AsyncStorage from "@react-native-async-storage/async-storage";

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
export default function Required_steps({ route,navigation }) {

    const [selected_index, set_selected_index] = useState({});
    const [image_uploaded, set_image_uploaded] = useState(route?.params?.image || false);
    // const [selected_index, set_selected_index] = useState({});

    

    const [Categories, set_Categories] = useState([
    {
      id: '1',
      Title: 'Terms and Conditions',
      sub_title:'Lorem Ipsum is simply dummy text of the printing',
      width: '24',
      height:' 5',
      depth: '16.5',
    },
    {
      id: '2',
      Title: 'CNIC Front Side',
      sub_title:'Lorem Ipsum is simply dummy text of the printing',
      width: '35',
      height: '12',
      depth: '25',
    },
    {
      id: '3',
      Title: 'CNIC Back Side',
      sub_title:'Lorem Ipsum is simply dummy text of the printing',
      width: '45',
      height: '16',
      depth: '35',
    },
    {
      id: '4',
      Title: 'License Front Side',
      sub_title:'Lorem Ipsum is simply dummy text of the printing',
      width: '45',
      height: '45',
      depth: '45',
    },
    {
    id: '5',
    Title: 'License Back Side',
    sub_title:'Lorem Ipsum is simply dummy text of the printing',
    width: '45',
    height: '45',
    depth: '45',
      },
  ])


  const [submitted_categories, set_submitted_categories] = useState([ 
    {
      id: '2',
      Title: 'CNIC Front Side',
      sub_title:'In Review',
      width: '35',
      height: '12',
      depth: '25',
    }
  ])
    //   useFocusEffect(
    //   React.useCallback(() => {
    //     alert(route?.params?.image)


    //   },[])
    // );
  useEffect(() => {
      const constructor = async () => {
        console.log(Categories.length)
        if(route?.params?.image){
        //  Approved_categories.push(Categories[1])
         Categories.splice(1,1)
         set_Categories(Categories)
        }
      };
      constructor();
    }, [route?.params?.image])

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollview}>

            <View style={styles.header}>
                <View style={styles.heading}>
                    <Text_heading style={{color:colors.primary}} text="Welcome, Syed Saqib"/>
                </View>
            </View>
            <View style={[styles.heading,{alignSelf:'flex-start'}]}>
                <Text18 style={{color:colors.black}} text="Required steps"/>
            </View>
            <View style={{}}>
                <Text_sub_heading style={{color:colors.greytxt,fontSize:14}} text="Here's what you need to do to set up your account."/>
            </View>
            {/* <View style={styles.dropdown_view}> */}
           
            {/* </View> */}
            <View style={styles.description}>
          
                {Categories?.map(( item, index ) =>(
                    <View key={index} style={{width:'100%'}}>
                    {selected_index.id==item.id?
                  
                        <LinearGradient
                            colors={[colors.gradient1,colors.gradient2]}
                            style={styles.single_cat}
                        >
                            <View style={{backgroundColor:colors.white,flex:1,flexDirection:'row',padding:10}}>
                                <Required_step />
                                <View style={styles.cat_txt_view}>
                                    <Text style={styles.cat_txt1} >{item.Title}</Text>
                                    <Text style={styles.cat_txt2} >{item.sub_title}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>navigation.navigate('CNIC_front')} style={{marginLeft:5}}>
                                <MaterialCommunityIcons name='chevron-double-right' size={24} color={colors.white} />
                            </TouchableOpacity>
                        </LinearGradient>
                        :
                        <TouchableOpacity onPress={()=>set_selected_index(item)}  style={styles.single_cat}>
                            <View style={{flexDirection:'row',flex:1,padding:10}}>
                                <Required_step />
                                <View style={styles.cat_txt_view}>
                                    <Text style={styles.cat_txt1} >{item.Title}</Text>
                                    <Text style={styles.cat_txt2} >{item.sub_title}</Text>
                                </View>
                            </View>
                            <View style={{width:1,backgroundColor:colors.divider,height:'100%'}}></View>
                            <TouchableOpacity onPress={()=>navigation.navigate('CNIC_front')} style={{paddingLeft:5,paddingRight:5}}>
                                <MaterialCommunityIcons name='chevron-double-right' size={24} color={colors.divider} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    }
                    </View>
                ))}
             
                {!route?.params?.image?
                <>
                  <View style={{marginTop:20}}>
                  <Text_heading style={{color:colors.primary}} text="Submitted"/>
                </View>
                {submitted_categories?.map(( item, index ) =>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Inreview_document')}  key={index} style={{width:'100%'}}>                  
                        <LinearGradient
                            colors={[colors.gradient1,colors.gradient2]}
                            style={styles.single_cat}
                        >
                            <View style={{backgroundColor:colors.white,flex:1,flexDirection:'row',padding:20}}>
                                <AntDesign name='exclamationcircleo' size={25} color={colors.primary} />
                                <View style={styles.cat_txt_view}>
                                    <Text style={styles.cat_txt1} >{item.Title}</Text>
                                    <Text style={styles.cat_txt2} >{item.sub_title}</Text>
                                </View>
                            </View>
                            <View style={{marginLeft:5}}>
                                <MaterialCommunityIcons name='chevron-double-right' size={24} color={colors.white} />
                            </View>
                        </LinearGradient>
              
                    </TouchableOpacity>
                ))}
                </>
                :null}

            </View>

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
    alignItems:'center',
    flexDirection:'row',
    marginTop:20
  },
  img:{
    height:70,
    width:70,
    backgroundColor:colors.divider
  },
  cat_txt_view:{
    flex:1,
    marginLeft:10,
    justifyContent:'center',
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

});
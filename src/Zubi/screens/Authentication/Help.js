
import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image, FlatList, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../../assets/colors";
import { Dark_logo, Light_logo, Onboarding1_image } from "../../assets/Svgs/svg_images";
import Divider from "../../Components/Divider";
import GradientButton from "../../Components/Buttons/GradientButton";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Font_style from "../../assets/Font_style";


// import AsyncStorage from "@react-native-async-storage/async-storage";

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
export default function Help({ navigation }) {

    const [selected_index, set_selected_index] = useState({});
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Help', value: 'Help'}
    ]);
    

  const Help_options = [
    {
      id: '1',
      Title: 'Get help in person',

    },
    {
      id: '2',
      Title: 'How to start with BeautyRyder',

    },
    {
      id: '3',
      Title: 'Get help with your account',

    },
    {
    id: '4',
    Title: 'Get help in person',

    },
    {
    id: '5',
    Title: 'How to start with BeautyRyder',

    },
    {
    id: '6',
    Title: 'Get help with your account',

    },

  ];

  useEffect(() => {
      const constructor = async () => {
        setTimeout(() => {
            // navigation.navigate('')
        }, 2000);
      };
      constructor();
    }, [])

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollview}>
            <View style={styles.picker_view}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{
                        borderColor:colors.divider
                    }}
                    textStyle={{
                    fontSize: 14,
                    color:colors.greytxt
                    }}
                />
            </View>

            <View style={styles.description}>
          
                    {Help_options?.map(( item, index ) =>(
                    <View key={index} style={{width:'100%'}}>
                    
                        <TouchableOpacity onPress={()=>{}}  style={styles.single_cat}>
                            <View style={styles.cat_txt_view}>
                                <Text style={styles.cat_txt1} >{item.Title}</Text>
                            </View>
                            <AntDesign name='questioncircleo' size={25} color={colors.black} />


                        </TouchableOpacity>
                    </View>
                ))}
                

            </View>

            <GradientButton end={true} onpress={()=>navigation.navigate('Dashboard')} Title1='SIGN OUT'/>

        </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.background,
    // padding:20
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
    marginTop:30,
    padding:20
  },
  description:{
    marginTop:20,
    alignItems:'center'
  },
  single_cat:{
    borderBottomWidth:1,
    borderBottomColor:colors.divider,
    padding:20,
    flexDirection:'row',
  },
  img:{
    height:70,
    width:70,
    backgroundColor:colors.divider
  },
  cat_txt_view:{
    flex:1,
    marginLeft:10,
    justifyContent:'center'
  },
  cat_txt1:{
    fontSize:18,
    color:colors.black,
    fontFamily:Font_style.Poppins_Medium
  },


});
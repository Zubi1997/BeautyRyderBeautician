
import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image, FlatList, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../../assets/colors";
import { Dark_logo, Light_logo, Onboarding1_image } from "../../assets/Svgs/svg_images";
import Divider from "../../Components/Divider";
import GradientButton from "../../Components/Buttons/GradientButton";
import Text_heading from "../../Components/Text_components/Text_heading";
import Entypo from 'react-native-vector-icons/Entypo';
import { CheckBox, Icon } from '@rneui/themed';

import LinearGradient from 'react-native-linear-gradient';
import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';
import { VISITOR_KEYS } from "@babel/types";
// import AsyncStorage from "@react-native-async-storage/async-storage";

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
export default function Category({ navigation }) {

    const [selected_index, set_selected_index] = useState({});
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [isSelected, setSelection] = useState(false);

    const [items, setItems] = useState([
      {label: 'Help', value: 'Help'}
    ]);
    
    const [Categories, setCategories] = useState([
    {
      id: '1',
      Title: 'Eyelashes extensions',
      sub_title:'Lorem Ipsum is simply dummy text of the printing',
      checked:false,
      detail:false
    },
    {
      id: '2',
      Title: 'Nail treatments',
      sub_title:'Lorem Ipsum is simply dummy text of the printing',
      checked:false,
      detail:false
    },
    {
      id: '3',
      Title: 'Hair-cutting',
      sub_title:'Lorem Ipsum is simply dummy text of the printing',
      checked:false,
      detail:false
    },
    {
      id: '4',
      Title: 'Facials and skin care treatments.',
      sub_title:'Lorem Ipsum is simply dummy text of the printing',
      checked:false,
      detail:false
    },
    {
      id: '5',
      Title: 'Hair-cutting',
      sub_title:'Lorem Ipsum is simply dummy text of the printing',
      checked:false,
      detail:false
    },
    {
      id: '6',
      Title: 'Facials and skin care treatments.',
      sub_title:'Lorem Ipsum is simply dummy text of the printing',
      checked:false,
      detail:false
    },
  ]);

  useEffect(() => {
      const constructor = async () => {
        setTimeout(() => {
            // navigation.navigate('')
        }, 2000);
      };
      constructor();
    }, [])
    const select_category=(item,index)=>{
      const temp = [...Categories]
      // Categories.filter((item,index)=>item.checked=true)
      temp[index].checked=!temp[index].checked
      setCategories(temp)
    }
    const detail_view=(item,index)=>{
      const temp = [...Categories]
      // Categories.filter((item,index)=>item.checked=true)
      temp[index].detail=!temp[index].detail
      setCategories(temp)
    }

  return (
    <SafeAreaView style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={styles.scrollview}> */}
            {/* <View style={styles.picker_view}>
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
            </View> */}
            <View style={{alignItems:'flex-end'}}>
              <Menu>
                <MenuTrigger onPress={() => {}} style={styles.trigger}>
                  <View style={{height: 40,width: 40,alignItems: 'center',justifyContent: 'center',}}>
                    <Entypo name="dots-three-vertical" style={{color: '#4C6870', fontSize: 20}} />
                  </View>
                </MenuTrigger>
                <MenuOptions customStyles={{optionText: {padding: 5}}}>
                  <MenuOption value="Normal" text="Get help in person" />
                  <MenuOption value="Normal" text="How to start with BeautyRyder" />
                  <MenuOption value="Normal" text="Get help in person" />
                  <MenuOption value="Normal" text="Get help with your account" />
                  <MenuOption value="Normal" text="How to start with BeautyRyder" />
                  <MenuOption onSelect={() => console.log('call')} value="Normal" text="Get help with your account" />
                </MenuOptions>
              </Menu>
            </View>
            <View style={styles.header}>
                <View style={styles.heading}>
                    <Text_heading text="Choose how you'd like to earn with BeautyRyder"/>
                </View>
            </View>
           
            {/* <View style={styles.dropdown_view}> */}
           
            {/* </View> */}
            <View style={styles.description}>
        <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={styles.scrollview}>
          
                    {Categories?.map(( item, index ) =>(
                    <View key={index} style={{flexDirection:'row',width:windowWidth-20,alignItems:'center'}}>
                         <View style={{}}>
                            <CheckBox
                              center
                              title=""
                              checkedColor={colors.primary}
                              containerStyle={styles.checkbox}
                              checked={item.checked}
                              onPress={() => select_category(item,index)}
                            /> 
                          </View>  
                    <View style={{width:windowWidth-70}}>
                    {item.checked==true?
                        <TouchableOpacity   onPress={()=>select_category(item,index)}>
                        <LinearGradient
                            colors={[colors.gradient1,colors.gradient2]}
                            style={styles.single_cat}
                        >
                          <View style={{flexDirection:'row',alignItems:'center',flex:1,justifyContent:'space-between'}}>
                                <Text style={[styles.cat_txt1,{color:colors.white}]} >{item.Title}</Text>
                              <TouchableOpacity style={{padding:5}} onPress={()=>detail_view(item,index)}>
                                {item.detail==true?
                                <Entypo name="chevron-down" style={{color: colors.white, fontSize: 20,marginRight:10}} />
                                :
                                <Entypo name="chevron-right" style={{color: colors.white, fontSize: 20,marginRight:10}} />
                                }
                                </TouchableOpacity>
                          </View>
                          {item.detail==true?
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={styles.img}>
                                </View>
                                <View style={styles.cat_txt_view}>
                                    <Text style={[styles.cat_txt2,{color:colors.white}]} >{item.sub_title}</Text>
                                </View>
                            </View>
                            :
                            null
                          }
                        </LinearGradient>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.single_cat} onPress={()=>select_category(item,index)}>
                                  {/* <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                  /> */}

                          <View style={{flexDirection:'row',alignItems:'center',flex:1,justifyContent:'space-between'}}>
                              <Text style={styles.cat_txt1} >{item.Title}</Text>
                              <TouchableOpacity style={{padding:5}} onPress={()=>detail_view(item,index)}>
                                {item.detail==true?
                                <Entypo name="chevron-down" style={{color: colors.primary, fontSize: 20,marginRight:10}} />
                                :
                                <Entypo name="chevron-right" style={{color: colors.primary, fontSize: 20,marginRight:10}} />
                                }
                                </TouchableOpacity>
                          </View>
                          {item.detail==true?
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={styles.img}>
                                </View>
                                <View style={styles.cat_txt_view}>
                                    <Text style={styles.cat_txt2} >{item.sub_title}</Text>
                                </View>
                            </View>
                            :
                            null
                          }
                        </TouchableOpacity>
                        // <TouchableOpacity onPress={()=>select_category(item,index)}  style={styles.single_cat}>
                        //     <View style={styles.img}>
                        //     </View>
                        //     <View style={styles.cat_txt_view}>
                        //         <Text style={styles.cat_txt1} >{item.Title}</Text>
                        //         <Text style={styles.cat_txt2} >{item.sub_title}</Text>
                        //     </View>
                        // </TouchableOpacity>
                    }
                    </View> 
                    </View>
                ))}
                

        </ScrollView>
            </View>


        {/* <Text>jhbjknj</Text> */}
        <View style={{width:windowWidth,alignItems:'center',justifyContent:'center',marginBottom:10}}>
          <GradientButton style={{marginTop:10}}  end={false} onpress={()=>navigation.navigate('Required_steps')} Title1='CONTINUE'/>
        </View>
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
    paddingHorizontal:10,
    paddingTop:20
  },
  header:{
    alignItems:'center'
  },
  heading:{
    marginTop:20
  },

  picker_view:{
    marginTop:30
  },
  description:{
    flex:1,
    // marginTop:20,
    alignItems:'center'
  },
  single_cat:{
    borderWidth:1,
    borderColor:colors.divider,
    paddingLeft:20,
    paddingVertical:20,
    // flexDirection:'row',
    marginVertical:10
  },
  img:{
    height:30,
    width:30,
    backgroundColor:colors.divider
  },
  cat_txt_view:{
    flex:1,
    marginLeft:10,
    justifyContent:'center'
  },
  cat_txt1:{
    flex:1,
    fontSize:18,
    color:colors.black
  },
cat_txt2:{
    fontSize:16,
    color:colors.greytxt,
    marginTop:5
},
checkbox:{
  alignSelf: "center",
  width:30,
}

});
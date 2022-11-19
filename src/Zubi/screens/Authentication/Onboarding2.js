
import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../../assets/colors";
import { Dark_logo, Light_logo, Onboarding1_image } from "../../assets/Svgs/svg_images";
import Divider from "../../Components/Divider";
import GradientButton from "../../Components/Buttons/GradientButton";
import Text_heading from "../../Components/Text_components/Text_heading";
import Text_normal from "../../Components/Text_components/Text_normal";
import Text_sub_heading from "../../Components/Text_components/Text_sub_heading";
// import AsyncStorage from "@react-native-async-storage/async-storage";

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
export default function Onboarding2({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);

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
            <View style={styles.header}>
                <View style={styles.heading}>
                    <Text_heading text='Earn with BeautyRyder'/>
                </View>
                <View style={styles.subheading}>
                    <Text_sub_heading style={{textAlign:'center'}} text='Lorem Ipsum is simply dummy text of the printing'/>
                </View>
            </View>
            <View style={styles.dropdown_view}>
                <Text_normal text='Where would you like to earn?'/>
                <View style={styles.picker_view}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={{
                            backgroundColor: colors.lightgrey1,borderColor:colors.lightgrey2
                        }}
                        textStyle={{
                        fontSize: 14,
                        color:colors.greytxt
                        }}
                    />
                </View>
            </View>
            <View style={styles.description}>
                <Text_sub_heading style={{textAlign:'center'}} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
            </View>

            <GradientButton end={true} onpress={()=>navigation.navigate('Phone_Auth')} Title1='CONTINUE'/>

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
    padding:20
  },
  header:{
    alignItems:'center'
  },
  heading:{
    marginTop:40
  },
  subheading:{
    marginTop:10
  },
  dropdown_view:{
    marginTop:windowHeight/20
  },
  picker_view:{
    marginTop:10
  },
  description:{
    marginTop:20,
    alignItems:'center'
  },

});
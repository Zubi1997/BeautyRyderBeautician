
import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../../assets/colors";
import Divider from "../../Components/Divider";
import GradientButton from "../../Components/Buttons/GradientButton";
import Text_heading from "../../Components/Text_components/Text_heading";
import PhoneInput from "react-native-phone-number-input";
import Text_sub_heading from "../../Components/Text_components/Text_sub_heading";
import LinearGradient from "react-native-linear-gradient";
import Social_button from "../../Components/Buttons/Social_button";

// import AsyncStorage from "@react-native-async-storage/async-storage";

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Phone_Auth({ navigation }) {
    const [phone, set_phone] = useState('');
    const [value, setValue] = useState(null);


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
            <View style={styles.heading}>
                <Text_heading 
                style={{fontSize:22}}
                text="What's your phone number or email?"/>
                {/* text="bsckjsabdcjkdbcjkdsbcvkdjsb?"/> */}

            </View>
            <View style={styles.dropdown_view}>
                <PhoneInput
                    placeholder={'3008725885'}
                    
                    // ref={phoneInput}
                    defaultCode="IN"
                    autoFocus={true}
                    layout="first"
                    textInputStyle={styles.phonetxt}
                    containerStyle={styles.phoneContainer}
                    textInputProps={{
                    maxLength: 10,
                    returnKeyType:'done',
                    }}
                    codeTextStyle={{color:colors.greytxt}}
                    onChangeFormattedText={(value) => set_phone(value)}
                    value={phone}
                />
                 
            </View>

            <GradientButton  end={false} onpress={()=>navigation.navigate('Phone_otp')} Title1='CONTINUE'/>
            <TouchableOpacity onPress={()=>navigation.navigate('ChooseAccount')}>
              <Text_sub_heading style={{color:colors.purple_text,marginTop:18,fontSize:14}} text='I forgot my account info'/>
            </TouchableOpacity>

            <View style={styles.social_view}>
              <LinearGradient
                  colors={[colors.gradient1,colors.gradient2]}
                  style={{flex:1,padding:5}}
              >
              <Text_sub_heading style={{color:colors.white,marginTop:20,fontSize:18,alignSelf:'center'}} text='Log in with another way'/>
              <Social_button  gradient={false} end={false} Title2='google' onpress={()=>navigation.navigate('Onboarding2')} Title1='Continue With Google'/>
              <Social_button  gradient={false} end={false} Title2='facebook' onpress={()=>navigation.navigate('Onboarding2')} Title1='Continue With Faceebook'/>
              <Social_button  gradient={false} end={false} Title2='apple' onpress={()=>navigation.navigate('Onboarding2')} Title1='Continue With Apple'/>
              
              <View style={styles.footer}>
                  <Text_sub_heading style={{color:colors.white,fontSize:13,marginTop:10}} text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumstandard dummy text ever.'/>
              </View>

              </LinearGradient>
            </View>
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
    // marginBottom:20,
    alignItems:'center'
  },
  heading:{
    marginTop:40,
    alignItems:'center',
    paddingHorizontal:20
  },
  subheading:{
    marginTop:10
  },
  dropdown_view:{
    marginTop:windowHeight/40
  },
  picker_view:{
    marginTop:10
  },
  description:{
    marginTop:20,
    alignItems:'center'
  },
  button_head:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  phonetxt: {
    // textAlign:  'right' ,
    height:60,
    justifyContent:'center',
    alignItems:'center'
    // : 'left',
  },
  phoneContainer: {
    height: 60,
    width: windowWidth -40,
    backgroundColor: '#F7F8FA',
  },
  social_view:{
    flex:1,
    width:windowWidth,
    marginTop:20,
  },
  footer:{
    alignItems:'center',
    justifyContent:'flex-end',
    flex:1,
    marginBottom:20
}
});
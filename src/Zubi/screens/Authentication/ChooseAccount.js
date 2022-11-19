

  import OTPInputView from "@twotalltotems/react-native-otp-input";

  import React, { useEffect, useState } from "react";
  import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image } from "react-native";
  import DropDownPicker from "react-native-dropdown-picker";
  import colors from "../../assets/colors";
  import Divider from "../../Components/Divider";
  import GradientButton from "../../Components/Buttons/GradientButton";
  import Text_heading from "../../Components/Text_components/Text_heading";
  import PhoneInput from "react-native-phone-number-input";
  import Text_sub_heading from "../../Components/Text_components/Text_sub_heading";
  import LinearGradient from "react-native-linear-gradient";
  import Social_button from "../../Components/Buttons/Social_button";
import Font_style from "../../assets/Font_style";
  
  // import AsyncStorage from "@react-native-async-storage/async-storage";
  
  var windowWidth = Dimensions.get('window').width
  var windowHeight=Dimensions.get('window').height

  const ChooseAccount = ({ route, navigation }) => {

 
    const [code, setCode] = useState("");

    // const [loading, setLoading] = useState(false);
  
    useEffect(() => {

      // dispatch({ type: SET_LOADING_FALSE });
    }, []);
  
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollview}>
            <View style={styles.heading}>
                <View style={{marginHorizontal:windowWidth/20}}>
                    <Text_heading style={{marginHorizontal:1}} text="We found these accounts associated with your device"/>
                    <Text_sub_heading style={{color:colors.purple_text,marginTop:20,fontSize:16,textAlign:'center'}} text='Please select one of these accounts'/>
                </View>
            </View>
            <View style={styles.account}>
                <Text style={styles.accounttxt}><Text style={{fontSize:16,fontFamily:Font_style.Poppins_SemiBold}}>Note : </Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>


            <GradientButton end={true}  onpress={()=>navigation.navigate('Phone_otp')} Title1='CONTINUE'/>


        </ScrollView>
    </SafeAreaView>

          
    );
  };
  
  export default ChooseAccount;
  

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
      alignItems:'center'
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
      marginTop:50
    },
    footer:{
      alignItems:'center',
      justifyContent:'flex-end',
      flex:1,
      marginBottom:20
  },
  account:{
    backgroundColor:colors.background_grey,
    padding:10,
    width:windowWidth-40,
    height:windowHeight/10,
    borderRadius:20,
    borderWidth:2,
    borderColor:colors.divider,
    marginTop:50,
    alignItems:'center',
    justifyContent:'center'
  },
  accounttxt:{
    color:colors.greytxt,
    fontSize:15
  }
  });


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
  
  // import AsyncStorage from "@react-native-async-storage/async-storage";
  
  var windowWidth = Dimensions.get('window').width
  var windowHeight=Dimensions.get('window').height

  const Phone_otp = ({ route, navigation }) => {

 
    const [code, setCode] = useState("");

    // const [loading, setLoading] = useState(false);
  
    useEffect(() => {

      // dispatch({ type: SET_LOADING_FALSE });
    }, []);
  
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollview}>
            <View style={styles.heading}>
                <Text_heading text="Enter the 4-digit code sent to you at"/>
                <Text_sub_heading style={{color:colors.purple_text,marginTop:20,fontSize:24}} text='300 4003426'/>
            </View>
            <View style={{width:windowWidth/1.4}}>

            <OTPInputView
              keyboardType="email-address"
              autoFocusOnLoad={true}
              pinCount={4}
              style={styles.optStyling}
              codeInputHighlightStyle={{ borderColor: colors.gradient2 }}
              codeInputFieldStyle={styles.optContainerMobile
              }
              onCodeChanged={(value) => setCode(value)}
            />
            </View>
            <Text_sub_heading style={{color:colors.purple_text,marginTop:20,fontSize:18}} text="I didn't receive a code (30.00)"/>
            <Social_button viewStyle={{backgroundColor:'transparent',borderColor:colors.divider,borderWidth:1,width:'90%'}} style={{color:colors.greytxt}} gradient={false} end={false}  onpress={()=>navigation.navigate('Onboarding2')} Title1='Login with password'/>

            <GradientButton end={false} onpress={()=>navigation.navigate('Password')} Title1='CONTINUE'/>

            <View style={styles.social_view}>

            </View>
        </ScrollView>
    </SafeAreaView>
            // <OTPInputView
            //   keyboardType="email-address"
            //   autoFocusOnLoad={true}
            //   pinCount={4}
            //   style={styles.optStyling}
            //   codeInputHighlightStyle={{ borderColor: colors.gradient2 }}
            //   codeInputFieldStyle={
            //     !isTab ? styles.optContainerMobile : styles.optContainer
            //   }
            //   onCodeChanged={(value) => setCode(value)}
            // />
          
    );
  };
  
  export default Phone_otp;
  

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
      marginHorizontal:windowWidth/15
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
  optContainerMobile: {
    borderWidth: 1,
    borderColor: colors.dullWhite,
    backgroundColor: colors.background_grey,
    borderRadius: 5,
    height: 50,
    width: 40,
    fontSize: 12,
    color: colors.black,
    textAlign: "center",
  },
  optStyling: {
    marginVertical: 30,
    width:  "100%" ,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    fontSize: 12,
    color: colors.black,
    fontWeight: "600",
  },
  });
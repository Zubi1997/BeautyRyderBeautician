

  import OTPInputView from "@twotalltotems/react-native-otp-input";

  import React, { useEffect, useState } from "react";
  import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image, TextInput,TouchableOpacity } from "react-native";
  import DropDownPicker from "react-native-dropdown-picker";
  import colors from "../../assets/colors";
  import Divider from "../../Components/Divider";
  import GradientButton from "../../Components/Buttons/GradientButton";
  import Text_heading from "../../Components/Text_components/Text_heading";
  import PhoneInput from "react-native-phone-number-input";
  import Text_sub_heading from "../../Components/Text_components/Text_sub_heading";
  import LinearGradient from "react-native-linear-gradient";
  import Social_button from "../../Components/Buttons/Social_button";
  import Ionicons from 'react-native-vector-icons/Ionicons';
  
  // import AsyncStorage from "@react-native-async-storage/async-storage";
  
  var windowWidth = Dimensions.get('window').width
  var windowHeight=Dimensions.get('window').height

  const Password = ({ route, navigation }) => {

 
    const [code, setCode] = useState("");

    // const [loading, setLoading] = useState(false);
  
    useEffect(() => {

      // dispatch({ type: SET_LOADING_FALSE });
    }, []);
  
    return (
        <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:20,marginTop:20}}>
            <Ionicons
                name="arrow-back"
                style={{color: '#4C6870', fontSize: 25}}
              />
          </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollview}>
            <View style={styles.heading}>
                <Text_heading text="Welcome back, Mr.John"/>
            </View>
            <View style={styles.input_view}>
            <TextInput
                placeholder={'Enter your password'}
                style={{
                    height:60,
                    width:windowWidth-40,
                    paddingLeft: 10,
                    // color: '#000',
                    borderWidth:2,
                    borderColor:colors.divider,
                    borderRadius:4
                }}
                
                />
            </View>
            <View style={{width:windowWidth-40,marginTop:30}}>
              <Social_button viewStyle={styles.forgot_btn} style={{color:colors.greytxt}} Title1='I forgot my password'/>
              <Social_button viewStyle={styles.forgot_btn} gradient={false} end={false} style={{color:colors.greytxt,}} onpress={()=>navigation.navigate('Onboarding2')} Title1="I can't sign in"/>
            </View>

            <GradientButton end={false} onpress={()=>navigation.navigate('Category')} Title1='CONTINUE'/>

            <View style={styles.social_view}>

            </View>
        </ScrollView>
    </SafeAreaView>
          
    );
  };
  
  export default Password;
  

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
  optContainerMobile: {
    borderWidth: 1,
    borderColor: colors.dullWhite,
    backgroundColor: colors.dullWhite,
    borderRadius: 5,
    height: 50,
    width: 40,
    fontSize: 12,
    color: colors.black,
    textAlign: "center",
  },
  optStyling: {
    marginVertical: 30,
    width:  "85%" ,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    fontSize: 12,
    color: colors.black,
    fontWeight: "600",
  },
  input_view:{
    marginTop:50
  },
  forgot_btn:{
    backgroundColor:'transparent',
    borderColor:colors.divider,
    borderWidth:1,width:'100%',
    borderWidth:2
  }
  });
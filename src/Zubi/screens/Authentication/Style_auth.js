
import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image } from "react-native";
import colors from "../../assets/colors";

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export const Style_auth = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:colors.background,
      padding:20
    },
    scrollview:{
      flex:1,
      marginBottom:20
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
    button_head:{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center',
      alignSelf:'center',
      marginBottom:20
    },
    button_view:{
      marginTop:windowHeight/15,
      width:windowWidth/2,
      height:60,
      alignSelf:'center'
    },
    grey_button_view:{
      marginTop:windowHeight/30,
      width:windowWidth/2,
      height:60,
      alignSelf:'center',
      backgroundColor:colors.grey_btn,
      borderRadius:4
    },
  });
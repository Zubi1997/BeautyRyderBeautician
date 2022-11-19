
import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import colors from "../../assets/colors";
import { Light_logo } from "../../assets/Svgs/svg_images";
// import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Splash({ navigation }) {
 

  useEffect(() => {
      const constructor = async () => {
        setTimeout(() => {
            navigation.navigate('Onboarding1')
        }, 2000);
      };
      constructor();
    }, [])

  return (
        <LinearGradient
            colors={[colors.gradient1,colors.gradient2]}
            style={styles.container}
        >
            <Light_logo />
        </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
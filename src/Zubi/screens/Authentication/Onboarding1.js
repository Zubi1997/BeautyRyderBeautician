
import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions, Image } from "react-native";
import colors from "../../assets/colors";
import { Dark_logo, Light_logo, Onboarding1_image } from "../../assets/Svgs/svg_images";
import Divider from "../../Components/Divider";
import GradientButton from "../../Components/Buttons/GradientButton";
// import AsyncStorage from "@react-native-async-storage/async-storage";

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
export default function Onboarding1({ navigation }) {
 

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
        <ScrollView contentContainerStyle={styles.scrollview}>
            <Image
            resizeMode='stretch'
                source={require('../../assets/pngImages/Onboarding1.png')}
                style={styles.image}
            />
            <View style={styles.mainview}>
                <Dark_logo />
                <GradientButton end={false} onpress={()=>navigation.navigate('Onboarding2')} Title1='CONTINUE'/>
                <View style={{flex:1,justifyContent:'flex-end',}}>
                    <View>
                        <Divider height={2} width={windowWidth}  />
                        <View style={styles.footer}>
                            <Text style={styles.greytext}>Or book a service with BeautyRyder</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.background,
    alignItems:'center'
  },
  scrollview:{
    flex:1,
    alignItems:'center',
  },
  image:{
    width:windowWidth,
    height:windowHeight/2.5
  },
  mainview:{
    flex:1,
    marginTop:windowHeight/15,
    alignItems:'center'
  },
  greytext:{
    color:colors.greytxt,
    fontSize:16
  },
  footer:{
    padding:30,
    alignItems:'center'
  }
});
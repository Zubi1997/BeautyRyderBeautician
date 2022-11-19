import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';



var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Settings({
    style,
    text,
    bold
}) {

    const [manual_time, set_manual_time] = useState('');

    useEffect(()=>{
        // alert(upper_margin)
    },[])


  return (
    <View >
        <Text style={[styles.text,style]}>Settings</Text>
    </View>
    );
}
const styles = StyleSheet.create({


  text:{
    fontSize:24,
    fontFamily:Font_style.Poppins_Bold,
    color:colors.black,
    textAlign:'center'
  }

});

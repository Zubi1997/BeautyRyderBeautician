import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import colors from '../assets/colors';


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Divider({
    height,
    width,
    margintop
}) {

    const [manual_time, set_manual_time] = useState('');

    useEffect(()=>{
        // alert(upper_margin)
    },[])


  return (
    <View style={[styles.line,{height:height,width:width,marginTop:margintop}]}>

    </View>


      );
}
const styles = StyleSheet.create({

  line: {
    backgroundColor:colors.divider,
  },
  

});

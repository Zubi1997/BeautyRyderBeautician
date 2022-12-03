import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import { WebView } from 'react-native-webview';

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Pdf_viewer({
    style,
    text,
}) {

    const [manual_time, set_manual_time] = useState('');

    useEffect(()=>{
        // alert(upper_margin)
    },[])


  return (
    <View >
        <WebView
            source={{uri: 'content://com.android.providers.media.documents/document/document%3A1000017501'}}
            />
    </View>
      );
}
const styles = StyleSheet.create({
  text:{
    fontSize:18,
    fontFamily:Font_style.Poppins_Medium,
    color:colors.greytxt,
  }

});

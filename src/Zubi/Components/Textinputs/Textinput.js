import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import colors from '../../assets/colors';


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Textinput({
    input_value,
    set_input,
    hight,
    inputStyle,
    placeholder
}) {

    const [manual_time, set_manual_time] = useState('');
    const [hightt, set_hightt] = useState(hight || 60);

    useEffect(()=>{
        // alert(upper_margin)
    },[])


  return (
        <TextInput
            placeholder={placeholder}
            style={[{
                height:hightt,
                fontSize:12,
                // lineHeight:26,
                // width:windowWidth-40,
                paddingHorizontal: 10,
                padding:0,
                // color: '#000',
                borderWidth:2,
                borderColor:colors.divider,
                borderRadius:4
            },inputStyle]}
            value={input_value}
            onChangeText={(val)=>set_input(val)}
        />
      );
}
const styles = StyleSheet.create({

  line: {
    backgroundColor:colors.divider,
  },
  

});

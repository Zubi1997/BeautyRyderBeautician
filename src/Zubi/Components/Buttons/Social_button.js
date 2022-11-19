import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors';
import { Apple_icon, Facebook_icon, Google_icon } from '../../assets/Svgs/svg_icons';
import { Style_auth } from '../../screens/Authentication/Style_auth';


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Social_button({
    Title1,
    Title2,
    onpress,
    upper_margin,
    end,
    viewStyle,
    style,
    color,
  }) {

    const [manual_time, set_manual_time] = useState('');

    useEffect(()=>{
        // alert(upper_margin)
    },[])

    const check_svg=()=>{
        
        if(Title2=='google'){
            return(
            <View style={{marginRight:20}}>
               <Google_icon />
            </View>
            )
        }
        else  if(Title2=='facebook'){
            return(
            <View style={{marginRight:20}}>
               <Facebook_icon />
            </View>
            )
        }
        else  if(Title2=='apple'){
            return(
            <View style={{marginRight:20}}>
               <Apple_icon />
            </View>
            )
        }
       
    }
  return (
    <>
    {end?
        <View style={Style_auth.button_head}>
            <View style={Style_auth.grey_button_view}>
                    <TouchableOpacity onPress={()=>onpress()} style={[styles.submit,{marginTop:upper_margin}]}>
                        {Title2=='none'?null
                        :
                        <>
                        {check_svg()}
                        </>
                        }
                        <Text style={[styles.submit_txt,style]}>{Title1}</Text>
                    </TouchableOpacity>
            </View>
        </View>
        :
        <View style={[Style_auth.grey_button_view,viewStyle]}>
                <TouchableOpacity onPress={()=>onpress()} style={[styles.submit,{marginTop:upper_margin}]}>
                    {Title2=='none'?null
                    :
                    <>
                    {check_svg()}
                    </>
                    }
                    <Text style={[styles.submit_txt_pruple,style]}>{Title1}</Text>
                </TouchableOpacity>
        </View>
    }
    </>

      );
}
const styles = StyleSheet.create({

  container: {
    flex:1
  },
  submit:{
    // backgroundColor:colors.nextbtn,
    flexDirection:'row',
    // padding:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    width:'100%'
    
  },
  submit_txt:{
    color:'white',
    fontWeight:'600',
    fontSize:20,
  },
  gradient_view:{
    borderRadius:4,
    width:'100%',
    height:'100%'
},
submit_txt_pruple:{
  color:colors.purple_text,
  fontWeight:'600',
  fontSize:20,
}

});

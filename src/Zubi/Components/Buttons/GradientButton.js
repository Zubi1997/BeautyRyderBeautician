import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors';
import { Style_auth } from '../../screens/Authentication/Style_auth';


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function GradientButton({
    Title1,
    Title2,
    onpress,
    upper_margin,
    end,
    color,
    style
}) {

    const [manual_time, set_manual_time] = useState('');

    useEffect(()=>{
        // alert(upper_margin)
    },[])

    const check_svg=()=>{
        
        if(Title2=='Add_transaction'){
            return(
            <View style={{marginRight:10}}>
                {/* <Add_transaction /> */}
            </View>
            )
        }
       
    }
  return (
    <>
    {end?
        <View style={Style_auth.button_head}>
            <View style={[Style_auth.button_view,style]}>
                <LinearGradient
                    colors={[colors.gradient1,colors.gradient2]}
                    style={styles.gradient_view}
                >
                    <TouchableOpacity onPress={()=>onpress()} style={[styles.submit,{marginTop:upper_margin}]}>
                        {Title2=='none'?null
                        :
                        <>
                        {check_svg()}
                        </>
                        }
                        <Text style={styles.submit_txt}>{Title1}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
        :
        <View style={[Style_auth.button_view,style]}>
            <LinearGradient
                colors={[colors.gradient1,colors.gradient2]}
                style={styles.gradient_view}
            >
                <TouchableOpacity onPress={()=>onpress()} style={[styles.submit,{marginTop:upper_margin}]}>
                    {Title2=='none'?null
                    :
                    <>
                    {check_svg()}
                    </>
                    }
                    <Text style={styles.submit_txt}>{Title1}</Text>
                </TouchableOpacity>
            </LinearGradient>
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
    fontSize:18
  },
  gradient_view:{
    borderRadius:4,
    width:'100%',
    height:'100%'
}

});

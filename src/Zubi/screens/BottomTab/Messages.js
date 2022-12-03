import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import Header from '../../Components/MainHeader';
import Dp from '../../assets/pngImages/Onboarding1.png'
// import Star from '../../assets/pngImages/star.png'
// import StarRating from 'react-native-star-rating';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const a = [
    {
        name : 'Sophia Smith',
        msg : 'Nice Double Room with Own Bathroom',
        time : '6:53 PM - 25, Oct 2022',
        sender: true
    },
    {
        name : 'Keshav Maharaj',
        msg : 'It is a long established fact that a reader ',
        time : '6:53 PM - 25, Oct 2022',
        sender: false
    },
    {
        name : 'Sophia Smith',
        msg : 'Nice Double Room with Own Bathroom',
        time : '6:53 PM - 25, Oct 2022',
        sender: true
    },
    {
        name : 'Keshav Maharaj',
        msg : 'It is a long established fact that a reader ',
        time : '6:53 PM - 25, Oct 2022',
        sender: false
    },
    {
        name : 'Sophia Smith',
        msg : 'Nice Double Room with Own Bathroom',
        time : '6:53 PM - 25, Oct 2022',
        sender: true
    },
    {
        name : 'Keshav Maharaj',
        msg : 'It is a long established fact that a reader ',
        time : '6:53 PM - 25, Oct 2022',
        sender: false
    },
]

const Tab = createMaterialTopTabNavigator();
 

export default function Messages(props) {

    const [manual_time, set_manual_time] = useState('');
    const [starCount, setstarCount] = useState(5);
    
    useEffect(()=>{
        // alert(upper_margin)
    },[])


  return (
    <>
        <Header 
            onpress={()=>props.navigation.openDrawer()}
            toggle_change={(val)=>console.log(val)}
        />      
        <ScrollView style={styles.cont} >
            <View style={styles.innerCont} >
                {a.map((item,index)=>{
                    return(
                        <>
                        {item.sender ?
                            <View  style={{flexDirection : 'row',marginTop:10}} >
                                <Image
                                    source = {Dp}
                                    style= { styles.cardPro }
                                />
                                <View style={{width:'75%'}} >
                                    <View style={[styles.card,{marginBottom : a.length - 1 === index ? 10 : 0  }]} >
                                        <View style={{}} >
                                            <Text
                                                style={styles.head}
                                            >{item.name}</Text>
                                            <Text
                                                style={[styles.pra,{fontSize:10}]}
                                            >{item.msg}</Text>
                                        </View>
                                    </View>
                                    <Text style={[styles.pra,{fontSize:8,marginLeft:10,marginTop:5,color:'#9D9B9B'}]} >{item.time}</Text>
                                </View>
                            </View>
                        :
                        <View  style={{flexDirection : 'row',marginTop:10,justifyContent:'flex-end'}} >
                           
                            <View style={{width:'75%'}} >
                                <View style={[styles.borCard,{marginBottom : a.length - 1 === index ? 10 : 0  }]} >
                                    <View style={{}} >
                                        <Text
                                            style={[styles.head,{color:'#E33895'}]}
                                        >{item.name}</Text>
                                        <Text
                                            style={[styles.pra,{fontSize:10}]}
                                        >{item.msg}</Text>
                                    </View>
                                </View>
                                <Text style={[styles.pra,{fontSize:8,marginLeft:40,marginTop:5,color:'#9D9B9B'}]} >{item.time}</Text>
                            </View>
                            <Image
                                source = {Dp}
                                style= { styles.cardPro }
                            />
                        </View>
                    }
                    </>
                    )
                })}
            </View>
        </ScrollView> 
        
    </>
    );
}
const styles = StyleSheet.create({

    cont : {
        // flex: 10  ,
        backgroundColor : '#fff',
        },  
    innerCont : {flex:1,width:'88%',alignSelf:'center',paddingTop:15},
    card : {
        maxWidth:'85%',
        padding:12,
        // borderBottomWidth:0.8,
        // borderBottomColor:'#D8D7D7',
        // marginTop:10,
        marginLeft:8,
        backgroundColor:'#F6F5F5',
        borderRadius:10
    },
    borCard : {
        maxWidth:'85%',
        padding:12,
        borderWidth:1,
        // borderBottomColor:'#D8D7D7',
        // marginTop:10,
        borderColor:'#E33895',
        marginRight:8,
        alignSelf:'flex-end',
        backgroundColor:'#fff',
        borderRadius:10
    },
    text:{
        fontSize:24,
        fontFamily:Font_style.Poppins_Bold,
        color:colors.black,
        textAlign:'center'
    },
    cardPro : {width:38,height:38,borderRadius:50},
    pra:{
        // marginTop:10,
        // width:'95%',
        color:'#777777',
        fontWeight:'400',
        fontFamily:Font_style.Poppins_Regular
    },
    head:{
        fontSize:12,
        fontFamily:Font_style.Poppins_Medium,
        fontWeight:'500',
        color:'#79489D',
        width:'75%'
    },
    date:{
        fontSize:10,
        fontFamily:Font_style.Poppins_Regular,
        fontWeight:'400',
        color:'#E33895'
    }

});

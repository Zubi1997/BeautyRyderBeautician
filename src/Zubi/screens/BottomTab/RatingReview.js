import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import Header from '../../Components/MainHeader';
import Dp from '../../assets/pngImages/Onboarding1.png'
import Star from '../../assets/pngImages/star.png'
// import StarRating from 'react-native-star-rating';
import { Rating, AirbnbRating } from 'react-native-ratings';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

 
export default function Ratings(props) {

    const [manual_time, set_manual_time] = useState('');
    const [starCount, setstarCount] = useState(5);
    const a =[1,2,3,4,5,6,7,8]
    useEffect(()=>{
        // alert(upper_margin)
    },[])


  return (
    <View >
        <Header
            onpress={()=>props.navigation.openDrawer()}
            toggle_change={(val)=>console.log(val)}
            />   
        <ScrollView style={styles.cont} >
            <View style={styles.innerCont} >
                <Text  style={[styles.pra,{fontSize:20,marginTop:5,fontWeight:'600',color:'#E33895',fontFamily:Font_style.Poppins_Bold}]} >Rating and Review</Text>
                <Text style={[styles.pra,{fontSize:16,marginTop:0}]} >4.9 - 158 Review</Text>
                {a.map((item,index)=>{
                    return(
                        <>
                            <View style={[styles.card,{marginBottom : a.length - 1 === index ? 10 : 0 }]} >
                                <View style={{flexDirection:'row'}} >
                                    <Image
                                        source = {Dp}
                                        style= { styles.cardPro }
                                    />
                                    <View style={{marginLeft:10}} >
                                        <Text
                                            style={{
                                                fontSize:14,fontFamily:Font_style.Poppins_Bold,color:'#79489D'
                                            }}
                                        >Sophia Smith</Text>
                                        <Rating
                                                type='custom'
                                                ratingImage={Star}
                                                ratingColor='#fff'
                                                // ratingBackgroundColor='#fff'
                                                ratingCount={5}
                                                imageSize={12}
                                                onFinishRating={(r)=>setstarCount(r)}
                                                style={{marginRight:35 }}
                                            />
                                    </View>
                                </View>
                                <Text
                                    style={styles.pra}
                                >Lorem Ipsum is simply dummy text of ing and type 
                                    setting industry. It is a long established fact that a 
                                    reader will be distracted by the readable content of a 
                                    page when looking at its layout.</Text>
                            </View>
                            { a.length - 1 === index && 
                                <TouchableOpacity  onPress={()=>{}} style={{alignSelf:'center' , marginTop: 20 ,marginBottom:100 }} >
                                    <Text style={[styles.pra,{fontSize:16,fontWeight:'400',color:'#E33895'}]} >VIEW MORE</Text>
                                </TouchableOpacity>
                            }
                        </>
                    )
                })}
            </View>
        </ScrollView> 

       

    </View>
    );
}
const styles = StyleSheet.create({

    cont : {
        // flex: 10  ,
        backgroundColor : '#fff',
        },  
    innerCont : {flex:1,width:'88%',alignSelf:'center',paddingTop:15},
    card : {width:'100%',padding:12,borderWidth:0.8,borderColor:'#D8D7D7',marginTop:10,borderRadius:10},
  text:{
    fontSize:24,
    fontFamily:Font_style.Poppins_Bold,
    color:colors.black,
    textAlign:'center'
  },
  cardPro : {width:45,height:45,borderRadius:50},
    pra:{
        marginTop:10,
        width:'95%',
        color:'#9D9B9B',
        fontWeight:'400',
        fontFamily:Font_style.Poppins_Regular
    },

});

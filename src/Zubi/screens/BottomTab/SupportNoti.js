import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import Header from '../../Components/MainHeader';
import Dp from '../../assets/pngImages/Onboarding1.png'
import Star from '../../assets/pngImages/star.png'
// import StarRating from 'react-native-star-rating';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const a =[1,2,3,4,5,6,7,8]

const Tab = createMaterialTopTabNavigator();

const Supp = (props) => {
    return(
        <ScrollView style={styles.cont} >
            <View style={styles.innerCont} >
                
                {a.map((item,index)=>{
                    return(
                        <>
                            <View style={[styles.card,{marginBottom : a.length - 1 === index ? 10 : 0 }]} >
                                <View style={{flexDirection:'row'}} >
                                    <Image
                                        source = {Dp}
                                        style= { styles.cardPro }
                                    />
                                    <View style={{marginLeft:10,width:'92%'}} >
                                        <View style={{flexDirection:'row',alignItems:'center'}} >
                                             <Text
                                                style={styles.head}
                                            >Lorem Ipsum is simply dummy text site</Text>
                                            <Text
                                                style={styles.date}
                                            >  25, Oct 2022</Text>
                                       
                                        </View>
                                        <Text
                                            style={[styles.date,{color:'#B6B6B6',marginTop:-4}]}
                                        >Technical help support
                                        </Text>
                                        <Text
                                            style={[styles.date,{color:'#B6B6B6',marginTop:-4}]}
                                        >Online
                                        </Text>
                                        <Text
                                            style={[styles.pra,{color:'#79489D'}]}
                                        >-Ok I'm waiting for you!.....</Text>
                                    </View>

                                </View>
 
                            </View>
                            { a.length - 1 === index && 
                                <TouchableOpacity  onPress={()=>props.navigation.navigate('Chat')} style={{alignSelf:'center' , marginTop: 20 ,marginBottom:100 }} >
                                    <Text style={[styles.pra,{fontSize:16,fontWeight:'400',color:'#E33895'}]} >VIEW MORE</Text>
                                </TouchableOpacity>
                            }
                        </>
                    )
                })}
            </View>
        </ScrollView> 
    )
}

const Notification = (props) => {
    return(
        <ScrollView style={styles.cont} >
            <View style={styles.innerCont} >
                
                {a.map((item,index)=>{
                    return(
                        <>
                        <View style={[styles.card,{marginBottom : a.length - 1 === index ? 10 : 0 }]} >
                            <View style={{flexDirection:'row'}} >
                                <Image
                                    source = {Dp}
                                    style= { styles.cardPro }
                                />
                                <View style={{marginLeft:10,width:'92%'}} >
                                    <View style={{flexDirection:'row',alignItems:'center'}} >
                                         <Text
                                            style={styles.head}
                                        >Lorem Ipsum is simply dummy text site</Text>
                                        <Text
                                            style={[styles.date,{}]}
                                        >  25, Oct 2022</Text>
                                    </View>
                                    <View>
                                        <Text
                                            style={[styles.pra,{fontSize:10}]}
                                        > Nice Double Room with Own Bathroom Lorem ipsum dolor 
                                        site amet concateur more laret concait </Text>
                                    </View>
                                    
                                </View>

                            </View>

                        </View>
                        { a.length - 1 === index && 
                            <TouchableOpacity  onPress={()=>props.navigation.navigate('Chat')} style={{alignSelf:'center' , marginTop: 20 ,marginBottom:100 }} >
                                <Text style={[styles.pra,{fontSize:16,fontWeight:'400',color:'#E33895'}]} >VIEW MORE</Text>
                            </TouchableOpacity>
                        }
                    </>
                    )
                })}
            </View>
        </ScrollView> 
    )
}
 

export default function Settings(props) {

    const [manual_time, set_manual_time] = useState('');
    const [starCount, setstarCount] = useState(5);
    const a =[1,2,3,4,5,6,7,8]
    useEffect(()=>{
        // alert(upper_margin)
    },[])


  return (
    <>
        <Header/>      
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    tabBarInactiveTintColor : '#B6B6B6',
                    tabBarIndicatorStyle : { backgroundColor: '#E33895' } ,
                    tabBarIndicatorContainerStyle : { width:'80%' , left : '5%' },
                    tabBarLabelStyle: { fontSize: 16,fontWeight:'500' , fontFamily:Font_style.Poppins_Medium },
                    tabBarStyle: { backgroundColor: '#fff' },
                }}
            >
                <Tab.Screen 
                    name="Supp"
                    component={Supp}
                    options={{ tabBarLabel: 'Support Team (3)' }}    
                />
                <Tab.Screen 
                    name="Notification"
                    component={Notification}
                    options={{ tabBarLabel: 'Notifications (6)' }}    
                />
        </Tab.Navigator>
        
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
        width:'100%',
        padding:12,
        borderBottomWidth:0.8,
        borderBottomColor:'#D8D7D7',
        marginTop:10,
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
        marginTop:10,
        width:'95%',
        color:'#9D9B9B',
        fontWeight:'400',
        fontFamily:Font_style.Poppins_Regular
    },
    head:{
        fontSize:12,
        fontFamily:Font_style.Poppins_Regular,
        fontWeight:'400',
        color:'#4F453C',
        width:'75%'
    },
    date:{
        fontSize:10,
        fontFamily:Font_style.Poppins_Regular,
        fontWeight:'400',
        color:'#E33895'
    }

});

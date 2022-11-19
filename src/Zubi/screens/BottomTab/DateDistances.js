import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, Image, View, Switch, Modal, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator, TextInput} from 'react-native';
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import Icons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Dp from '../../assets/pngImages/Onboarding1.png'
import LinearGradient from 'react-native-linear-gradient';
import Star from '../../assets/pngImages/star.png'
import { Rating, AirbnbRating } from 'react-native-ratings';



var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height




export default function Settings(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () =>{ 
        set_photo_detail_modal(!photo_detail_modal)
        setIsEnabled(previousState => !previousState)};
    const [photo_detail_modal, set_photo_detail_modal] = useState(true);
    const [starCount, setstarCount] = useState(0);
  

    useEffect(()=>{
        // alert(upper_margin)
    },[])


  return (
    <View style={{backgroundColor:'#fff',flex:1}} >
        <SafeAreaView>
          <View style={styles.card} >
            <View style={{marginLeft:10,alignItems:'center',justifyContent:'center',flexDirection:'row'}} >
                <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                    <AntDesign name = {'arrowleft'} size={28} color={'#000000'} />
                </TouchableOpacity>
                <Text style={{
                    color:'#000000',
                    fontSize:20,
                    fontWeight:'600',
                    fontFamily:Font_style.Poppins_Bold,
                }} >  Date and Distances</Text>
            </View>
        
              <View style={{marginRight:20}} >
                <TouchableOpacity onPress={()=>alert('alert')} >
                  <Icons name = {'ios-menu-outline'} size={38} color={'#9D9B9B'} />
                </TouchableOpacity>
              </View>
          </View>
        </SafeAreaView>
        <View style={{backgroundColor:'#fff'}} >
            <View style={[styles.card,{justifyContent:'space-between'}]} >
                <View style={{marginLeft:20}} >
                    <Text style={
                    [styles.title,{
                        color : '#9D9B9B',
                        fontWeight : '400',
                        fontFamily : Font_style.Poppins_Regular
                    }]
                    } >24-Hour Time</Text>
                    
                </View>
                <View style={{marginRight:15}} >
                    <Switch
                        trackColor={{ false: "#767577", true: "#DFDFDF" }}
                        thumbColor={isEnabled ? "#E33895" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </View>
        <View style={{backgroundColor:'#fff'}} >
            <View style={[styles.card,{justifyContent:'space-between'}]} >
                <View style={{marginLeft:20}} >
                    <Text style={
                    [styles.title,{
                        color : '#9D9B9B',
                        fontWeight : '400',
                        fontFamily : Font_style.Poppins_Regular
                    }]
                    } >Distances</Text>
                    <Text style={styles.num} >Kilometres</Text>
                </View>
                
            </View>
        </View>

        <Modal
            animationType="slide"
            transparent={true}
            visible={photo_detail_modal}
            onRequestClose={() => {
            set_photo_detail_modal(!photo_detail_modal);
            }}
        >
            <View  style={styles.centeredView}>
                <Text style={[styles.title,{marginTop:70,fontSize:24,fontWeight:'700',color:'#fff'}]} >Give Feedback</Text>
                <View style={styles.modalView} >
                    <View style={{
                        flexDirection:'row',height:80,
                        justifyContent:'center'
                    }} >
                        <Image
                            source={Dp}
                            style={styles.dp}
                        />
                        <LinearGradient
                            colors={  ['#E33895','#79489D']}
                            style={styles.cross}
                        >
                            <TouchableOpacity onPress={()=>set_photo_detail_modal(!photo_detail_modal)} >
                                <Entypo name = {'cross'} size={28} color={'#fff'} />
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <Text style={[styles.title,{alignSelf:'center',fontSize:24,fontWeight:'700'}]} >Keshav Maharaj</Text>
                    <Text style={[styles.title,{alignSelf:'center',fontSize:24,fontWeight:'500',fontFamily:Font_style.Poppins_Medium,marginTop:5,color:'#E33895'}]} >Please Rate your Experience</Text>
                    <Rating
                        onFinishRating={(r)=>{
                            setstarCount(r)}}
                        style={{ paddingVertical: 10 }}
                    />
                    <View style={{width:'95%',alignSelf:'center'}} >
                        <Text style={[styles.title,{fontSize:16,fontWeight:'500',fontFamily:Font_style.Poppins_Regular,marginTop:10}]} >  Additional Comments</Text>
                        <View style={styles.continput} >
                            <TextInput
                                placeholder='Type here...'
                                multiline
                                placeholderTextColor={'#9D9B9B'}
                                style={{color:'#9D9B9B',marginTop:-10}}
                            />
                        </View>
                        <Text style={[styles.title,{fontSize:8,fontWeight:'400',fontFamily:Font_style.Poppins_Medium,marginTop:5,color:'#E33895'}]} >*Type 250 to 300 words</Text>
                        <LinearGradient
                            colors={  ['#E33895','#79489D']}
                            style={styles.btn}
                        >
                            <TouchableOpacity style={styles.inside} >
                                <Text style={[styles.title,{fontSize:20,fontWeight:'500',fontFamily:Font_style.Poppins_Medium,marginTop:5,color:'#fff'}]} >PUBLISH FEEDBACK</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    
                </View> 
            </View>
        </Modal>

    </View>
    );
}
const styles = StyleSheet.create({
    btn:{width:'100%',height:60,borderRadius:4,marginTop:10},
    inside : {width:'100%',height:60,justifyContent:'center',alignItems:'center'},
    centeredView: {
        flex: 2,
        backgroundColor:'#000000D9',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    continput:{
        backgroundColor:'#EDEDED',
        height:172,
        width:'100%',
        borderWidth:1,
        borderColor:'#D9D9D9',
        padding:8,
    },
    dp:{width:150,height:150,borderRadius:100,borderWidth:5,borderColor:'#fff',alignSelf:'center',top:-45},
    modalView: {
        height: 523,
        width: '90%',
        position:'absolute',
        bottom: 20,
        //   justifyContent:'center',
        backgroundColor: "#fff",
        // alignItems: "center",
      
      },
  text:{
    fontSize:24,
    fontFamily:Font_style.Poppins_Bold,
    color:colors.black,
    textAlign:'center'
  },
  card:{
    height:75,
    width:'100%',
    backgroundColor:'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth:1,
    borderBottomColor:'#DCDCDC'
  },
  title:{
    fontSize:20,fontWeight:'600',fontFamily:Font_style.Poppins_Bold,color:'#79489D'
  },
  num:{color:'#E33895',marginTop:-5,fontSize:14,fontFamily:Font_style.Poppins_Medium,fontWeight:'400'},
  cross : {width:28,height:28,alignItems:'center',alignSelf:'center',position:'absolute',right:-8,top:-8,borderRadius:50}

});

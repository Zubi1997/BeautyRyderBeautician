import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import Icons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';



var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height


const OptButton = ({ label , sublabel , onPress }) => (
  <View style={{backgroundColor:'#fff',flex:1}} >
    <View style={[styles.card,{justifyContent:'space-between'}]} >
        <View style={{marginLeft:20}} >
            <Text style={
              [styles.title,{
                color : label === 'Phone Number' ? '#79489D' : '#9D9B9B',
                fontWeight : label === 'Phone Number' ? '500' : '400',
                fontFamily : label === 'Phone Number' ? Font_style.Poppins_Bold : Font_style.Poppins_Regular
              }]
            } >{label}</Text>
            {sublabel &&
              <Text style={styles.num} >{sublabel}</Text>
            }
        </View>
        <View style={{marginRight:25}} >
          <TouchableOpacity onPress={onPress} >
            <Entypo name={'chevron-thin-right'} size={22} color = {'#9D9B9B'} />
          </TouchableOpacity>
        </View>
    </View>
  </View>
)

export default function Settings(props) {

    const [manual_time, set_manual_time] = useState('');

    useEffect(()=>{
        // alert(upper_margin)
    },[])

    const array = [
      {
        label : 'Phone Number',
        sublabel : '+92 300 8725885',
        click : ()=>alert('sdlfldn')
      },
      {
        label : 'Do not lock the screen',
        click : ()=>alert('sdlfldn')
      },
      {
        label : 'Notifications',
        click : ()=>alert('sdlfldn')
      },
      {
        label : 'Language',
        click : ()=>alert('sdlfldn')
      },
      {
        label : 'Date and Distances',
        click : ()=>props.navigation.navigate('DateDistances')
      },
      {
        label : 'Night Mode',
        click : ()=>alert('sdlfldn')
      },
      {
        label : 'Navigator',
        click : ()=>alert('sdlfldn')
      }, 
      {
        label : 'Log Out',
        click : ()=>alert('sdlfldn')
      },
    
    
    ]
    

  return (
    <View style={{backgroundColor:'#fff',flex:1}} >
        <SafeAreaView>
          <View style={styles.card} >
              <Text style={{
                color:'#000000',
                fontSize:20,
                fontWeight:'600',
                fontFamily:Font_style.Poppins_Bold,
                marginLeft:20
              }} >Settings</Text>
              <View style={{marginRight:20}} >
                <TouchableOpacity onPress={()=>alert('smfsdkf')} >
                  <Icons name = {'ios-menu-outline'} size={38} color={'#9D9B9B'} />
                </TouchableOpacity>
              </View>
          </View>
        </SafeAreaView>
        <ScrollView>
          {array.map((item)=>{
            return(
              <OptButton
                  label={item.label}
                  sublabel = {item.sublabel ? item.sublabel : '' }
                  onPress = {item.click}
              />
            )
          }) }
       </ScrollView>

    </View>
    );
}
const styles = StyleSheet.create({


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
  num:{color:'#E33895',marginTop:-5,fontSize:14,fontFamily:Font_style.Poppins_Medium,fontWeight:'400'}

});

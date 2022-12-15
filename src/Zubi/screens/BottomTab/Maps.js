
import React, { useState } from "react";
import { StyleSheet, Text, View,Dimensions, Modal, ScrollView, TouchableOpacity,Image } from "react-native";
import MapView from "react-native-maps";
import colors from "../../assets/colors";
import GradientButton from "../../Components/Buttons/GradientButton";
import HeaderWithLogo from "../../Components/MainHeader";
import Rating_stars from "../../Components/Rating_stars";
import Text_heading from "../../Components/Text_components/Text_heading";
import Text_sub_heading from "../../Components/Text_components/Text_sub_heading";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Textinput from "../../Components/Textinputs/Textinput";
import Font_style from "../../assets/Font_style";
import Divider from "../../Components/Divider";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Review_modal from "../../Components/Review_modal";


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
export default function Maps({navigation}) {
  
  const [modal_state, set_modal_state] = useState(0);
  const [starting_location, set_starting_location] = useState('');
  const [destination_location, set_destination_location] = useState('');
  const [photo_detail_modal, set_photo_detail_modal] = useState(false);


  const check_modal_state=()=>{
    if(modal_state==0){
      console.log('hbnjhgvhbjhb hjbjvhkn');
      return(
        <View></View>
      )
    }
    else if(modal_state==1 || modal_state==5){
      return(
      <View style={{backgroundColor:colors.white,alignItems:'center',width:windowWidth/1.2,paddingBottom:20}}>
        <View style={styles.profile_img}>
          <View style={styles.profile_img_inner}>
          </View>
        </View>
        <Text_heading style={{color:colors.purple_text}} text='Keshav Maharaj' />
        <Text_sub_heading text='Service Detail' style={{color:colors.primary}}/>
        <View style={{backgroundColor:'red'}}>
          <Rating_stars  />
        </View>
        {modal_state==5?
        <GradientButton style={{width:'90%',marginTop:20}} end={false} onpress={()=>set_modal_state(6)}  Title1='Start Service'/>
        :
        <>
          <GradientButton style={{width:'90%',marginTop:20}} end={false} onpress={()=>set_modal_state(2)}  Title1='ACCEPT JOB'/>
          <View style={{paddingTop:10}}>
              <Text_sub_heading style={{fontSize:16,color:colors.lightgrey3}} text='Swipe to Reject'/>
          </View>
        </>
        }
      </View>
      )
    }
    else if(modal_state==2 || modal_state==6){
      return(
        <View style={{backgroundColor:colors.white,alignItems:'center',width:windowWidth/1.2,maxHeight:'70%',paddingHorizontal:20,paddingBottom:20}}>
            
            <View style={styles.profile_img}>
              <View style={styles.profile_img_inner}>
              </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}}>

              <Text_heading style={{color:colors.purple_text}} text='Keshav Maharaj' />

              <View style={{backgroundColor:colors.divider,height:1,width:'80%',alignSelf:'center'}}>
                  <View style={{backgroundColor:colors.purple_text,width:'50%',height:3,alignSelf:'center',marginTop:-1}}></View>
              </View>

              <View style={styles.description}>
                  <Text_sub_heading style={{textAlign:'center',fontSize:13}} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis velit vitae enim gravida lacinia."/>
              </View>

              <View style={{flexDirection:'row',alignItems:'center'}}>

                  <View style={{alignItems:'center'}}>
                    <View style={{width:15,height:15,borderRadius:50,borderWidth:1,borderColor:colors.purple_text}}></View>
                    <View style={{width:2,height:20,borderStyle:'dotted',borderWidth:1,borderColor:colors.purple_text}}></View>
                    <EvilIcons name='location' size={20} color={colors.purple_text} />
                  </View>

                  <View style={{flex:1,marginLeft:10}}>
                      <Textinput 
                        hight={26} i
                        nput_value={starting_location} 
                        set_input={set_starting_location}
                        placeholder=''
                      />
                      <Textinput 
                        inputStyle={{marginTop:10,width:'100%'}} 
                        hight={26} 
                        input_value={destination_location} 
                        set_input={set_destination_location}
                        placeholder=''
                      />
                  </View>

              </View>

              <View style={{marginTop:10,alignSelf:'flex-start'}}>
                  <Text_sub_heading style={{fontSize:14,fontFamily:Font_style.Poppins_SemiBold}} text="Service name"/>
                  <Text_sub_heading style={{fontSize:13,fontFamily:Font_style.Poppins_Medium}} text="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
              </View>

              <View style={{marginTop:10,flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                  <Text_sub_heading style={{fontSize:14,fontFamily:Font_style.Poppins_SemiBold}} text="Service Price"/>
                  <Text_sub_heading style={{fontSize:14,fontFamily:Font_style.Poppins_Medium}} text="10$"/>
              </View>
              <Divider height={1} width='100%' />
              <View style={{marginTop:10,flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                  <Text_sub_heading style={{fontSize:14,fontFamily:Font_style.Poppins_SemiBold}} text="Distance 10 km x 2"/>
                  <Text_sub_heading style={{fontSize:14,fontFamily:Font_style.Poppins_Medium}} text="20$"/>
              </View>
              <Divider height={1} width='100%' />
              <View style={{marginTop:10,flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                  <Text_sub_heading style={{fontSize:10,fontFamily:Font_style.Poppins_Medium}} text="Note: If distance more the 2km then $2 will be charge."/>
              </View>
              <Divider height={1} width='100%' />
              <View style={{marginTop:10,flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                  <Text_sub_heading style={{fontSize:14,fontFamily:Font_style.Poppins_SemiBold,color:colors.primary}} text="Total:"/>
                  <Text_sub_heading style={{fontSize:14,fontFamily:Font_style.Poppins_SemiBold,color:colors.primary}} text="20$"/>
              </View>

              {/* <Text_sub_heading text='Service Detail' style={{color:colors.primary}}/> */}
              {modal_state==6?
              <GradientButton style={{width:'100%',marginTop:20}} end={false} onpress={()=>set_photo_detail_modal(true)}  Title1='Complete Job'/>
              :
              <>
                <GradientButton style={{width:'100%',marginTop:20}} end={false} onpress={()=>set_modal_state(3)}  Title1='ACCEPT JOB'/>
                <View style={{paddingTop:10,alignSelf:'center'}}>
                    <Text_sub_heading style={{fontSize:16,color:colors.lightgrey3}} text='Swipe to Reject'/>
                </View>
              </>
              }
            </ScrollView>
          </View>
      )
    }
    else if(modal_state==3){
      return(
                <GradientButton style={{width:'80%',marginTop:20,marginBottom:30}} end={false} onpress={()=>set_modal_state(4)}  Title1='GO to customer home'/>

      )
    }
    else if(modal_state==4){
      return(
      <View style={{backgroundColor:colors.white,alignItems:'center',width:windowWidth/1.2,paddingBottom:20}}>
          <View style={styles.profile_img}>
            <View style={styles.profile_img_inner}>
            </View>
          </View>
          <Text_heading style={{color:colors.purple_text}} text='Keshav Maharaj' />
          <Text_sub_heading text='Service Detail' style={{color:colors.primary}}/>
          <View style={{backgroundColor:'red'}}>
            <Rating_stars  />
          </View>

          <View style={{flexDirection:'row',alignItems:'center',marginTop:20,paddingHorizontal:10}}>
            <View style={{flex:1}}>
              <GradientButton style={{width:'100%',marginTop:0}} end={false} onpress={()=>set_modal_state(5)}  Title1='ARRIVED'/>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Messages')} style={{height:60,width:50,borderWidth:2,borderColor:colors.primary,borderRadius:4,alignItems:'center',justifyContent:'center',marginLeft:10}}>
              <MaterialCommunityIcons name = {'message-text-outline'} size={40} color={colors.primary} />
            </TouchableOpacity>
            <View style={{height:60,width:50,borderWidth:2,borderColor:colors.primary,borderRadius:4,alignItems:'center',justifyContent:'center',marginLeft:10,}}>
              <Ionicons name = {'call-outline'} size={40} color={'#9D9B9B'} />
            </View>
          </View>


      </View>
      )
    }
  }
  return (
    <View style={styles.container}>

    {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <HeaderWithLogo
          onpress={()=>navigation.openDrawer()}
          toggle_change={(val)=>val?set_modal_state(1):set_modal_state(0)}
      />
      {check_modal_state()}
      <Modal
            animationType="slide"
            transparent={true}
            visible={photo_detail_modal}
            onRequestClose={() => {
            set_photo_detail_modal(!photo_detail_modal);
            }}
        >
          <Review_modal 
            modal={photo_detail_modal} 
            set_modal={set_photo_detail_modal}
            btn_click={()=>{set_photo_detail_modal(false),set_modal_state(0)}}
          />
      </Modal>

    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent:'space-between',
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // alignItems:'center',
    // justifyContent:'center'
  },
  profile_img:{
    height:windowWidth/4,
    width:windowWidth/4,
    borderRadius:100,
    backgroundColor:colors.white,
    padding:5,
    marginTop:-windowWidth/8,
  },
  profile_img_inner:{
    height:'100%',
    width:'100%',
    borderRadius:100,
    backgroundColor:colors.divider,
    padding:5
  },
  description:{
    marginTop:10,
    alignItems:'center',
    // marginHorizontal:10
  },
  
});
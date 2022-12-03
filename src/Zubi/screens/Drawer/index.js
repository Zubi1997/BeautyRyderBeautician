import {View,Text, Dimensions, TouchableOpacity, ImageBackground,StyleSheet} from 'react-native';
// import TextWithIcon from '../../../Components/TextWithIcon';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import LinearGradient from "react-native-linear-gradient";
import colors from '../../assets/colors';
import Text_heading from '../../Components/Text_components/Text_heading';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import { Logout_icon } from '../../assets/Svgs/svg_icons';
import Divider from '../../Components/Divider';
import Text_sub_heading from '../../Components/Text_components/Text_sub_heading';




var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
const Drawer = props => {
  const dataArray = [
    {
      id: 1,
      imgPath: 'Home',
      text: 'Home',
      onPress: ()=>props.navigation.navigate('HomeStack', {
        screen: 'SettingStack',
        params: {
          screen: 'Review',
        //   params: {
        //     screen: 'Media',
        //   },
        },
      }),
    },
    {
      id: 2,
      imgPath: 'Profile',
      text: 'Profile',
      onPress: ()=>props.navigation.navigate('HomeStack', {
        screen: 'SettingStack',
        params: {
          screen: 'Review',
        //   params: {
        //     screen: 'Media',
        //   },
        },
      }),
    },
    {
      id: 3,
      imgPath: 'Wallet',
      text: 'My Wallet',
      onPress:()=>props.navigation.navigate('HomeStack', {
        screen: 'SettingStack',
        params: {
          screen: 'Review',
        //   params: {
        //     screen: 'Media',
        //   },
        },
      }),
    },
    {
      id: 4,
      imgPath: 'Rating',
      text: 'Rating and Testimonials',
      color: colors.gray,
      imgColor: colors.gray,
      onPress: ()=>props.navigation.navigate('HomeStack', {
        screen: 'SettingStack',
        params: {
          screen: 'Review',
        //   params: {
        //     screen: 'Media',
        //   },
        },
      }),
    },
    {
      id: 5,
      imgPath: 'Notifications',
      text: 'Notifications',
      onPress: ()=>props.navigation.navigate('HomeStack', {
        screen: 'SettingStack',
        params: {
          screen: 'SupportNoti',
        //   params: {
        //     screen: 'Media',
        //   },
        },
      }),
    },
    {
      id: 6,
      imgPath: 'Registration',
      text: 'Registration',
      onPress: ()=>props.navigation.navigate('HomeStack', {
        screen: 'SettingStack',
        params: {
          screen: 'Messages',
        //   params: {
        //     screen: 'Media',
        //   },
        },
      }),
    },
    {
      id: 7,
      imgPath: 'Support',
      text: 'Online Support',
      onPress: ()=>props.navigation.navigate('HomeStack', {
        screen: 'SettingStack',
        params: {
          screen: 'DateDistances',
        //   params: {
        //     screen: 'Media',
        //   },
        },
      }),
    },
    {
        id: 8,
        imgPath: 'logout',
        text: 'Logout',
        onPress: () => props.navigation.reset({
            index: 0,
            routes: [{ name: "Onboarding1" }],
          }),
      },

  ];



  const check_icon=(Title2)=>{
        
    if(Title2=='Home'){
        return(
        <View style={{marginRight:20}}>
            <MaterialIcons name='home' size={15} color={colors.white} />
        </View>
        )
    }
    else  if(Title2=='Profile'){
        return(
        <View style={{marginRight:20}}>
            <Ionicons name='person-circle-outline' size={15} color={colors.white} />
        </View>
        )
    }
    else  if(Title2=='Wallet'){
        return(
        <View style={{marginRight:20}}>
            <AntDesign name='wallet' size={15} color={colors.white} />
        </View>
        )
    }
    else  if(Title2=='Rating'){
        return(
        <View style={{marginRight:20}}>
            <Feather name='star' size={15} color={colors.white} />
        </View>
        )
    }
    else  if(Title2=='Notifications'){
        return(
        <View style={{marginRight:20}}>
            <Fontisto name='bell' size={15} color={colors.white} />
        </View>
        )
    }
    else  if(Title2=='Registration'){
        return(
        <View style={{marginRight:20}}>
            <MaterialIcons name='app-registration' size={15} color={colors.white} />
        </View>
        )
    }
    else  if(Title2=='Support'){
        return(
        <View style={{marginRight:20}}>
            <Entypo name='chat' size={15} color={colors.white} />
        </View>
        )
    }
    else  if(Title2=='logout'){
        return(
        <View style={{marginRight:20}}>
            <Logout_icon />
        </View>
        )
    }
   
}
  return (
    <LinearGradient
    colors={[colors.gradient1,colors.gradient2]}
    style={styles.mainContainer}
    >
    <DrawerContentScrollView
      scrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}
      {...props}>

      <View >
        <View style={{height:50}} />
        <View style={styles.mainProfile}>
          <TouchableOpacity style={styles.profile_img_view1} >
            <View style={styles.profile_img_view2}></View>
          </TouchableOpacity>
          <Text_heading style={{color:colors.white,marginTop:10}} text="Keshav Maharaj"/>
        </View>

        <View style={styles.borderLine} />
        <View style={{height: 10}} />
        <View style={{marginLeft:10,marginTop:20,paddingBottom:20}}>
          {dataArray.map((item, index) => {
            return (
                <TouchableOpacity onPress={item.onPress}>
                <View key={index.toString()} style={styles.drawer_item}>
                    {check_icon(item.imgPath)}
                    <Text_sub_heading style={{color:colors.white,fontSize:16}} text={item.text}/>
                </View>
                <View style={{paddingLeft:15}}>
                    <Divider   height={1} width='100%'/>
                </View>
                </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </DrawerContentScrollView>
    </LinearGradient>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // borderTopRightRadius: 15,
    // borderBottomRightRadius: 15,
  },
  personImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 15,
    color: colors.white,
  },
  email: {
    fontSize: 12,
    color: colors.white,
    marginTop: 5,
  },
  mainProfile: {
    alignItems:'center'
  },
  borderLine: {
    height:0.5,
    width: '80%',
    alignSelf:'center',
    backgroundColor: colors.white,
  },
  profile_img_view1:{
    height:windowHeight/7,
    width:windowHeight/7,
    borderRadius:100,
    backgroundColor:colors.white,
    padding:5
  },
  profile_img_view2:{
    height:'100%',
    width:'100%',
    borderRadius:100,
    backgroundColor:colors.divider
  },
  drawer_item:{
    flexDirection:'row',
    padding:15,
    alignItems:'center'
  }
});
import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import colors from '../assets/colors';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Star from '../assets/pngImages/star.png'


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Rating_stars({
    height,
    // setstarCount
}) {

    const [manual_time, set_manual_time] = useState('');
    const [starCount, setstarCount] = useState(5);

    useEffect(()=>{
        // alert(upper_margin)
    },[])


  return (
        <Rating
            type='custom'
            ratingImage={Star}
            ratingColor='#fff'
            // ratingBackgroundColor='#fff'
            ratingCount={starCount}
            imageSize={12}
            onFinishRating={(r)=>setstarCount(r)}
            // style={{marginRight:35 }}
        />


      );
}
const styles = StyleSheet.create({

  line: {
    backgroundColor:colors.divider,
  },
  

});

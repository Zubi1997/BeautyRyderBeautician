import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import Text_heading from '../../Components/Text_components/Text_heading';
import Text_sub_heading from '../../Components/Text_components/Text_sub_heading';
import Social_button from '../../Components/Buttons/Social_button';
import Divider from '../../Components/Divider';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Graphs({
    props,navigation
}) {

    const [manual_time, set_manual_time] = useState('');
    const data = {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          data: [50, 55, 48, 60, 55, 55,46]
        }
      ]
      
    };
    useEffect(()=>{
        // alert(upper_margin)
    },[])


  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:1}}>
      <LinearGradient colors={[colors.gradient1,colors.gradient2]} style={styles.Gradient_head} >

        <View style={styles.header}>
         < View></View>
         <View style={{marginLeft:30}}>
          <Text_heading style={{color:colors.white}} text='$870.00'/>
          <Text_sub_heading style={{color:colors.white,fontSize:14,fontFamily:Font_style.Poppins_Regular}} text='Available Balance'/>
         </View>
          <View style={{marginRight:1}} >
            <TouchableOpacity onPress={()=>navigation.openDrawer()} >
              <Icons name = {'ios-menu-outline'} size={38} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width:'80%',alignSelf:'center'}}>
          <Social_button onpress={()=>console.log('kbh')} viewStyle={styles.withDraw_btn} style={{color:colors.white}} Title1='WITHDRAW'/>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:20}}>

          <View>
            <Text_heading style={{color:colors.white}} text='247'/>
            <Text_sub_heading style={{color:colors.white,fontSize:14,fontFamily:Font_style.Poppins_Regular}} text='Total Trip'/>
          </View>
          <Divider height='100%' width={2}/>
          <View>
            <Text_heading style={{color:colors.white}} text='247'/>
            <Text_sub_heading style={{color:colors.white,fontSize:14,fontFamily:Font_style.Poppins_Regular}} text='Total Trip'/>
          </View>   
          <Divider height='100%' width={2}/>
          <View>
            <Text_heading style={{color:colors.white}} text='247'/>
            <Text_sub_heading style={{color:colors.white,fontSize:14,fontFamily:Font_style.Poppins_Regular}} text='Total Trip'/>
          </View>

        </View>
      </LinearGradient>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
          <View>
            
          </View>
          <View style={{flex:1}}>
          <BarChart
          showBarTops={true}
                chartConfig={{
                  backgroundColor: "#D8D7D7",
                  backgroundGradientFrom: colors.background,
                  backgroundGradientTo: colors.background,
                  barRadius:5,
                  decimalPlaces: 2, // optional, defaults to 2dp
                  // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  // labelColor: (opacity = 1) => `rgba(255, 55, 25, ${opacity})`,
                  color: (opacity = 1) => colors.primary,
                  labelColor: (opacity = 1) => `#333`,
                  barPercentage: 1,
                  useShadowColorFromDataset: false,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  },
                  propsForBackgroundLines: {
                    strokeWidth: 0
                  }
                }}
            data={data}
            width={windowWidth}
            height={220}
            // yAxisLabel="$"
            // chartConfig={chartConfig}
            verticalLabelRotation={0}
          />
          </View>

          <View style={{paddingHorizontal:20}}>
            <View style={{marginTop:10,padding:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text_sub_heading style={{fontSize:20,fontFamily:Font_style.Poppins_SemiBold,color:colors.purple_text}} text="Earnings"/>
                <Text_sub_heading style={{fontSize:20,fontFamily:Font_style.Poppins_Medium,color:colors.purple_text}} text="$870.00"/>
            </View>
            <Divider height={1} width='100%' />
            <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text_sub_heading style={{fontSize:16,fontFamily:Font_style.Poppins_Medium,}} text="Trip Earnings"/>
                <Text_sub_heading style={{fontSize:16,fontFamily:Font_style.Poppins_Medium,}} text="$696.00"/>
            </View>
            <Divider height={1} width='100%' />
            <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text_sub_heading style={{fontSize:16,fontFamily:Font_style.Poppins_Medium,}} text="Taxes"/>
                <Text_sub_heading style={{fontSize:16,fontFamily:Font_style.Poppins_Medium,}} text="$174.00"/>
            </View>
          </View>
      </ScrollView>

    </SafeAreaView>

    </View>
    );
}
const styles = StyleSheet.create({


  container:{
    flex:1
  },
  header: {
    height:75,
    width:'100%',
    justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
    padding:20

  },
  Gradient_head:{
    paddingBottom:20
    // flex:1,
  },
  withDraw_btn:{
    backgroundColor:'transparent',
    borderColor:colors.divider,
    borderWidth:1,width:'100%',
    borderWidth:2,
    height:50
  }

});


//charts link https://blog.logrocket.com/using-react-native-chart-kit-visualize-data/
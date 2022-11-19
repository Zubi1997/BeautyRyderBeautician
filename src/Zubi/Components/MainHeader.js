//import libraries
import React, {Component , useState} from 'react';
import {View, Text , Image, StyleSheet,TouchableOpacity, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native'
import Dp from '../assets/pngImages/Onboarding1.png'
// create a component
import Font_style from '../assets/Font_style';
const HeaderWithLogo = ({onpress}) => {
  // const {label, onPress} = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={Dp}
          style={styles.pro}
        />
        <LinearGradient
            colors={ isEnabled ?  ['#E33895','#79489D'] : ['grey','grey']}
            style={styles.swit}
        >
          <TouchableOpacity onPress={toggleSwitch} style={styles.buttonContainer}>
              <Text style={[styles.txt,{color : isEnabled ? '#E33895' : 'grey'}]} >Online</Text>
             <LinearGradient
                  colors={  ['#E33895','#79489D']}
                  style={{width:70,height:40,borderRadius:50}}
              >
              <ToggleSwitch
                  isOn={isEnabled}
                  onColor="transparent"
                  offColor="grey"
                  size="large"
                  onToggle={toggleSwitch}
                />
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{marginRight:20}} >
          <TouchableOpacity onPress={onpress} >
            <Icons name = {'ios-menu-outline'} size={38} color={'#9D9B9B'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height:75,
    width:'100%',
    backgroundColor:'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth:1,
    borderBottomColor:'#DCDCDC'
  },
  text: {
    marginHorizontal: 15,
    fontWeight: '400',
    color: '#397DFF',
  },
  buttonContainer: {
      width: '99%',
      height:40,
      backgroundColor:'#fff',
      alignItems: 'center',
      borderRadius:50,
      flexDirection:'row',
      justifyContent:'space-between'
  },
  buttonText: {
    textAlign: 'center',
    color: '#4C64FF',
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: '200%'
  },
  txt : {
    
    fontFamily : Font_style.Poppins_Regular,
    marginLeft:15
  },
  pro:{width:55,height:55,borderRadius:100,marginLeft:20},
  swit:{
    height: 42, width: '55%', alignItems: 'center', justifyContent: 'center',borderRadius:50
  }
});

//make this component available to the app
export default HeaderWithLogo;

import React from 'react'
import { View, StyleSheet, Animated, Image} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import * as Animatable from 'react-native-animatable';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Here = () => {
  return(
  <View style={styles.container}>
    <LinearGradient
     colors={['#6DD5FA', '#2993b9', '#FFFFFF']}
     start={{ x: 0, y: 0 }}
     end={{ x: 1 , y: 1 }}
     style={styles.background}/>

  <View style={styles.header}>
    <Animatable.Image 
      animation="bounceIn"
      source={require("../../assets/car.png")}
      style={styles.logo}
      resizeMode="stretch"
      />
    <Animatable.Image 
      animation="bounceIn"
      source={require("../../assets/smoke.png")}
      style={styles.smoke}
      resizeMode="stretch"
      />

    <Animatable.Image 
      animation="bounceIn"
      source={require("../../assets/car.png")}
      style={styles.logo}
      resizeMode="stretch"
      />
    <Animatable.Image 
      animation="bounceIn"
      source={require("../../assets/smoke.png")}
      style={styles.smoke}
      resizeMode="stretch"
      />
      
    <Animatable.Image 
      animation="bounceIn"
      source={require("../../assets/car.png")}
      style={styles.logo}
      resizeMode="stretch"
      />
    <Animatable.Image 
      animation="bounceIn"
      source={require("../../assets/smoke.png")}
      style={styles.smoke}
      resizeMode="stretch"
      />

   </View>
   </View>
   )
 }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    marginTop: 80,
    flexDirection: 'row',
},
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#6dd5ed"
  },
  logo: { 
    width: 30,
    height: 30,
    marginHorizontal: 0,
  },
  smoke: { 
    marginTop: 14,
    width: 10,
    height: 10,
    marginRight: 14,
  }
})
export default Here;                          
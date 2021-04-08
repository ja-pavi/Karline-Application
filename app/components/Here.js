import React from 'react'
import { View, StyleSheet, Animated, Image, TouchableOpacity, Text} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import * as Animatable from 'react-native-animatable';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Here = () => {

  const clicked = () => {
    console.log('Pressed')
  }

  return(
  <View style={styles.container}>
    <TouchableOpacity style={styles.imHere} onPress={clicked}>
      <Text style={{fontSize: 35, color: '#2993b9', }}>I'm Here</Text>
    </TouchableOpacity>
  </View>
   )
 }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignContent: 'center'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    marginTop: 80,
    flexDirection: 'row',
  },
  imHere: {
    borderWidth: 12,
    borderColor:'#2993b9',
    width:250,
    height:250,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor:'#fff',
    borderRadius:125
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
  }
})
export default Here;                          
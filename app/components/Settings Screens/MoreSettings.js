import React from 'react'
import { View, StyleSheet } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

const MoreSettings = () => {
  return(
  <View style={styles.container}>
    <LinearGradient
     colors={['#fff', '#FFFFFF']}
     start={{ x: 0, y: 1 }}
     end={{ x: 1, y: 0 }}
    style={styles.background}/>
   </View>
   )
 }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#a8c9d8',
    justifyContent: 'center',
    alignContent: 'center'
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
export default MoreSettings;                          
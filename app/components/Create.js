import React from 'react'
import { View, StyleSheet } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

const Create = () => {
  return(
  <View style={styles.container}>
   </View>
   )
 }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
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
export default Create;                          
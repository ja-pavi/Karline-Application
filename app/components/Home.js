import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

const Home = () => {
  return(
  <View style={styles.container}>
    <LinearGradient
    colors={['#6dd5ed', '#fff']}
    start={{ x: 1, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.background}/>
    <Text style={styles.text}>Home</Text>
   </View>
   )
 }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#a8c9d8',
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
export default Home;                          
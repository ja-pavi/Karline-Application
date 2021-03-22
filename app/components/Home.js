import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Home = () => {
  return(
   <View style={styles.container}>
     <Text style={styles.text}>Create</Text>
   </View>
   )
 }

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: "#fff"
  },

  text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#6dd5ed"
  }
})
export default Home;                          
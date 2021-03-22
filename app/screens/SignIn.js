import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const SignIn = () => {
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
   backgroundColor: "#F0EFEB"
  },

  text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#DCD9D0"
  }
})
export default SignIn;                          
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const SignUpScreen = () => {
 return(
  <View style={styles.container}>
    <Text style={styles.text}>Sign-Up Screen</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: "#99C1DE"
  },

  text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#74ABD2"
  }
})
export default SignUpScreen; 
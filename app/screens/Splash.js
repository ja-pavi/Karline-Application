import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const Splash = ({navigation}) => {
 return(
  <View style={styles.container}>
    <Text style={styles.text}>Splash Screen</Text>
    
    <Button 
      title="Click to Sign In"
      color="#a8dadc"
      onPress={() => navigation.navigate("SignIn")}
      />

      <Button 
      title="Click to Sign Up"
      color="#a8dadc"
      onPress={() => navigation.navigate("SignUp")}
      />

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
      fontSize: 30,
      fontWeight: 'bold',
      color: "#DCD9D0"
  }
})
export default Splash; 
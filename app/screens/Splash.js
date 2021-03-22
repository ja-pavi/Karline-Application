import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image} from 'react-native'
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {LinearGradient} from 'expo-linear-gradient';


const Splash = ({navigation}) => {
  return(
    <View style={styles.container}>
      <LinearGradient
      colors={['#2193b0', '#6dd5ed']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}/>
    <View style={styles.header}>    
    <Animatable.Image 
      animation="bounceIn"
      duraton="1000"
      source={require("../../assets/splashlogo.png")}
      style={styles.logo}
      resizeMode="stretch"
      />
      </View>

    <Animatable.View
      animation="fadeInUpBig"
      duraton="1000" 
      style={styles.footer}> 
          <Text style={styles.title}>The new way to carpool!</Text>
          <Text style={styles.text}>Sign in with account</Text>
      <View style={styles.button}>
      <TouchableOpacity 

      onPress={() => navigation.navigate("Sign In")}>
      <LinearGradient
          colors={['#6dd5ed', '#5DB6CA']}
          style={styles.signIn}
        >
        <Text style={styles.textSign}>Get Started</Text>
        <MaterialIcons
          name="navigate-next"
          color="#fff"
          size={20}
          />
      </LinearGradient>
      </TouchableOpacity>
      </View>
      </Animatable.View>
      </View>
   );
 };

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;


 const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#a8c9d8'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: 400,
      height: 400
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30,
      
  },
  signIn: {
      width: 125,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});

export default Splash;                          
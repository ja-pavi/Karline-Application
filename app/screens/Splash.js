import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {LinearGradient} from 'expo-linear-gradient';


const Splash = ({navigation}) => {
  return(
    <View style={styles.container}>
       <StatusBar backgroundColor='transparent' barStyle="light-content"/>
      <LinearGradient
      colors={['#2980B9', '#6DD5FA']}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0}}
      style={styles.background}/>
    <View style={styles.header}>    
    <Animatable.Image 
      animation="bounceIn"
      source={require("../../assets/splashlogo3.png")}
      style={styles.logo}
      resizeMode="stretch"
      />
      </View>

    <Animatable.View
      animation="fadeInUpBig" 
      style={styles.footer}> 
          <Text style={styles.title}>The new way to pick-up!</Text>
          <Text style={styles.text}>Sign in with Skyward account</Text>
      
      <View style={styles.button}>
      <TouchableOpacity 
      onPress={() => navigation.navigate("Sign In")}>
      <LinearGradient
          colors={['#6DD5FA', '#69d0f5']}
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
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: 350,
      height: 350,
  },
  title: {
      color: "rgba(1,1,1,0.7)",
      fontSize: 28,
      fontWeight: 'bold',
  },
  text: {
      color: 'rgba(1,1,1,0.5)',
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
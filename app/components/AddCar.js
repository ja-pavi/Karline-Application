import React from 'react'
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer } from '@react-navigation/native';
import SettingsNavigator from '../navigation/SettingsNavigator'

const AddCar = () => {
  return(
  <View style={styles.container}>
      <StatusBar backgroundColor='transparent' barStyle="light-content"/>
      <LinearGradient
        colors={['#6DD5FA', '#2993b9', '#FFFFFF']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.background}/>
      
    <View style={styles.header}>
      <Text style={styles.text_header}>Add Car Information</Text>
    </View>
    
    <View style ={styles.line_dividers}/>

    <View style={styles.subheader}>
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
    </View>

    <Animatable.View
      animation="fadeInUpBig"
      style={styles.footer}>
        
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        Make
        </Text>
        </TouchableOpacity>
        <Text style={styles.text_subfooter}>
        Name, Email, Password
        </Text>
        <View style ={styles.line_dividers}/>
    </Animatable.View>
     
    <Animatable.View
      animation="fadeInUpBig"
      style={styles.footer}>
        
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        Model
        </Text>
        </TouchableOpacity>
        <Text style={styles.text_subfooter}>
        Name, Email, Password
        </Text>
        <View style ={styles.line_dividers}/>
    </Animatable.View>

    
    <Animatable.View
      animation="fadeInUpBig"
      style={styles.footer}>
        
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        License Plate
        </Text>
        </TouchableOpacity>
        <Text style={styles.text_subfooter}>
        Name, Email, Password
        </Text>
        <View style ={styles.line_dividers}/>
    </Animatable.View>
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
    header: {
      flex: 0.5,
      color: "black",
      paddingHorizontal: 10,
      marginTop: 60,
      marginBottom: 10,
  },
    subheader: {
      flex: 1,
      color: "black",
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
      
  },
    footer: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      paddingHorizontal: 20,
      marginTop: 10,
      marginBottom: 25,
      marginHorizontal: 10,
  },
    circle: {
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingHorizontal: 20,
      height: 40,
      width: 20,
      marginHorizontal: 6,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
  },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1000,
  },
    text_header: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: 20,
      alignSelf: 'center',
      fontWeight: 'bold',
  },
    text_subheader: {
      color: 'rgba(1,1,1,0.8)',
      fontSize: 20,
    },
    text_footer: {
      color: 'rgba(1,1,1,0.75)',
      fontSize: 18, 
      marginBottom: 10,
      marginTop: 10,
      marginStart: 5,
    },
    text_subfooter: {
      color: 'rgba(1,1,1,0.2)',
      fontSize: 14, 
      marginBottom: 10,
      marginStart: 5,
    },
    line_dividers: {
      borderBottomColor: 'rgba(1,1,1,0.1)',
      borderBottomWidth: 1,
      width: 350,
      alignSelf: 'center',
    },
});
export default AddCar;                          
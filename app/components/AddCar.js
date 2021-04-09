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
        colors={['#FFF', '#FFF', '#FFFFFF']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.background}/>
      
    <View style={styles.header}>
      <Text style={styles.text_header}>Add Car Information</Text>
    </View>
    
    <View style ={styles.line_dividers}/>

    <View style  ={styles.subheader}>
      <Text style ={styles.text_subTitle}>Color</Text>
    </View>

    <View style={styles.subheader}>
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'black'}>  
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text>
          <View style={styles.smallcircle}/>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'white'}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'grey'}>  
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'silver'}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'blue'}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'red'}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'brown'}>  
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
    </View>

    <View styles ={styles.subheader}>
    <View style ={styles.line_dividers}/>
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
        <View style ={styles.line_dividers2}/>
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
        <View style ={styles.line_dividers2}/>
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
        <View style ={styles.line_dividers2}/>
    </Animatable.View>

    <TouchableOpacity>
      <View style={styles.addStudentButton}>
      <LinearGradient
          colors={['#6DD5FA', '#2993b9']}
          style={styles.signIn} 
        >
        <Text style={[styles.textSign, { color: '#fff'}]}><MaterialIcons
          name="done"
          color="#fff"
          size={30}
          /></Text>
        </LinearGradient>
        </View>
    </TouchableOpacity>

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
      flex: 1,
      color: "black",
      paddingHorizontal: 10,
      marginTop: 60,
      marginBottom: 10,
  },
    subheader: {
      flex: 1.8,
      color: "black",
      flexDirection: 'row',
      paddingHorizontal: 10,
  },
    footer: {
      flex: 4,
      backgroundColor: 'rgba(255,255,255,0.9)',
      marginTop: 20,
      paddingHorizontal: 20,
      paddingTop: 10,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      marginHorizontal: 10,
      marginBottom: 20,
      shadowColor: '#303838',
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 5,
      shadowOpacity: 0.25,
      
  },
    circle: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingHorizontal: 20,
      height: 40,
      width: 18,
      marginHorizontal: 6,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      shadowColor: '#303838',
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 2.5,
      shadowOpacity: 0.25,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.2,
  },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1000,
  },
    text_header: {
      color: 'rgba(1,1,1,1)',
      fontSize: 20,
      alignSelf: 'center',
      fontWeight: 'bold',
  },
    text_subTitle: {
        color: 'rgba(1,1,1,1)',
        fontSize: 22, 
        fontWeight: 'bold',
        marginStart: 6,
  },
    text_subheader: {
      color: 'rgba(1,1,1,0.8)',
      fontSize: 20,
      textAlign: 'right'
    },
    text_footer: {
      color: 'rgba(1,1,1,0.75)',
      fontSize: 18, 
    },
    text_subfooter: {
      color: 'rgba(1,1,1,0.2)',
      fontSize: 14, 
    },
    line_dividers: {
      borderBottomColor: 'rgba(1,1,1,0.1)',
      borderBottomWidth: 1,
      width: 500,
      alignSelf: 'center',
      marginBottom: 15,
      marginTop: 10,
    },
    line_dividers2: {
      borderBottomColor: 'rgba(1,1,1,0.1)',
      borderBottomWidth: 1,
      width: 350,
      alignSelf: 'center',
      marginBottom: 15,
      marginTop: 10,
    },
    addStudentButton: {
      backgroundColor: 'rgba(255,255,255,0.75)',
      height: 60,
      width: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 25,
      alignSelf: 'center',
      shadowColor: '#303838',
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 5,
      shadowOpacity: 0.25,
    },
    signIn: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      flexDirection: 'row',
    },
});
export default AddCar;                          
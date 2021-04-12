import React from 'react'
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer } from '@react-navigation/native';
import SettingsNavigator from '../navigation/SettingsNavigator'

const Settings = ({navigation}) => {
  return(
  <View style={styles.container}>

      <StatusBar backgroundColor='transparent' barStyle="light-content"/>
      <LinearGradient
        colors={['#6DD5FA', '#2993b9', '#FFFFFF']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.background}/>
      
    <View style={styles.header}>
      <Text style={styles.text_header}>Settings</Text>
    </View>

    <Animatable.View
    animation="fadeInUpBig"
    style={styles.footer}>
      
      <TouchableOpacity style={styles.settingBlock}
      onPress={() => navigation.navigate("Profile")}>
      <Text style={styles.text_footer}>
      Profile                                                           <MaterialIcons
          name="navigate-next"
          color="black"
          size={24}
          />
      </Text>
      </TouchableOpacity>
      <Text style={styles.text_subfooter}>
      Name, Email, Password
      </Text>
      <View style ={styles.line_dividers}/>
      
      <TouchableOpacity style={styles.settingBlock}
      onPress={() => navigation.navigate("")}>
      <Text style={styles.text_footer}>
      Settings                                                       <MaterialIcons
          name="navigate-next"
          color="black"
          size={24}
          />
      </Text>
      </TouchableOpacity>
      <Text style={styles.text_subfooter}>
      Notifications, Account Information
      </Text>
      <View style ={styles.line_dividers}/>

      <TouchableOpacity style={styles.settingBlock}
      onPress={() => navigation.navigate("")}>
      <Text style={styles.text_footer}>
      Pick-Up History                                          <MaterialIcons
          name="navigate-next"
          color="black"
          size={24}
          />
      </Text>
      </TouchableOpacity>
      <Text style={styles.text_subfooter}>
      Pick-Up Log, Log-In History
      </Text>
      <View style ={styles.line_dividers}/>

      <TouchableOpacity style={styles.settingBlock}
      onPress={() => navigation.navigate("")}>
      <Text style={styles.text_footer}>
      Help                                                              <MaterialIcons
          name="navigate-next"
          color="black"
          size={24}
          />
      </Text>
      </TouchableOpacity>
      <Text style={styles.text_subfooter}>
      Contact Information, FAQ, Customer Support
      </Text>
      <View style ={styles.line_dividers}/>

      <Text style={styles.text_accountfooter}>
      Account No. 
      </Text>
      <Text style={styles.text_subfooter}>
      (Beta) 715368281
      </Text>

      <TouchableOpacity>
        <Text style={[styles.textSign, {color: '#6DD5FA'}]}>Sign Out</Text>
      </TouchableOpacity>

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
      flex: 0.8,
      color: "black",
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
      marginTop: 15,
  },
    footer: {
      flex: 5,
      backgroundColor: 'rgba(255,255,255,1)',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      
  },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1000,
  },
    text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 40,
    },
    text_footer: {
      color: 'rgba(1,1,1,0.75)',
      fontSize: 18, 
      marginBottom: 10,
      marginTop: 25,
      marginStart: 5,
      flexDirection: 'row',
      alignItems: 'center'
    },
    text_subfooter: {
      color: 'rgba(1,1,1,0.2)',
      fontSize: 14, 
      marginBottom: 30,
      marginStart: 5,
    },
    line_dividers: {
      borderBottomColor: 'rgba(1,1,1,0.1)',
      borderBottomWidth: 1,
    },
    text_accountfooter: {
        color: 'rgba(1,1,1,0.4)',
        fontSize: 16, 
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        marginStart: 5,
    },
    SignOutButton: {
      backgroundColor: '#5DB6CA',
      height: 40,
      width: 150,
      borderRadius: 20,
      alignSelf: 'center',
      marginTop: 33,
      
    },
    signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row'
    },
    textSign: {
      marginTop: 5,
      fontSize: 17,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    settingBlock: {
    
    }
});
export default Settings;                          
import React from 'react'
import { View, StyleSheet, StatusBar, Text, TouchableOpacity, TextInput } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer } from '@react-navigation/native';
import SettingsNavigator from '../navigation/SettingsNavigator'
import { Ionicons } from '@expo/vector-icons';

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
      <Text style ={styles.text_subTitle}>
      <MaterialIcons
          name="brush"
          color="black"
          size={22}
          />  Color</Text>
    </View>

    <View style={styles.subheader}>
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'#1a1b1b'}> 
      <LinearGradient
        colors={['black', 'white']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.circleshape}/> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
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
      backgroundColor={'#6b7173'}>  
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'#3846ae'}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'#b18364'}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'#ffde24'}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'#e33018'}>  
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>

    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'#cac0bf'}>  
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>

    <Animatable.View
      animation="bounceIn"
      style={styles.circle}
      backgroundColor={'#577935'}>  
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        </Text>
        </TouchableOpacity>
    </Animatable.View>

    </View>
    <Text style={styles.text}> * If color not shown, include it in your make. </Text>
    <View style ={styles.subheader}>
    <View style ={styles.line_dividers}/>
    </View>

    <View style  ={styles.subheader}>
      <Text style ={styles.text_subTitle}>
      <Ionicons name="car-outline" size={24} color="black" 
      />  Model</Text>
    </View>

    <View style={styles.subheader}>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle2}
      backgroundColor={'#fff'}>  
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
          SUV
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle2}
      backgroundColor={'#fff'}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
          Sedan
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle2}
      backgroundColor={'#fff'}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
          Truck
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle2}
      backgroundColor={'#fff'}> 
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
          Van
        </Text>
        </TouchableOpacity>
    </Animatable.View>
  
    <Animatable.View
      animation="bounceIn"
      style={styles.circle2}
      backgroundColor={'#fff'}>  
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
          Sport
        </Text>
        </TouchableOpacity>
    </Animatable.View>
    </View>

    
    <View style ={styles.subheader}>
    <View style ={styles.line_dividers3}/>
    </View>

    <Animatable.View
      animation="fadeInUpBig"
      style={styles.footer}>
        
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        <Ionicons name="receipt-outline" size={24} color="black" 
        />  Make
        </Text>
        </TouchableOpacity>
        <View style ={styles.line_dividers2}/>
        <TextInput
        placeholder="Example: 2016 Lexus IS350"
        style={styles.input}
        onChangeText={(value) => setName(value)}/>
    </Animatable.View>
    
    <Animatable.View
      animation="fadeInUpBig"
      style={styles.footer}>
        <TouchableOpacity style={styles.settingBlock}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text_footer}>
        <Ionicons name="terminal-outline" size={24} color="black" 
        />  License Plate Number 
        </Text>
        </TouchableOpacity>
        <View style ={styles.line_dividers2}/>
        <TextInput
        placeholder="Example: KLN CRPL"
        style={styles.input}
        onChangeText={(value) => setName(value)}/>
      </Animatable.View>

    <TouchableOpacity>
    <Animatable.View
    animation="fadeInUpBig"
    style={styles.addStudentButton}>
      <LinearGradient
          colors={['#6DD5FA', '#2993b9']}
          style={styles.signIn}>
        <Text style={[styles.textSign, { color: '#fff'}]}><MaterialIcons
          name="done"
          color="#fff"
          size={30}
          /></Text>
        </LinearGradient>
      </Animatable.View>
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
      flex: 2,
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
      paddingHorizontal: 15,
      height: 30,
      width: 18,
      marginHorizontal: 5.4,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      shadowColor: '#303838',
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 5,
      shadowOpacity: 0.25,
      justifyContent: 'center',
      alignItems: 'center',
  },
    circle2: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      height: 60,
      width: 60,
      marginHorizontal: 7,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      shadowColor: '#303838',
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 5,
      shadowOpacity: 0.25,
      marginBottom: 50,
      justifyContent: 'center',
      alignItems: 'center',
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
  },
    text_subTitle: {
        color: 'rgba(1,1,1,1)',
        fontSize: 20, 
        marginStart: 6,
        justifyContent: 'center',
        alignContent: 'center',
  },
    text_subheader: {
      color: 'rgba(1,1,1,0.8)',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'right',
    },
    text_footer: {
      color: 'rgba(1,1,1,0.75)',
      fontSize: 18, 
    },
    text_subfooter: {
      color: 'rgba(1,1,1,0.2)',
      fontSize: 14, 
    },
    text: {
      color: 'rgba(1,1,1,0.3)',
      paddingHorizontal: 15,
      marginTop: 10,
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
    line_dividers3: {
      borderBottomColor: 'rgba(1,1,1,0.1)',
      borderBottomWidth: 1,
      width: 500,
      alignSelf: 'center',
      marginBottom: 15,
      marginTop: 50,
    },
    addStudentButton: {
      backgroundColor: 'rgba(255,255,255,0.75)',
      height: 60,
      width: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
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
    input: { 
      fontSize: 16,
      marginTop: 5
    }
});
export default AddCar;                          
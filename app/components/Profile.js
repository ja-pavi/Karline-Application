
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Image, TouchableOpacity, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {LinearGradient} from 'expo-linear-gradient'

const Profile = () => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');
  const [image, setImage] = useState(null);

  //photo picker function
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  //picks image for profile picture
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //returns everything on the view
  return (
  <SafeAreaView style={styles.parentContainer}>
    <StatusBar translucent backgroundColor='transparent' />
    <View style={{backgroundColor: '#5DB6CA', width: 500, height:231, marginTop: -50}}></View>
    <View style={styles.triangleCornerLayer}></View>
    <Text style={{position: 'absolute', top:110, alignItems: 'center', fontWeight: "bold", color: '#FFF', fontSize: 45}}>Add Student</Text>
    
    <View style={styles.buttonIcon}>
      <Ionicons name='person-add' size={90} color='#DCDCDC'/>
    </View>
    
    <TouchableOpacity style={styles.pictureButton} onPress={pickImage}>
      {image && <Image source={{ uri: image }} style={{width: 195, height: 195, borderRadius: 150}} />}  
    </TouchableOpacity>
      
    <View style ={styles.infoContainer}>
      <TextInput
        placeholder="Student's Name"
        style={styles.input}
        onChangeText={(value) => setName(value)} />
      
      <View style={styles.input}>
        <RNPickerSelect
        style={styles.input}
        useNativeAndroidPickerStyle={false}
        placeholder={{ label: "Select School", value: ""}}
        items={[
          { label: "Benfer", value: "Benfer" },
          { label: "Benignus", value: "Krimmel" },
          { label: "Bernshausen", value: "Bernshausen" },
          { label: "Blackshear", value: "Blackshear" },
          { label: "Brill", value: "Brill" },
          { label: "Ehrhardt", value: "Ehrhardt" },
          { label: "Eiland", value: "Eiland" },
          { label: "Epps Island", value: "Epps Island" },
          { label: "Fox", value: "Fox" },
          { label: "Frank", value: "Frank" },
          { label: "French", value: "French" },
          { label: "Grace England", value: "Grace England" },
          { label: "Greenwood Forest", value: "Greenwood Forest" },
          { label: "Hassler", value: "Hassler" },
          { label: "Haude", value: "Haude" },
          { label: "Kaiser", value: "Kaiser" },
          { label: "Klenk", value: "Klenk" },
          { label: "Kohrville", value: "Kohrville" },
          { label: "Krahn", value: "Krahn" },
          { label: "Kreinhop", value: "Kreinhop" },
          { label: "Kuehnle", value: "Kuehnle" },
          { label: "Lemm", value: "Lemm" },
          { label: "Mahaffey", value: "Mahaffey" },
          { label: "McDougle", value: "McDougle" },
          { label: "Metzler", value: "Metzler" },
          { label: "Mittelstadt", value: "Mittelstadt" },
          { label: "Mueller", value: "Mueller" },
          { label: "Nitsch", value: "Nitsch" },
          { label: "Northampton", value: "Northampton" },
          { label: "Roth", value: "Roth" },
          { label: "Schultz", value: "Schultz" },
          { label: "Theiss", value: "Thiess" },
          { label: "Zwink", value: "Zwink" },
        ]}
        onValueChange={(value) => setSchool(value)} />
      </View>

      <View style={styles.input}>
        <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        placeholder={{ label: "Select Grade Level", value: ""}}
        items={[
          { label: "Kindergarten", value: "Kindergarten" },
          { label: "1st Grade", value: "1st Grade" },
          { label: "2nd Grade", value: "2nd Grade" },
          { label: "3rd Grade", value: "3rd Grade" },
          { label: "4th Grade", value: "4th Grade" },
          { label: "5th Grade", value: "5th Grade" },
        ]}
        onValueChange={(value) => setGrade(value)} />
      </View>
    </View>

    <TouchableOpacity>
      <View style={styles.addStudentButton}>
        <Text style={{color: "#FFF", fontSize: 15,}}>Add Student</Text>
      </View>
    </TouchableOpacity>

  </SafeAreaView>
  )
}

//styles for elements
const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#FFF',
    height: 750,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  infoContainer: {
    flex: 1,
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30
  },
  text: {
    color: "#000",
    fontSize: 22.5,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#DCDCDC',
    height: 40,
    width: 250,
    borderWidth: 1.5,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10,
    marginTop: 20,
  },
  buttonIcon: {
    backgroundColor: '#FFF',
    width: 210,
    height: 210,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 0,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 20,
    shadowOpacity: 0.8,
  },
  pictureButton: {
    backgroundColor: 'transparent',
    width: 210,
    height: 210,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: -210,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 20,
    shadowOpacity: 0.5,
  },
  addStudentButton: {
    backgroundColor: '#5DB6CA',
    height: 40,
    width: 180,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 45
  },
  triangleCornerLayer: {
    position: 'absolute',
    top:225,
    left:0,
    width:300,
    height: 250,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 400,
    borderTopWidth: 200,
    borderRightColor: 'transparent',
    borderTopColor: '#5DB6CA'
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


export default Profile; 

/* prints variables of student
      <Text style={styles.text2}>
        Name: {name} {'\n'}
        School: {school} {'\n'}
        Grade: {grade}
      </Text> 
*/

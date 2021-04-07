
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Platform, StatusBar} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'
import * as Animatable from 'react-native-animatable';

const AddStudent = () => {
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
  <View style={styles.container}>
     <StatusBar backgroundColor='transparent' barStyle="light-content"/>
  <LinearGradient
    colors={['#6DD5FA', '#2993b9', '#FFFFFF']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.background}/>

    <View style={styles.header}>
      <Text style={styles.text_header}>Add Student</Text>
      <View style={styles.buttonIcon}>
      <Ionicons name='person-add' size={90} color='#DCDCDC'/>
      </View>
    
    <TouchableOpacity style={styles.pictureButton} onPress={pickImage}>
      {image && <Animatable.Image
      animation="bounceIn"
      source={{ uri: image }} style={styles.pictureButton} />}  
    </TouchableOpacity>
    </View>

    <Animatable.View 
    animation="fadeInUpBig"
    style={styles.footer}>
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
      <LinearGradient
          colors={['#6DD5FA', '#2993b9']}
          style={styles.signIn} 
        >
        <Text style={[styles.textSign, { color: '#fff'}]}>Add Student</Text>
        </LinearGradient>
        </View>
    </TouchableOpacity>
    </Animatable.View>
  </View>
  )
}

//styles for elements
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#5DB6CA',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  header: {
    flex: 3,
    alignItems: 'center',
  },
  footer: {
    flex: 2.4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    top: -2.5,
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: '#DCDCDC',
    height: 45,
    width: 250,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonIcon: {
    backgroundColor: '#fff',
    width: 225,
    height: 225,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  pictureButton: {
    backgroundColor: 'transparent',
    width: 225,
    height: 225,
    marginVertical: -225,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'transparent',
    borderRadius: 150,
    borderWidth: 8,
    borderColor: '#FFF',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  addStudentButton: {
    backgroundColor: '#5DB6CA',
    height: 40,
    width: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  text_header: {
    marginTop: 75,
    marginBottom: 27.5,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
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
    color: 'white',
    fontWeight: 'bold'
}
});


export default AddStudent; 

/* prints variables of student
      <Text style={styles.text2}>
        Name: {name} {'\n'}
        School: {school} {'\n'}
        Grade: {grade}
      </Text> 
*/

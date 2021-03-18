
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  return (

  <SafeAreaView style={styles.parentContainer}>
    <View style ={styles.infoContainer}>
     <Text style={styles.text}>Enter name:</Text>
      <TextInput 
        placeholder='Name' 
        style={styles.input}
        onChangeText={(value) => setName(name)} />

      <Text style={styles.text}>Enter age:</Text>
      <TextInput 
        placeholder='Age' 
        style={styles.input}
        onChangeText={(value) => setAge(value)} />

      <Text style={styles.text}>Enter student's grade: </Text>
      <View style={styles.input}>
        <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        useNativeAndroidPickerStyle={false}
        placeholder={{ label: "Grade Level", value: "Grade Level"}}
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#FFFF',
    height: 735,
    justifyContent: 'center'
  },
  infoContainer: {
    flex: 1,
    height: 200,
    justifyContent: 'flex-end',
    marginBottom: 115
  },
  text: {
    color: "#000",
    fontSize: 22.5,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 6.5,
    marginHorizontal: 45
  },
  input: {
    borderColor: '#18BBCD',
    height: 40,
    width: 290,
    borderWidth: 1.5,
    borderRadius: 30,
    justifyContent: 'center',
    padding: 8,
    marginHorizontal: 40
  },
   text2: {
    color: "#000",
    fontSize: 15,
    padding: 4
  }
})

export default Profile; 

/*

      <Text style={styles.text2}>
        Name: {name} {'\n'}
        Age: {age} {'\n'}
        Grade Level: {grade}</Text>

*/
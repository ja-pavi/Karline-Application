
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import 'react-native-gesture-handler';

const Profile = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState("");
  return (
  <SafeAreaView style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        placeholder='Name' 
        style={styles.input}
        onChangeText={(value) => setName(value)} />

      <Text>Enter age:</Text>
      <TextInput 
        placeholder='Age' 
        style={styles.input}
        onChangeText={(value) => setAge(value)} />
  <Text>Enter student's grade: </Text>
  <View style={{ borderWidth: 1.5, borderColor: '#3690a5', borderRadius: 4, padding: 8, margin: 10, width: 200}}>
  <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      useNativeAndroidPickerStyle={false}
      placeholder={{ label: "Grade Level", value: "Grade Level"}}
      items={[
          { label: "Kindergarten", value: "Kindergarten" },
          { label: "1st", value: "1st Grade" },
          { label: "2nd", value: "2nd Grade" },
          { label: "3rd", value: "3rd Grade" },
          { label: "4th", value: "4th Grade" },
          { label: "5th", value: "5th Grade" },
      ]}
      onValueChange={(value) => setGrade(value)}
      />
  </View>
      <Text>Name: {name} {'\n'}Age: {age} {'\n'}Grade Level: {grade}</Text> 
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 4,
    borderColor: '#3690a5',
    padding: 8,
    margin: 10,
    width: 200,
  },
   text: {
       fontSize: 20,
       fontWeight: 'bold',
       color: "black"
   }
})

export default Profile; 
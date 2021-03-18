
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
     <Text style={{ color: "#AFC7D4",fontWeight: 'bold', fontSize: 18 }}>Enter name:</Text>
      <TextInput 
        placeholder='Name' 
        style={styles.input}
        onChangeText={(value) => setName(value)} />

      <Text style={{ color: "#AFC7D4",fontWeight: 'bold', fontSize: 18 }}>Enter age:</Text>
      <TextInput 
        placeholder='Age' 
        style={styles.input}
        onChangeText={(value) => setAge(value)} />

      <Text style={{ color: "#AFC7D4",fontWeight: 'bold', fontSize: 18 }}>Enter student's grade: </Text>
      <View style={{ borderWidth: 4, borderColor: '#BCD4E6', borderRadius: 30, padding: 8, margin: 10, height: 40, width: 250}}>
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
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E2E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 4,
    borderRadius: 30,
    borderColor: '#BCD4E6',
    padding: 8,
    margin: 10,
    height: 40,
    width: 250,
  },
   text: {
       fontSize: 20,
       fontWeight: 'bold',
       color: "#AFC7D4"
   },
   text2: {
    fontSize: 15,
    color: "#e0e1dd" 
},

})

export default Profile; 

/*
<Text style={styles.text2}>
        Name: {name} {'\n'}
        Age: {age} {'\n'}
        Grade Level: {grade}</Text>
*/ 
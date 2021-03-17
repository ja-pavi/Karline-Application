import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState("");

  return (
    <View style={styles.container}>
  <Text>Hello World!</Text>
  <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      useNativeAndroidPickerStyle={false}
      placeholder={{ label: "Select your student's grade level", value: null }}
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
      <Text>Enter name:</Text>
      <TextInput 
        placeholder='e.g. Joshua Le' 
        style={styles.input}
        onChangeText={(value) => setName(value)} />

      <Text>Enter age:</Text>
      <TextInput 
        placeholder='e.g. 17' 
        style={styles.input}
        onChangeText={(value) => setAge(value)} />

      <Text style={styles.result}>Name: {name}, Age: {age}, Grade Level: {grade}</Text>
    </View>
  );
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
    borderColor: '#3690a5',
    padding: 8,
    margin: 10,
    width: 200,
  }
});


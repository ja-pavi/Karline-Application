import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>

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

      <Text style={styles.result}>Name: {name}, Age: {age}</Text>
  
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


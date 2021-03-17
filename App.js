import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AddStudent"
          component={AddStudentScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ title: "Sign In" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [language, setLanguage] = useState("");

  return (
    <View style={styles.container}>
  <Text>Hello World!</Text>
  <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      useNativeAndroidPickerStyle={false}
      placeholder={{ label: "Select your favourite language", value: null }}
      items={[
          { label: "JavaScript", value: "JavaScript" },
          { label: "TypeStript", value: "TypeStript" },
          { label: "Python", value: "Python" },
          { label: "Java", value: "Java" },
          { label: "C++", value: "C++" },
          { label: "C", value: "C" },
      ]}
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


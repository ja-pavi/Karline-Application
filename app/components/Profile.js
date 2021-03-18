
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Image, TouchableOpacity, Button, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';


const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [image, setImage] = useState(null);

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

  return (


  <SafeAreaView style={styles.parentContainer}>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>

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
        onChangeText={(value) => setAge(age)} />

      <Text style={styles.text}>Enter student's grade: </Text>
      <View style={styles.input}>
        <RNPickerSelect
        onValueChange={(value) => console.log(grade)}
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

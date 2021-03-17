import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, Button} from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");
  

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>So we're going to party like its...</Text>
      <TouchableOpacity 
      onPress={() => console.log("Tapped image")}>
      <Button title="1999"
        onPress={() => 
          Alert.alert("swag", "", [
            { text: "fine me", onPress: () => console.log("1") },
            { text: "find me", onPress: () => console.log("2") },
        ])} 
      />
        <Image 
          source={{
            width: 200,
            height: 300,
            uri: "http://basquiat.com/images/backgrounds/enlarge/BA_105-orig.jpg",
          }} 
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffbe0f',
    alignItems: "center",
    justifyContent: "center",
  },
});

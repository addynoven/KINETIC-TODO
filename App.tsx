import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // task 2 color change
  const carr =["#090D16", "#1E1B4B", "#064E3B", "#701A75", "#7C2D12"]
  const [index, setIndex] = useState(0);
  const handlePress = () => {
    setIndex((index + 1) % carr.length);
  }
  return (
    <View style={{flex:1, backgroundColor: carr[index], alignItems: "center", justifyContent: "center"}}>
        <Pressable onPress={handlePress}>
        <View style={{width: 100, height: 100, backgroundColor: "#fff", alignItems: "center", justifyContent: "center"}}>
          <Text style={{color: "#000", fontSize: 32}}>{carr[index]}</Text>
          <Text style={{color: "#000"}}>Press Me</Text>
        </View>
     </Pressable>
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  // task 4 Live Input Mirror & Dynamic Preview (Controlled Inputs)
  const [text, setText] = useState("");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#090D16",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        placeholder="Enter some text..."
        value={text}
        onChangeText={setText}
        style={{
          fontSize: 16,
          color: "white",
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          backgroundColor: "#1E1E1E",
          borderRadius: 5,
          width: "80%",
        }}
      />
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "#fefefe",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 16, alignSelf: "flex-start" }}>
          PREVIEW CARD
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {text}
        </Text>
        <Text>
          {text.length ? `Total characters: ${text.length}` : "No text entered"}
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fefefe",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Pressable>
          <Text style={{ fontSize: 16 }} onPress={() => setText("")}>
            Clear text
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

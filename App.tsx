import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  //task 3 view card
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#090D16",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
          gap: 20,
          padding: 20,
        }}
      >
        <View style={{ width: 100, height: 100, borderRadius: 20 }}>
          <Image
            source={{ uri: "https://picsum.photos/id/237/200/300" }}
            style={{ width: 100, height: 100, borderRadius: 20 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>neon (@neon)</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>
            Mobile & AI Dev 🚀
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

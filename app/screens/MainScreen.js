import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppButton from "../components/AppButton";

export default function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AppButton
        title="Huffman Coding"
        onPress={() => navigation.navigate("Huffman Coding")}
      />
      <AppButton
        title="RunLength Coding"
        onPress={() => navigation.navigate("RunLength Coding")}
      />
       <AppButton
        title="Variable Length Coding"
        onPress={() => navigation.navigate("RunLength Coding")}
      />
       <AppButton
        title="Delta Coding"
        onPress={() => navigation.navigate("RunLength Coding")}
      />
       <AppButton
        title="Lempel–Ziv–Welch (LZW) Coding"
        onPress={() => navigation.navigate("RunLength Coding")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent:"center"
  },
});

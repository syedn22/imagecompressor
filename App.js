import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import imageToRgbaMatrix from "image-to-rgba-matrix";

import AppButton from "./app/components/AppButton";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setimageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setimageUri(result.uri);
      imageToRgbaMatrix(result.uri).then(console.log);
      //  let canvas = window.createI
    } catch (error) {
      console.log("Error opening the library.");
    }
  };

  return (
    <Screen>
      <AppButton title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RunLength from "../source/RunLength";

import AppInput from "../components/AppInput";
import AppText from "../components/AppText";
import { endAsyncEvent } from "react-native/Libraries/Performance/Systrace";

function RunLengthScreen(props) {
  const [encodedString, setencodedString] = useState("");
  const [decodedString, setdecodedString] = useState("");

  encode = (str) => {
    if (str == undefined || str.length < 1) {
      setdecodedString("");
      setencodedString("");
      return;
    }

    let encoded = RunLength.encode(str);

    setencodedString(encoded);
    setdecodedString(RunLength.decode(encoded));
  };

  return (
    <>
      <AppText style={styles.heading}>Run-Length Coding</AppText>
      <AppInput
        title="Enter the string to be encode"
        onChangeText={(e) => encode(e)}
      />
      <AppText style={styles.subheading}>Encoded String</AppText>
      <AppText> {encodedString}</AppText>
      <AppText style={styles.subheading}>Decoded String</AppText>
      <AppText> {decodedString}</AppText>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    height: 70,
    color: "dodgerblue",
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 24,
    height: 50,
    color: "dodgerblue",
    fontWeight: "bold",
  },
});

export default RunLengthScreen;

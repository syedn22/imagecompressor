import React, { useState } from "react";
import { StyleSheet } from "react-native";
import HuffmanCoding from "../source/HuffmanCoding";

import AppInput from "../components/AppInput";
import AppText from "../components/AppText";

function HuffmanCodingScreen(props) {
  const [encodedString, setencodedString] = useState("");
  const [decodedString, setdecodedString] = useState("");

  encode = (str) => {
    if (str == undefined) return;
    if (str.length < 1) return;

    const coder = new HuffmanCoding();
    const freq = coder.frequency(str);
    const tuples = coder.sortFrequency(freq);
    const tree = coder.buildtree(tuples);

    let pat = "";
    assign_code(tree, pat);
    coder.codes = codes;

    let encodedString = coder.encode(str);
    setencodedString(encodedString);
    setdecodedString(coder.decode(tree, encodedString));
  };

  let codes = {};
  function assign_code(node, pat) {
    if (typeof node == "string") {
      codes[node] = pat;
    } else {
      assign_code(node[0], pat + "0");
      assign_code(node[1], pat + "1");
    }
  }

  return (
    <>
      <AppText style={styles.heading}>Huffman Coding</AppText>
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

export default HuffmanCodingScreen;

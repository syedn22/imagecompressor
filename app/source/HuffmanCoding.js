export default class HuffmanCoding {
  frequency(string) {
    let freq = {};
    for (let i = 0; i < string.length; i++) {
      let character = string[i];
      if (freq[character]) freq[character]++;
      else freq[character] = 1;
    }
    return freq;
  }

  sortFrequency(frequency) {
    let sortedFrequency = [];

    for (let a in frequency) sortedFrequency.push([frequency[a], a]);

    sortedFrequency.sort();
    return sortedFrequency;
  }

  buildtree(tuples) {
    while (tuples.length > 1) {
      let leastTwo = [tuples[0][1], tuples[1][1]];
      let theRest = tuples.slice(2, tuples.length);
      let combFreq = tuples[0][0] + tuples[1][0];
      tuples = theRest;
      let end = [combFreq, leastTwo];
      tuples.push(end);
      tuples.sort();
    }
    return tuples[0][1];
  }

  codes = {};

  encode(str) {
    let output = "";
    for (let ch in str) {
      output = output + this.codes[str[ch]];
    }
    return output;
  }

  decode(tree, str) {
    var output = "";
    var p = tree;
    for (let bit in str) {
      if (str[bit] == "0") {
        p = p[0];
      } else {
        p = p[1];
      }
      if (typeof p == "string") {
        output += p;
        p = tree;
      }
    }
    return output;
  }
}

let codes = {};
function assign_code(node, pat) {
  if (typeof node == "string") {
    codes[node] = pat;
  } else {
    assign_code(node[0], pat + "0");
    assign_code(node[1], pat + "1");
  }
}

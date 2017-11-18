// Given a string of words, you need to find the highest scoring word.
//
// Each letter of a word scores points according to it's position in the
// alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
//
// If two words score the same, return the word that appears earliest in the original string.
//
// All letters will be lowercase and all inputs will be valid


// pseudo code:

// split the sentences into a array

// loop through every word in the array

// make a new array with object literals with properties of name, position, and value of the word

// loop through new array and put the biggest value at the end of the array.

const alphabet = {
  a: 1, b: 2, c: 3,
  d: 4, e: 5, f: 6,
  g: 7, h: 8, i: 9,
  j: 10,k: 11,l: 12,
  m: 13,n: 14,o: 15,
  p: 16,q: 17,r: 18,
  s: 19,t: 20,u: 21,
  v: 22,w: 23,x: 24,
  y: 25,z: 26
}


function high(x) {
  let finalArr = [];
  let output = 0;
  let splitSent = x.split(" ");
  for (var i = 0; i < splitSent.length; i++) {
    output = 0;
    splitSent[i].split("").filter(function(e) {
      output += alphabet[e];
    });
    finalArr.push({
      word: splitSent[i],
      value: output,
      position: i
    });
  };

  let finalWord = finalArr.sort(function (a, b) {
    if (a.value === b.value) {
      return a.position < b.position;
    } else {
      return a.value - b.value;
    }
  })[finalArr.length-1];
  return finalWord
}


// test case

high('man i need a taxi up to ubud');
high('what time are we climbing up the volcano');
high('take me to semynak');

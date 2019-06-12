// work out if two strings are anagrams of eachother
// input is two strings
// // output is boolean t/f

// // examples
// validAnagram("hahaha", "ahahah"); // true
// validAnagram("aaz", "aza"); // true
// validAnagram("aha", "ah") // false

// // edge cases
// validAnagram(" aaz", "aza"); // depends on how we treat spaces
// validAnagram("hello!", "hello"); // depends on how we treat punctuation
// validAnagram("hello", "hell"); // technically an anagram but does not use all letters
// // ignore edge cases initially

// for a valid anagram, we have to have the same characters
// occur the same number of times

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let charFreq = new Object();
  for (let char of str1) {
    charFreq[char] ? charFreq[char]++ : (charFreq[char] = 1);
  }

  for (let char of str2) {
    if (!charFreq[char]) return false;

    charFreq[char]--;
  }
  return true;
}

console.log(validAnagram("hahaha", "ahahah")); // true
console.log(validAnagram("hahaha", "ahahah")); // true
console.log(validAnagram("aaz", "aza")); // true
console.log(validAnagram("aha", "ahf")); // false

// could use regex to eliminate effect of spaces and punctuation
// we can eliminate one of these loops by decrementing the frequencies
// note that this is O(n) space complexity since we are populating an
// array of same dimensions as first string

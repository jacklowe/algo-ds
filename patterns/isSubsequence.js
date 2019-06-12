function isSubsequence(str1, str2) {
  // create two pointers, one that keeps track of
  // which char we are at in the first and another
  // for the second
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
  }
  return false;
}

// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// input two strings, returns true if
// the first one's chars are in second
// in the same order as the first

// examples
console.log(isSubsequence("hell", "hekllo")); // true
console.log(isSubsequence("hahaha", "hahhahaha")); // true
console.log(isSubsequence("abc", "acb")); // false

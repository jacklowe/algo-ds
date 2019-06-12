// given an input string return an object that counts the number of each type of char in the string and returns in an object

// examples
// charCount("abac"); // { a:2, b:1, c:1}
// charCount("Hello there!"); // { h:1, e:3, ...} ignoring whitespace and punctuation like !

function charCount(str) {
  let obj = {};
  str = str.toLowerCase();
  for (let char of str) {
    if (/[a-z0-9]/.test(char)) {
      obj[char] = obj[char]++ || 1;
    }
  }
  return obj;
}

console.log(charCount("Hello aaa!")); // { a: 3 }

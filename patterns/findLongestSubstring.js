// function that takes an input string and outputs
// length of longest substring with all unique chars

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char] && seen[char] > start) {
//       start = seen[char];
//     }

//     // index - beginning of substring + 1 (to include current in count)
//     if (i - start + 1 > longest) {
//       longest = i - start + 1;
//     }

//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

// function findLongestSubstring(str) {
//   let longest = 0;
//   let start = 0;
//   let end = 0;
//   let seen = {};

//   while (start < str.length && end < str.length) {
//     let startChar = str[start];
//     let endChar = str[end];
//     if (!seen[endChar]) {
//       seen[endChar] = 1;
//       end++;
//     } else {
//       longest = Math.max(longest, end - start);
//       seen[startChar] = 0;
//       start++;
//     }
//   }
// }

function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let end = 0;
  let seen = {};

  while (start < str.length && end < str.length) {
    let startChar = str[start];
    let endChar = str[end];
    if (!seen[endChar]) {
      seen[endChar] = 1;
      end++;
    } else {
      seen[startChar] = 0;
      start++;
    }
    longest = end - start > longest ? end - start : longest;
  }

  return longest;
}
console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6

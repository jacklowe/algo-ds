// write a function that takes a sorted arr
// and returns the two values that sum to zero
// or undefined if condition cannot be satisfied

// naive O(n ** 2) time, O(1) space
function sumZeroNaive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

// console.log(sumZeroNaive([-1, 0, 2]));
// console.log(sumZeroNaive([-1, 0, 1, 2]));
// appears to work

// can exploit the fact that our array is sorted to get O(n)
// using a multiple pointer approach

function sumZeroOptimal(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZeroOptimal([-1, 0, 2]));
// console.log(sumZeroOptimal([-1, 0, 1, 2]));

// // write a function that counts the number of distinct
// // values in an array

// // examples
// countUniqueValues([1, 1, 3, 4]); // 3
// countUniqueValues([]); // 0
// countUniqueValues([1, 4]); // 2

function countUniqueValuesNaive(arr) {
  // naive approach would be to compare
  // every value with every other value
  if (arr.length === 0) return 0;
  count = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let difference = arr[i] - arr[j];
      if (difference !== 0) count++;
    }
  }
  return count;
}

function countUniqueValuesOptimal1(arr) {
  if (arr.length === 0) return 0;

  let count = 1;
  let i = 0;
  // iterate over j until end of arr
  for (let j = 1; j < arr.length; j++) {
    // compare arr[i] and arr[j]
    if (arr[i] !== arr[j]) {
      count++;
    }
    i++;
  }
  return count;
}

// we dont even need the second pointer with this approach
function countUniqueValuesOptimal2(arr) {
  if (!arr.length) return 0;

  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      count++;
    }
  }
  return count;
}
// console.log(countUniqueValuesOptimal2([1, 1, 3, 4])); // 3
// console.log(countUniqueValuesOptimal2([1, 2, 3, 3, 4])); // 4
// console.log(countUniqueValuesOptimal2([])); // 0
// console.log(countUniqueValuesOptimal2([1, 4])); // 2

// we may also remove the duplicates
function removeDuplicates(arr) {
  if (!arr.length) return [];

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  let numUnique = i + 1;
  let numDuplicates = arr.length - numUnique;
  for (let k = 0; k < numDuplicates; k++) {
    arr.pop();
  }
  return arr;
}

// console.log(removeDuplicates([1, 1, 3, 4])); // 3
// console.log(removeDuplicates([1, 2, 3, 3, 4])); // 4
// console.log(removeDuplicates([])); // 0
// console.log(removeDuplicates([1, 4])); // 2

function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 3, 4])); // 3
// console.log(countUniqueValues([1, 2, 3, 3, 4])); // 4
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([1, 4])); // 2

function removeElement(arr, val) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== val) {
      arr[i] = arr[j];
      i++;
    }
  }
  return i;
}
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// var removeElement = function(nums, val) {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] !== val) {
//       nums[i] = nums[j];
//       i++;
//     }
//   }
//   return i;
// };

// i[(1, 2, 2, 3, 4, 4, 2)];
// j;

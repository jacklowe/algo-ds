/* contains two naive O(n**2) nested loop
solutions*/

// write a function called same
// input is two arrays
// output is boolean true/false
// true if every value in first array appears in second
// otherwise false
// frequency of the values must be the same

// note to make sure you have the same frequencies you
// have to delete each match from the second array

// examples

// same([1, 2, 3], [1, 4, 9]); // true
// same([1, 2, 3], [1, 4]); // false
// same([1, 2, 2], [4, 1, 4]); // false

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let val1 of arr1) {
    let numMatches = 0;

    for (let val2 of arr2) {
      if (val1 * val1 === val2) {
        numMatches++;
      }
    }

    if (numMatches === 0) return false;

    const index = arr2.indexOf(val1 * val1);
    arr2.splice(index, 1);
  }
  return true;
}

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] * arr1[i]);
    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 2], [4, 1, 4])); // false

/* first solution uses brute force to see if val**2 
exists in second array whereas second implementation
uses the indexOf method to see if val**2 exists in the 
second array. other than this the two approaches are the same
and both O(n**2) */

/* Thoughts: these solutions are suboptimal, essentially 
because they use arrays, and finding values in an array is
generally O(n), so if you have two arrays of lengths m
and n you are essentially doing something like finding m
values in the n length array. so it makes sense you will
have issues.

so the fundamental issue is that we are choosing the wrong
data structure. this is counterintuitive because you are
already sent down the array path as your inputs are 
arrays */

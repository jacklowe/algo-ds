// used frequency counter patter to get O(n) time
// complexity

// write a function called same
// input is two arrays
// output is a boolean true/false
// true if every value in first array squared is
// in second, frequency of the values must be the same

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const freqCount1 = frequencyCounter(arr1);
  const freqCount2 = frequencyCounter(arr2);

  for (let key in freqCount1) {
    if (!freqCount2[key * key]) return false;
    if (freqCount2[key * key] !== freqCount1[key]) return false;
    return true;
  }
}

// helper function
function frequencyCounter(arr) {
  freqCounter = {};
  for (let val of arr) {
    freqCounter[val] = freqCounter[val]++ || 1;
  }

  return freqCounter;
}

// could further optimise to get rid of a loop
// basically store the square of the values in the
// first array and then just compare the frequency arrays
// however in this case could not refactor generation of the
// frequecy counter as the way the keys were genreated would
// be different

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  // freqCount1 = {};
  // for (let val of arr1) {
  //   freqCount1[val * val] = freqCount1[val * val]++ || 1;
  // }

  // freqCount2 = {};
  // for (let val of arr2) {
  //   freqCount2[val] = freqCount2[val]++ || 1;
  // }

  freqCount1 = {};
  for (let val of arr1) {
    if (!freqCount1[val * val]) {
      freqCount1[val * val] = 1;
    } else {
      freqCount1[val * val]++;
    }
  }

  freqCount2 = {};
  for (let val of arr2) {
    if (!freqCount2[val]) {
      freqCount2[val] = 1;
    } else {
      freqCount2[val]++;
    }
  }

  console.log(freqCount1, freqCount2);

  for (let key in freqCount1) {
    if (!freqCount2[key]) return false;
    if (freqCount1[key] !== freqCount2[key]) return false;
  }
  return true;
}

// console.log(same2([1, 2, 3], [4, 1, 9])); // true
// console.log(same2([1, 1, 2], [1, 3, 2])); // false

// i think this can be done in an even better way.

const same3 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  freqCount = {};
  for (let val of arr1) {
    freqCount[val * val] ? freqCount[val * val]++ : (freqCount[val * val] = 1);
  }

  for (let val of arr2) {
    if (!freqCount[val]) return false;
    freqCount[val]--;
  }
  return true;
};

console.log(same3([1, 2, 3], [4, 1, 9])); // true
console.log(same3([1, 1, 2], [1, 3, 2])); // false

// this is a really nice approach. probably my favourite.

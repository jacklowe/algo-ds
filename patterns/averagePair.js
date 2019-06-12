// for input sorted int array and number
// determine whether two values in the
// array average to the number
// return true if there exists vals
// otherwise false

function averagePair(arr, targetAverage) {
  let left = 0;
  let right = arr.length - 1;

  // could use a simpler approach than this i.e. a + b /2
  const average = nums => nums.reduce((a, b) => a + b) / nums.length;

  while (left < right) {
    const iterationAverage = average([arr[left], arr[right]]);
    if (iterationAverage === targetAverage) return true;
    else if (iterationAverage > targetAverage) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

// examples
console.log(averagePair([1, 2, 3], 10));
console.log(averagePair([1, 1, 2, 6], 1));

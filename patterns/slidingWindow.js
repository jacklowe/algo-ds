// function that takes input of array and a value
// and returns the max sum of subarray of the
// length value
function maxSubarraySumNaive(arr, num) {
  if (num > arr.length) return null;
  let maxSum = -Infinity;
  // loop from index 0 to num from end
  for (let i = 0; i < arr.length - num + 1; i++) {
    // and sum from i to i + num with another loop
    let tempSum = 0;
    for (let j = i; j < i + num; j++) {
      tempSum += arr[j];
    }
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

// examples
console.log(maxSubarraySumNaive([2, 3, 1, 4, 5], 3)); // 10
console.log(maxSubarraySumNaive([2, 3, 1], 4)); // returns null

// sliding window approach...
//instead of adding all numbers in the window
// we may subtract the previous value and add the next one

function maxSubarraySumSW(arr, val) {
  if (arr.length < val) return null;
  let maxSum = -Infinity;
  let tempSum = 0;
  for (let i = 0; i < val; i++) {
    tempSum += arr[i];
  }
  for (let i = 0; i < arr.length - val + 1; i++) {
    tempSum += arr[i + val] - arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

console.log(maxSubarraySumSW([-2, 3, 1, -4, 5], 3)); // 10
console.log(maxSubarraySumNaive([2, 3, 1], 4)); // returns null

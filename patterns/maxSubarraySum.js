// given input array and number return
// the maximum sum of subarray with number length

function maxSubarraySum(arr, subarrLength) {
  if (!arr.length || !subarrLength || subarrLength > arr.length) return null;

  let maxSum = -Infinity;
  let tempSum = 0;

  // initial sum we will add and subtract from
  for (let i = 0; i < subarrLength; i++) {
    tempSum += arr[i];
  }

  // adding and subtracting from tempSum as we slide window along..
  for (let i = 0; i < arr.length - subarrLength; i++) {
    tempSum += arr[i + subarrLength] - arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

// examples
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([2, 3], 3)); // null
console.log(maxSubarraySum([], 0)); // null

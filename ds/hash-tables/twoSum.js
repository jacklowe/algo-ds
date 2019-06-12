function twoSum(arr, target) {
  let lookup = {};
  for (let i = 0; i < arr.length; i++) {
    const key = target - arr[i];
    if (lookup[key]) {
      return [i, lookup[key] - 1];
    }
    lookup[arr[i]] = i + 1;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));

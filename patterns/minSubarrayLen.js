// function that accepts an arr of pos ints
// and pos int and returns min sub arr length
// whose sum is gte to pos int

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2

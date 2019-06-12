function recursiveRange(num) {
  // base case
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

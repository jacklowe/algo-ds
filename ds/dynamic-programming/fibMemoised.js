function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

function allFib(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(fib(i));
  }
  return arr;
}

console.log(allFib(20));

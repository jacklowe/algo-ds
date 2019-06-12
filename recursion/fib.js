function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(4));

// fib(4) -> fib(3) + fib(2) = fib(2) + fib(1) + fib(2)

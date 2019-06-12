const { performance } = require("perf_hooks");

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(1e6);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

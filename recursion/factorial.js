// iterative approach
// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total = total * i;
//   }
//   return total;
// }

// recursive approach
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(3));

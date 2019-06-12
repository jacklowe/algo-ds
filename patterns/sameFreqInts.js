// input two integers,
// output boolean t/f
// true if same frequencies of digits
// false otherwise

function sameFrequency(int1, int2) {
  int1 = int1.toString();
  int2 = int2.toString();

  if (int1.length !== int2.length) return false;
  let freqCount = {};
  for (let digit of int1) {
    freqCount[digit] ? freqCount[digit]++ : (freqCount[digit] = 1);
  }

  for (let digit of int2) {
    if (!freqCount[digit]) return false;
    freqCount[digit]--;
  }
  return true;
}

console.log(sameFrequency(123, 321));

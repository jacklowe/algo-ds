function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let sortedIndex = i;
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      sortedIndex--;
    }
    arr[sortedIndex] = currentVal;
  }
  return arr;
}

console.log(insertionSort([1, 2, 3, 5, 4]));
// we have the condition within the loop
// reduce time complexity in best case

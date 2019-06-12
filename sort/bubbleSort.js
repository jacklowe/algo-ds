function bubbleSort(arr) {
  for (let i = arr.length; i >= 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([3, 4, 1, 9, 2]));
// its a bubblesort baybeeee
// get in the got dam trayshhh time compl O(n * n)

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) * 0.5);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) * 0.5);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1, 2, 5, 12], 12));

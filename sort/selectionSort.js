function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[lowest];
      arr[lowest] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

// function selectionSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (let i = 0; i < arr.length - 1; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) swap(arr, i, lowest);
//   }
//   return arr;
// }

console.log(selectionSort([2, 1, 3, 8, 5]));

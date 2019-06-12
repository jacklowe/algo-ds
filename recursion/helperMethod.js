function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    let endIndex = helperInput.length - 1;

    if (helperInput[endIndex] % 2 !== 0) {
      result.push(helperInput[endIndex]);
    }
    helperInput.pop();

    helper(helperInput);
  }

  helper(arr);

  return result;
}

// the above implementation should be O(1) because it
// deals with the end element of the arr and avoids shifting
// the indexes
console.log(collectOddValues([1, 2, 3, 5, 4]));

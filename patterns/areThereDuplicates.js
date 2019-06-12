function areThereDuplicates(...args) {
  argFreqs = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (argFreqs[arg]) argFreqs[arg]++;
    else argFreqs[arg] = 1;
  }

  for (let key in argFreqs) {
    if (argFreqs[key] > 1) return true;
  }
  return false;
}

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let pointer = 1;
  while (next < args.length) {
    if (args[pointer--] === args[pointer]) {
      return true;
    }
    pointer++;
  }
  return false;
}

// can implement a stack with an array
// as long as it is lifo
let stack = [];

stack.push("google");
stack.push("instagram");
stack.push("twitch");

stack.pop();
stack.pop();
stack.pop();

// above we we added and removed at
// the end of the list
// we can also use shift/unshift and make
// a stack that interacts with the start of the arr
let stack2 = [];

stack2.unshift("google");
stack2.unshift("instagram");
stack2.unshift("twitch");

stack2.shift();
stack2.shift();
stack2.shift();
// the problem with the second method is that it is
// O(n) because when you shift/unshift you have
// to shift all the indexes up

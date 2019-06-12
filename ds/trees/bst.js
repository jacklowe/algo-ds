class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    let inserted = false;
    while (!inserted) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          inserted = true;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          inserted = true;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.right) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }
}

// time complexity... O(logn) both cases, since if you double the number of nodes you
// only increase the number of steps to insert/find by 1

// want to implement these recursively...

// // recursive soln for insert
// insert(value) {
//     var newNode = new Node(value);
//     if (traverse(this.root)) this.root = newNode;

//     function traverse(current){
//         if (current === null) return true;

//         if (newNode.value > current.value) {
//             if (traverse(current.right)) current.right = newNode;
//         } else if (newNode.value < current.value) {
//             if (traverse(current.left)) current.left = newNode;
//         }

//         return false;
//     }

//     return this;
// }

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
console.log(tree.find(10));

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
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

  preOrderDFS() {
    let nodes = [];

    function traverse(node) {
      nodes.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return nodes;
  }
}

let tree = new BinarySearchTree();
tree.insert(20);
tree.insert(29);
tree.insert(1);
tree.insert(9);
tree.insert(6);
console.log(tree.preOrderDFS());

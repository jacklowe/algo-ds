class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      node.next = null;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let count, current;
    if (index <= this.length * 0.5) {
      count = 0;
      current = this.head;
      while (count < index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count > index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    } else return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let prev = this.get(index - 1);
    let newNode = new Node(val);
    let next = prev.next;

    newNode.next = next;
    newNode.prev = prev;

    prev.next = newNode;
    next.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let node = this.get(index);
    let prev = node.prev;
    let next = node.next;

    prev.next = next;
    next.prev = prev;
    node.next = null;
    node.prev = null;

    this.length--;
    return node;
  }

  print() {
    let count = 0;
    let nodes = [];
    while (count < this.length) {
      nodes.push(this.get(count).val);
      count++;
    }
    console.log(nodes);
  }
}

let list = new DoublyLinkedList();
list.push("dany");
list.push("jon");
list.push("sansa");
list.push("tyrion");

list.insert(2, "jorah");
// console.log(list.get(0));
console.log(list.get(2).prev.val, list.get(2).val, list.get(2).next.val);

// we will add to the end and remove from
// the beginning
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    let first = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
      first.next = null;
    } else {
      this.first = first.next;
      first.next = null;
    }
    this.size--;
    return first;
  }
}

q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());

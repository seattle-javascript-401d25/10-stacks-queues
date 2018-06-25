'use strict';

module.exports = class Stack {
  class Node {
    constructor(value) {
      this.value = value;
      this.head = null;
    }
  }

  enqueue() {
    this.value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }

    return this.value;
  }
  
  dequeue() {
    this.value = this.tail.value;
    this.head = this.tail.next;
    if (this.tail === null) {
      this.head = null;
    }

    return this.value;
  }

  peek() {
    return this.head.value;
  }

  isEmpty() {
    return this.head === null;
  }
};

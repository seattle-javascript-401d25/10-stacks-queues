'use strict';

module.exports = class Queue {
  constructor(value) {
    this.value = value;
    this.head = null;
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
    return this.head.pop();
  }

  peek() {
    return this.head[this.head.length - 1];
  }

  isEmpty() {
    return !this.head.length;
  }
};

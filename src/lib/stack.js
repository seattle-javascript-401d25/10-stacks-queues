'use strict';

const LinkedList = require('./linked-list/list');

// LIFO - last in first out
module.exports = class Stack {
  constructor() {
    this.stack = new LinkedList();
    this.top = null;
    this.length = 0;
  }

  push(value) {
    this.stack.insertAtHead(value);
    this.length += 1;
    this.top = this.stack.head;
  
    return this.length;
  }

  pop() {
    if (!this.stack.head) return null;
    const poppedNode = this.stack.remove(this.stack.head);
    this.top = this.stack.head.value;
    return poppedNode;
  }


  peek() {
    return this.head.value;
  }

  isEmpty() {
    return this.head === null;
  }
};

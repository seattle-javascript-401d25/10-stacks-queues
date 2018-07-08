'use strict';

const LinkedList = require('./linked-list.js');

module.exports = class Queue { //eslint-disable-line
  constructor() {
    this.storage = new LinkedList();
  }

  enqueue(v) {
    return this.storage.append(v);
  }

  dequeue() {
    return this.storage.removeFirst();
  }

  peek() {
    return this.storage.nthFromEnd(0);
  }

  isEmpty() {
    return !this.storage.head;
  }
};

'use strict';

const LinkedList = require('./linked-list.js');

module.exports = class Stack { //eslint-disable-line
  constructor() {
    this.storage = new LinkedList();
  }

  push(v) {
    return this.storage.append(v);
  }

  pop() {
    return this.storage.removeLast();
  }

  peek() {
    return this.storage.nthFromEnd(0);
  }
};

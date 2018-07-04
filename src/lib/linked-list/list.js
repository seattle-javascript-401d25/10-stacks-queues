'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // O(1) time complexity, O(n) space complexity
  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  // REMOVE O(n)
  remove(value) {
    if (!this.head) {
      throw new Error('The linked list is empty');
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return this;
      }
      currentNode = currentNode.next;
    }

    return this;
  }

  // POP: O(n) time complexity, O(1) space complexity
  pop() {
    if (!this.head) {
      return undefined; // if no head just return
    }

    let poppedNode;

    if (!this.head.next) { 
      poppedNode = this.head; 
      this.head = null; 
      return poppedNode.value;
    }

    let currentNode = this.head;

    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }

    poppedNode = currentNode.next;
    currentNode.next = null;
    return poppedNode.value;
  }

  map(callback) {
    const mockList = new LinkedList();
    let currentNode = this.head;

    while (currentNode.next) {
      mockList.insertAtHead(callback(currentNode.value));
      currentNode = currentNode.next;
    }
    mockList.insertAtHead(callback(currentNode.value));

    return mockList;
  }
};

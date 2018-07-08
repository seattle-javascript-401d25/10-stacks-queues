'use strict';

class Node { //eslint-disable-line
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addLast(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    this.tail = newNode;
    return this;
  }

  addFirst(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  removeFirst() {
    if (!this.head) return null;
    
    const firstNode = this.head;
    this.head = firstNode.next;
    if (!this.head) this.tail = null;
    return firstNode;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) return null;

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  insertAfter(value, newValue) {
    if (!this.head) return null;

    const newNode = new Node(newValue);

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
      }
      currentNode = currentNode.next;
    }

    if (currentNode.value === value) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      return this;
    }

    return null;
  }
};

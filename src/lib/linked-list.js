'use strict';

class Node { //eslint-disable-line
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList { //eslint-disable-line
  constructor() {
    this.head = null;
  }

  append(v) {
    const node = new Node(v);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = node;
    return this;
  }

  insertBefore(v, nv) {
    const node = new Node(nv);

    if (this.head.value === v) {
      node.next = this.head;
      this.head = node;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      if (curr.next.value === v) {
        node.next = curr.next;
        curr.next = node;
        return this;
      }
      curr = curr.next;
    }
    return 'unexpected';
  }

  insertAfter(v, nv) {
    const node = new Node(nv);

    let curr = this.head;
    while (curr.next) {
      if (curr.value === v) {
        node.next = curr.next;
        curr.next = node;
        return this;
      }
      curr = curr.next;
    }

    if (curr.value === v) {
      curr.next = node;
      return this;
    }

    return 'unexpected';
  }

  nthFromEnd(n) {
    if (this.head === null) {
      return 'empty';
    }

    let n1 = this.head;
    let n2 = this.head;

    for (let i = 0; i < n; i++) {
      if (!n2.next) return 'unexpected';
      n2 = n2.next;
    }

    while (n2.next) {
      n1 = n1.next;
      n2 = n2.next;
    }
    return n1.value;
  }

  removeFirst() {
    if (!this.head) {
      return this;
    }
    
    let n1 = this.head;
    this.head = n1.next;
    n1 = null;
    return this;
  }

  removeLast() {
    if (!this.head) {
      return this;
    }

    let n1 = this.head;
    while (n1.next.next) {
      n1 = n1.next;
    }
    n1.next = null;
    return this;
  }
};

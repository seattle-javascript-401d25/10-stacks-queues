'use strict';

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.length = 1;
  }
}

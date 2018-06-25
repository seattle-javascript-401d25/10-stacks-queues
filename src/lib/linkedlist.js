'use strict';

const List = module.exports = class {
  constructor() {
    this.length = 0;
  }

  stackPush(val) {
    let newArray = new List();
    let secondArray = [val];
    for (let i = 1; i < newArray.length; i++) { 
      this[this.length] = newArray[i];
      this.length += 1;
    }
    return this.length;
  }

  oldPush(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
      this.length += 1;
    }
    return this.length;
  }

  enqueue(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
      this.length += 1;
    }
    return this.length;
  }

  map(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Expected function');
    }
    if (!this.length) {
      throw new Error('Empty list');
    }
    const rslt = new List();
    for (let i = 0; i < this.length; i++) {
      rslt.push(cb(this[i], i));
    }
    return rslt;
  }

  reduce(cb, acc) {
    if (typeof cb !== 'function') {
      throw new Error('Expected function');
    }
    if (!this.length) {
      throw new Error('Empty list');
    }
    if (!acc) {
      acc = this[0]; /*eslint-disable-line*/
    }
    for (let i = 0; i < this.length; i++) {
      acc = cb(acc, this[i], i);/*eslint-disable-line*/
    }
    return acc;
  }

  filter(cb) {
    const filtered = [];
    if (typeof cb !== 'function') {
      throw new Error('Expected function');
    }
    if (!this.length) {
      throw new Error('list is empty');
    }
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  }

  forEach(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Expected function');
    }
    if (!this.length) {
      throw new Error('list is empty');
    }
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  }

//   pop() {

//   }

//   dequeue() {

// }

// peekStack() {

// }

// peekQueue() {

// }
};

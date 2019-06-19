'use strict';

const Queue = require('../lib/queue');

describe('QUEUE enqueue', () => {
  let queueTest;

  beforeEach(() => {
    queueTest = new Queue();
  });

  afterEach(() => {
    queueTest = null;
  });

  test('enqueue', () => {
    queueTest.enqueue(1);
    expect(queueTest.head).toBe(1);
    queueTest.enqueue(2);
    expect(queueTest.head).toBe(2);
  });
});

describe('QUEUE dequeue', () => {
  let queueTest;

  beforeEach(() => {
    queueTest = new Queue();
  });

  afterEach(() => {
    queueTest = null;
  });

  test('dequeue', () => {
    queueTest.enqueue(4);
    queueTest.enqueue(5);
    queueTest.enqueue(6);
    expect(queueTest.dequeue()).toBe();
    expect(queueTest.dequeue()).toBe();
    expect(queueTest.dequeue()).toBe();
  });
});


describe('QUEUE peek', () => {
  let queueTest;

  beforeEach(() => {
    queueTest = new Queue();
  });

  afterEach(() => {
    queueTest = null;
  });

  test('peek', () => {
    queueTest.enqueue(1);
    expect(queueTest.peek()).toBe(1);
  });
});

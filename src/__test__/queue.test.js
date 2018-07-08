'use strict';

const Queue = require('../lib/queue.js');

let q;

beforeAll(() => {
  q = new Queue();
});

describe('QUEUE Tests', () => {
  beforeEach(() => {
    q.enqueue(0);
    q.enqueue(1);
    q.enqueue(2);
  });

  test('#ENQUEUE', () => {
    const q2 = q.storage.head;
    
    expect(q2.value).toEqual(0);
    expect(q2.next.value).toEqual(1);
    expect(q2.next.next.value).toEqual(2);
  });

  test('#DEQUEUE', () => {
    expect(q.storage.head.value).toEqual(0);
    q.dequeue();
    expect(q.storage.head.value).toEqual(1);
    q.dequeue();
    expect(q.storage.head.value).toEqual(2);
  });

  test('#PEEK', () => {
    expect(q.peek()).toEqual(2);
    q.enqueue(3);
    expect(q.peek()).toEqual(3);
  });
});

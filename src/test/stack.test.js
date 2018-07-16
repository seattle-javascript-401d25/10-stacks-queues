
'use strict';

const Stack = require('../lib/stack');

describe('STACK push', () => {
  let stackTest;

  beforeEach(() => {
    stackTest = new Stack();
  });

  afterEach(() => {
    stackTest = null;
  });

  test('push', () => {
    stackTest.push(1);
    expect(stackTest.top).toBe(1);
    stackTest.push(2);
    expect(stackTest.top).toBe(2);
    stackTest.push(3);
    expect(stackTest.top).toBe(3);
  });
});

describe('STACK pop', () => {
  let stackTest;

  beforeEach(() => {
    stackTest = new Stack();
  });

  afterEach(() => {
    stackTest = null;
  });

  test('pop', () => {
    stackTest.push(3);
    stackTest.push(2);
    stackTest.push(1);
    expect(stackTest.pop()).toBe();
    expect(stackTest.top).toBe(1);
    expect(stackTest.pop()).toBe();
    expect(stackTest.top).toBe(1);
  });
});

describe('STACK peek', () => {
  let stackTest;

  beforeEach(() => {
    stackTest = new Stack();
  });

  afterEach(() => {
    stackTest = null;
  });

  test('peek', () => {
    stackTest.push(1);
    expect(stackTest.peek()).toBe(1);
  });
});
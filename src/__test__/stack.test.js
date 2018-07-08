'use strict';

const Stack = require('../lib/stack');

describe('Stack #push', () => {
  let testStack;

  beforeEach(() => {
    testStack = new Stack();
  });

  afterEach(() => {
    testStack = null;
  });

  test('PUSH', () => {
    testStack.push(1);
    expect(testStack.top).toBe(1);
    testStack.push(2);
    expect(testStack.top).toBe(2);
    testStack.push(3);
    expect(testStack.top).toBe(3);
  });

  test('PUSH returns length of new stack', () => {
    expect(testStack.push(1)).toBe(1);
    expect(testStack.push(1)).toBe(2);
    expect(testStack.push(1)).toBe(3);
  });
});

describe('POP', () => {
  let testStack;

  beforeEach(() => {
    testStack = new Stack();
  });

  afterEach(() => {
    testStack = null;
  });

  test('POP', () => {
    testStack.push(3);
    testStack.push(2);
    testStack.push(1);
    expect(testStack.pop()).toBe(1);
    expect(testStack.top).toBe(2);
    expect(testStack.pop()).toBe(2);
    expect(testStack.top).toBe(3);
  });
});

describe('PEEK', () => {
  let testStack;

  beforeEach(() => {
    testStack = new Stack();
  });

  afterEach(() => {
    testStack = null;
  });

  test('PEEK', () => {
    testStack.push(1);
    expect(testStack.peek()).toBe(1);
  });
});

'use strict';

const Stack = require('../lib/stack');

describe('testing stack', () => {
  let mockStack;
  beforeEach(() => {
    mockStack = new Stack();
  });

  afterEach(() => {
    mockStack = null;
  });

  test('push method on stack', () => {
    mockStack.push(10);
    expect(mockStack.top.value).toEqual(10);
    expect(mockStack).toHaveLength(1);
  });
  test('pop method on stack', () => {
    mockStack.push(10);
    mockStack.push(15);
    mockStack.push(20);
    mockStack.pop();
    expect(mockStack.top.value).toEqual(20);
    mockStack.pop();
    expect(mockStack.top.value).toEqual(15);
  });
});

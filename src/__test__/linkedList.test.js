'use strict';

const LinkedList = require('../lib/linked-list/list');

describe('testing linked list', () => {
  let testList;
  beforeEach(() => {
    testList = new LinkedList();
  });

  afterEach(() => {
    testList = null;
  });

  test('making sure we instantiate a new instance', () => {
    expect(testList.head).toBeNull();
  });

  test('#insertAtHead', () => {
    testList.insertAtHead(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtHead(6);
    expect(testList.head.value).toEqual(6);
    expect(testList.head.next.value).toEqual(5);

    
    testList.insertAtHead(7);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(5);
  });

  test('#remove: removes from 1st position', () => {
    testList.insertAtHead(1);
    testList.insertAtHead(2);
    testList.insertAtHead(3);
    testList.remove(3);
    expect(testList.head.value).toBe(2);
  });

  test('#pop', () => {
    expect(testList.pop()).toBe(undefined);
    testList.insertAtHead(1);
    testList.insertAtHead(2);
    expect(testList.pop()).toBe(1);
    expect(testList.pop()).toBe(2);
  });

  test('#map', () => {
    testList.insertAtHead(3);
    testList.insertAtHead(2);
    testList.insertAtHead(1);
    
    const mappedList = testList.map(x => x * 2);
    expect(mappedList.head.value).toBe(6);
    expect(mappedList.head.next.value).toBe(4);
    expect(mappedList.head.next.next.value).toBe(2);

    expect(testList.head.value).toBe(1);
    expect(testList.head.next.value).toBe(2);
    expect(testList.head.next.next.value).toBe(3);
  });
});

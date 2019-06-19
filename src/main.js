'use strict';

require('./lib/stack');
const Queue = require('./lib/queue');

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q, 'q with three elements');

q.dequeue();
console.log(q, 'q after dequeue');
console.log(q.peek());

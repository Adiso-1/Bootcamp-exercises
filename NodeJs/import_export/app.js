//1. require is running syncronously while import is async, in addition import is doing hoisting

// 2.
import fs from 'fs';
import process from 'process';
import module1Func from './module1.js';
import sum from './sum.js';
import reduction from './reduction.js';
module1Func();
console.log(sum(3, 5));
console.log(reduction(10, 5));

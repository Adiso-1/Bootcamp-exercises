// !1
const maxCount = 1000000;

const myObj1 = {};
console.time('mao loop adding');
for (let i = 0; i < maxCount; i++) {
    myObj1.name = i;
}
console.timeEnd();

const myMap = new Map();
console.time();
for (let i = 0; i < maxCount; i++) {
    myMap.set('name',i)
}
console.timeEnd();

// !2
console.time();
myObj1['name'];
console.timeEnd();

console.time();
myMap.get('name')
console.timeEnd();

// !3
console.time();
myObj1.last = 'Levy';
console.log(myObj1['last']);
console.timeEnd();

console.time();
myMap.set('last','Levy');
console.log(myMap.get('last'));
console.timeEnd();

// !4
console.time();
delete myObj1.name;
console.timeEnd();

console.time();
myMap.delete('name')
console.timeEnd();

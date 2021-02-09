let people = ["Greg", "Mary", "Devon", "James"];
// 1. people.forEach(el => {console.log(el);})

people.splice(0,1)
// also can do shift

// 3.
people.pop()

// 4.
people.unshift('Matt');

// 5
people.push('Adi');

// 6.
let i = 0;
while (i < people.length) {
    if (people[i] === 'Mary') {
        console.log(people[i]);
        break;
    }
    console.log(people[i]);
    i++;
}
// 7.
let peopleNew = [...people].slice(2);
console.log(peopleNew);

// 8.
console.log(people);
console.log(people.indexOf('Mary'));

// 9.
console.log(people.indexOf('Foo'));

// 10.
people = ["Greg", "Mary", "Devon", "James"];
let peopleNew2 = [
    ...people.slice(0,2),
    'Elizabeth','Artie',
    ...people.slice(3)
]
console.log(peopleNew2);

//  10.1 
// people.splice(2,1,'Elizabeth','Artie')

// 11.
let withBob = [...people,'Bob'];
console.log(withBob);

// 11.1 - another method

// This method won't change the original array
const withBob2 = people.concat('Bob');
console.log(withBob2);

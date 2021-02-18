function printToN(n) {
    for (let i = 0; i <= n ; i++) {
        console.log(i);
    }
}
// printToN(5)

//! 2. 
function countX(n, t) {
    let counter = 0;
    for (let i = 1; i <= n; i++) {
        i % t === 0 ? counter++ : null;
    }
    return counter;
}
// console.log(countX(10, 2));

// ! 3.
function countEven(n) {
    let counter = 0;
    n.toString()
    .split("")
    .forEach((num) => {
        num % 2 === 0 ? counter++ : null;
    });
    return counter;
}
// console.log(countEven(1640));
// ! 4.
function countEvenOnRange(n) {
    let counter = 0;
    if (n.toString().split("").length < 3 ) {
        return `input must be a number bigger than 99`
    } else {
        for (let i = 111; i <= n; i++) {
            i.toString().split("").forEach(el => {
                el % 2 === 0 ? counter++ : null;
            })
        }
    }
    return counter;
}
// console.log(countEvenOnRange(150)); 

//! 5.
function printReverse() {
    const array = [];
    for (let i = 100; i >= 0; i--) {
        array.push(i)
    }
    array.reduce((a,b) => b % 2 === 0 && console.log(b),0)
}
// printReverse()
//! 6.
function quadratic(a,b,c) {
    let x1 = (-b + (b ** 2 - 4 * a * c)) / 2 * a;
    let x2 = (-b - (b ** 2 - 4 * a * c)) / 2 * a;
    return `x1 = ${x1} , x2 = ${x2}`
}
// console.log(quadratic(1,2,3));

//! 7.

function countABC(string) {
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < abc.length; i++) {
        let counter = 0;
        for (let j = 0; j < string.length; j++) {
            if (abc[i] === string[j].toLowerCase()) {
                counter++
            }                      
        }
        if (counter > 0) {
            console.log(`${abc[i]} = ${counter}`);
        }
    }
}
countABC('Hello')

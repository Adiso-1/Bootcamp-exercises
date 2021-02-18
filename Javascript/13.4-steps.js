// * with repeat
const steps = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(`${'#'.repeat(i)}${' '.repeat(n - i)}`);
    }
}
steps(3)
// * with 2 loops
const hash = '#';
const myBreak = ' ';
const steps2 = (n) => {
    for (let i = 1; i <= n; i++) {
        let myArray = [];
        for (let j = 0; j < n ; j++) {
            (j < i) ? myArray.push(hash) : myArray.push(myBreak)
    }
    console.log(myArray.join(''));
    }
}
steps2(4)

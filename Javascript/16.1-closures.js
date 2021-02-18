var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9); // 5
var result = firstResult(2); // 5

//! 2. 
var a = 1;
function b2() {
    debugger
    a = 10; 
    return; // function doesnt return nothing
    function a() {} // this wont be invoked
}
b2();
// console.log(a); // 1

//! 3. 

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i); // we'll get 3 3 3 - the reason is that the i is declared in the global scope, so the function will run on the timeout and at the end will get the value of 3 that is the last known and will print it 3 times. - we can declare the i, inside the for loop and this will solve the problem.
    }
    setTimeout(log, 100);
}
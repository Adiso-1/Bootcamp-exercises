'strict mode'
//! 1. 
function funcA() {
    console.log(a); // a will be undefined
    console.log(foo()); // 2
    var a = 1;
    function foo() {
        return 2; 
    }
}
funcA();
//! 2. 
//var test;
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); // "Aurelio De Rosa"
var test = obj.prop.getFullName;
console.log(test()); // in console => "John Doe" , in node => undefined

// ! 3.
function funcB() {
    let a = (b = 0);
    a++;
    return a;
}
funcB();
console.log(typeof a); // a declared in the func scope and cannot access from outside, typeof will be undefined
console.log(typeof b); // javascript will interpert the b as window.b - the type will be number (0)
// ! 4.

function funcC() {
    console.log("1");
}
funcC(); // 2 because of hoisting and overwrite
function funcC() {
    console.log("2");
}
funcC(); // 2 because of hoisting and overwrite

// ! 5.

function funcD1() {
    d = 1;
}
funcD1();
console.log(d); // d is like window.d ==> print 1
function funcD2() {
    var e = 1;
}
funcD2();
//? console.log(e); // e declared inside a func inside a function cannot be accessed from outside

// ! 6.

function funcE() {
  console.log("Value of f in local scope: ", f); // insted of f will be 1
}
console.log("Value of f in global scope: ", f); // var declared after
var f = 1;
funcE();
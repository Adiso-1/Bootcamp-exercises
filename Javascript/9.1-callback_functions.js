// 1
const isString = (string, cb) => typeof string === 'string' && cb(string);
const logString = (string) => console.log(string);;

isString('Hello',logString);
isString(123,logString);

// 2
function firstWordUpperCase (string, cb) {
    let newString = string.charAt(0).toUpperCase() + string.slice(1);
    return cb(newString);
}

// 3
const spaceToDashes = (string) => string.replace(/\s+/g,'-');
console.log(firstWordUpperCase('hello my name is adi',spaceToDashes));

// 4
function myFunc (arg,cb) {
    return cb(arg);
}
const myArg = (arg1) => arg1;
console.log(myFunc('Hello World',myArg));
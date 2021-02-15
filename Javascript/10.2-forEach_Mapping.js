// 1.
function doubleValues(argArr) {
    let myMap = argArr.map(el => el*2);
    return myMap
}
myArr1 = [1,2,3,4,5,6,7,8];
console.log(doubleValues(myArr1));
// 2.
function onlyEvenValues(argArr) {
    const evenArray = [];
    argArr.forEach(el => el % 2 === 0 && evenArray.push(el));
    return evenArray;
}
console.log(onlyEvenValues(myArr1));

// 3.

myArr2 = [1,'hello',3,4,'Adi',6,'pizza',8];
function showFirstAndLast(argArr) {
    const stringArray = [];
    argArr.forEach(el => typeof el === 'string' && stringArray.push(el));
    return [stringArray[0],stringArray[stringArray.length - 1]]
}
console.log(showFirstAndLast(myArr2));
//! 4.
function vowelCount(stringArg) {
    const regex = /^[aeiou]$/i;
    let myObj = {};
    let newString = stringArg.toLowerCase().replace(/\s/ig,'').split('');
    console.log(newString);
    newString.forEach(el => {
        if (regex.test(el)) {
            if (myObj.hasOwnProperty(el)) {
                myObj[el]++;
            } else {
                myObj[el] = 1
            }
        }
    })
    return myObj;
}
console.log(vowelCount('My name is Adi'));
//!

// 5.
function capitalizeFunc (string) {
    const newStringUpper = string.split('').map(el => el.toUpperCase())
    return newStringUpper.join('')
}
console.log(capitalizeFunc('My name is Adi'));

// 6.
function shiftLetters(string) {
    let stringArr = string.replace(/\s/ig,'-').split('');
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    const newArray = []
    let abcArr = abc.split('');
    stringArr.forEach((el,i) => {
        console.log(el.toLowerCase());
        if (el.toLowerCase() === 'a' || el === '-') {
            newArray.push(el);
        } else {
            let char = abc.indexOf(el.toLowerCase());
            newArray.push(abcArr[char - 1]);
        }
    })
    return newArray;
}
console.log(shiftLetters('My name is Adi'));
// 7.
function swapCase(string) {
  return string
    .split(" ")
    .map((word, index) => {
      return index % 2 === 0 ? capitalizeFunc(word) : word;
    })
    .join(" ");
}
console.log(swapCase('My name is Adi'));
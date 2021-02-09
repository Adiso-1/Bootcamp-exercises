// 1. 
let filledArray = [];
filledArray[99] = null;
filledArray.fill({name: 'Adi'})
// console.log(filledArray);

// 2. 
let filledArray2 = Array.from({length:100},(_item,index) => index + 1)
// console.log(filledArray2);

// 3. 

let myObj = {
    name: 'Adi',
    surname: 'Levy',
    country: 'Israel',
}
console.log(Object.values(myObj));

// 5. 
const myArray = ['Hello' , 'I' , "Am" , "Adi"];
console.log(Array.isArray(myArray));

// 6.
const myNewArray = [...myArray];
const myNewArray2 = myArray.splice(0)
console.log(myArray); // myArray will be empty
console.log(myNewArray2); // will be equal to myArray
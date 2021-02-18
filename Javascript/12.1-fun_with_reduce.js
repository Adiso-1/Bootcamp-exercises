const myArray = [10,5,9,-1,0,80,100,50,20,-10];
const myArray2 = [-1,-2,-20];

const maxNumber = (array) => {
    return array.reduce((accumulator,currentValue) => 
        {
        let maximum = accumulator;
        if (maximum < currentValue) {
            maximum = currentValue;
        };
        return maximum;
    })
}   
// console.log(maxNumber(myArray));
// console.log(maxNumber(myArray2));

// ! 2.
const sumEvenNumber = (array) => {
    return array.reduce((acc,curr) => {
        if (curr % 2 === 0) {
            return acc + curr;
        } else {
            return acc + 0;
        }
    },0)
}
// console.log(sumEvenNumber(myArray));
// console.log(sumEvenNumber(myArray2));

// ! 3.
const getAverage = (array) => {
    return array.reduce((acc,curr) => {
        return (acc + curr)
    },0) / array.length;
}
console.log(getAverage(myArray));


// ! A
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//1.
console.log(foods.sort()); // mutable function
//2.
console.log(foods.reverse());
// ! B
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

foodsWithUpperCase.sort(function(a,b) {
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    } else if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
})
console.log(foodsWithUpperCase);
// ! C
const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

words.sort((a,b) => a.length - b.length)
console.log(words);

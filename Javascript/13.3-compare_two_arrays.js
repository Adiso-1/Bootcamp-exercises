const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

function sameFood(array,array2) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array[i] === array2[j]) {
                console.log(array[i]);
            }            
        }
    }
}
sameFood(food,food1);
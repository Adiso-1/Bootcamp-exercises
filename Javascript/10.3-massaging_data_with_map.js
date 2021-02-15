const data = [
 {
 name: "John",
 birthday: "1-1-1995",
 favoriteFoods: {
 meats: ["hamburgers", "sausages"],
 fish: ["salmon", "pike"],
 },
 },
 {
 name: "Mark",
 birthday: "10-5-1980",
 favoriteFoods: {
 meats: ["hamburgers", "steak", "lamb"],
 fish: ["tuna", "salmon", "barracuda"],
 },
 },
 {
 name: "Mary",
 birthday: "1-10-1977",
 favoriteFoods: {
 meats: ["ham", "chicken"],
 fish: ["pike"],
 },
 },
 {
 name: "Thomas",
 birthday: "1-10-1990",
 favoriteFoods: {
 meats: ["bird", "rooster"],
 fish: ["salmon"],
 },
 },
 {
 name: "Mary",
 birthday: "1-10-1977",
 favoriteFoods: {
 meats: ["hamburgers", "lamb"],
 fish: ["anchovies", "tuna"],
 },
 },
];
// 1. 
function getName(array) {
    const nameArray = array.map(el => el.name)
    return nameArray
}
console.log(getName(data));

// 2.
function getAge (array) {
    let over_1990 = [];
    array.forEach((person) => {
        new Date(person.birthday).getFullYear() < 1990 ? over_1990.push(person) : null;
    });
    return over_1990;
}
console.log(getAge(data));

3.
const foods = (arr) => {
    const obj = {};
    arr.forEach((el) => {
        el.favoriteFoods.meats.forEach((meatfoods) => {
            if (obj[meatfoods]) {
                obj[meatfoods] = obj[meatfoods] + 1;
            } else {
                obj[meatfoods] = 1;
            }
        // obj[meatfoods] = obj[meatfoods] + 1 || 1;
        })
        el.favoriteFoods.fish.forEach((fishFoods) => {
            if (obj[fishFoods]) {
                obj[fishFoods] = obj[fishFoods] + 1;
            } else {
                obj[fishFoods] = 1;
            }
        })
    })
    return obj;
    
}
console.log(foods(data));
const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
cashRegister: 200
}

//! ====================1====================================
function getCandy(candyStore, id){
    let candy = candyStore.candies.find(candy => candy.id === id);
    return candy;
} 
console.log(getCandy(candyStore, 'as12f'));
//! ====================2====================================
function getPrice(candyStore, id){
    return getCandy(candyStore, id).price;
} 
console.log(getPrice(candyStore, 'as12f'));
//! ====================3====================================
function addCandy(candyStore, id, name, price){
    if (!getCandy(candyStore, id)) { // item doesnt found
        newCandy = {
            name,
            id,
            price,
            amount: 1,
        }
        return candyStore.candies.push(newCandy) // added the new ite to store
    } else {
        getCandy(candyStore, id).amount ++; // add 1 from the same item
    }
}
addCandy(candyStore,'1234','ahla', 5); // new item in store 
//? addCandy(candyStore,'as12f'); // old item in store
//! ====================4====================================
function buy(candyStore, id){
    if (getCandy(candyStore, id).amount > 0) {
        candyStore.cashRegister += getCandy(candyStore, id).price
        getCandy(candyStore, id).amount --;
    } else {
        console.log('Out of stock');
    }
}
buy(candyStore,'as12f'); // => amount 1 
buy(candyStore,'as12f'); // => amount 0
buy(candyStore,'as12f'); // will not work

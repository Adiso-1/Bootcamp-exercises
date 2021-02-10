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
    const candy = candyStore.candies.find((candy) => {
        return candy.id === id;
    })
    return candy;   
}
console.log(getCandy(candyStore,'as12f'));
//! ====================2====================================
function getPrice(candyStore, id){
    return getCandy(candyStore, id).price
} 
console.log(getPrice(candyStore, "5hd7y"));
//! ====================3====================================
function addCandy(candyStore, id, name, price){
    const candy = getCandy(candyStore,id) ;
    if(candy) {
        candy.amount ++;
    } else {
        const candyObj = {
            name,
            id,
            price,
            amount: 1,
        }
    }
    // candyStore.candies.push(candyObj)
}
// addCandy(candyStore,'as12f');
addCandy(candyStore,'1234','bamba',5);
//! ====================4====================================
function buy (candyStore,id) {
    const candy = getCandy(candyStore,id);
    if (candy.amount > 0) {
        candyStore.cashRegister += candy.price;
        candy.amount --;
    } else {
        console.log('No candies')
    }
}
buy(candyStore,'as12f');
buy(candyStore,'as12f');
console.log(candyStore);
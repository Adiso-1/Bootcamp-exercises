class Car {
    constructor(brand,speed) {
        this.brand = brand;   
        this.speed = speed;   
    }
    getBrand () {
        return this.brand;
    }
    getSpeed () {
        return this.speed;
    }
    print() {
        console.log(`${this.brand} -> ${this.speed}`);
    }
    setSpeed (newSpeed) {
        this.speed = newSpeed;
    }
}

// 7 + 8
const cars = [
	new Car('Mercedes', 220),
	new Car('BMW', 180),
	new Car('Ferrari', 300),
	new Car('Tesla', 200),
];
//! 7 With reduce
let reduce = cars.reduce((acc, curr) => {
    return acc.getSpeed() > curr.getSpeed() ? acc : curr;
})
console.log(reduce);

//! 7 With Sort() 
const sortArr =  cars.sort((a, b) => a.getSpeed() - b.getSpeed());
console.log(sortArr[sortArr.length - 1]);
//!8
console.log(sortArr);
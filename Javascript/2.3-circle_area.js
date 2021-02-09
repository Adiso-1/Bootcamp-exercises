function circleArea(radius) {
    return Math.PI * radius ** 2
}
let myCircleArea = circleArea(2);
console.log(myCircleArea);
let myRoundedCircleArea = myCircleArea.toFixed(2);
console.log(myRoundedCircleArea);
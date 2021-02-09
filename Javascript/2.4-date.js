const date = new Date();
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
function theDayIs () {
    return `Today is ${day[date.getDay()]} the ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()}`
}
console.log(theDayIs());
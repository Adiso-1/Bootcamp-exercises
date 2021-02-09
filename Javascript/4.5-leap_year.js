function isLeap (year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return "It is indeed a leap year"
        } else if (year % 400 === 0) {
            return "It is indeed a leap year"
        } else {
            return 'This is not a leap year.'
        }
    }
}
console.log(isLeap(2012));
console.log(isLeap(2100));
console.log(isLeap(2400));

function passValid (password) {
    if (password.length > 7) {return 'Strong'} 
    return 'Weak'
}
console.log(passValid('1234567'));

// ternary conditional expression

// function passValid2 (password) {
//     return password.length > 7 ? 'Strong' : 'Weak';
// }
const passValid2 = (password) => password.length > 7 ? 'Strong' : 'Weak';
console.log(passValid2('12345678'));

//! uses a && logical operator
// function passValid3 (password) {
//     return password.length > 7 && typeof password === 'string' ? 'Strong' : 'Weak';
// }
const passValid3 = (password) => {
    return (password.length > 7 && 'Strong') || 'Weak';
}
console.log(passValid3('hellohello'));

//?
function passValid4 (password) {
    return password.length > 7 && /[A-Z]/.test(password) ? 'Very Strong' : password.length > 7 ? 'Strong' : 'Weak';
}
console.log(passValid4('Helloello'));
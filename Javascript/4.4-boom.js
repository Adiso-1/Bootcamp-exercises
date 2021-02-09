let myArr = [];
function boom(n) {
    for (let i = 1 ; i <= n; i++) {
        if (i % 7 === 0 && i.toString().includes('7')) {
            myArr.push('Boom-Boom');
        } else if (i % 7 === 0 ){
            myArr.push('Boom');
        }
        else {
            myArr.push(i)
        }        
    }
    return myArr;
}
console.table(boom(18));
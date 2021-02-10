function myFunc(obj) {
    let newObj = {};
    for (let key in obj) {
        console.log(key);
        if (myObject.hasOwnProperty(key)) {
            newObj[obj[key]] = key;
        }
    }
    return newObj;
}
myObject = {
    name: 'Adi',
    last: 'Levy',
}
console.log(myFunc(myObject));
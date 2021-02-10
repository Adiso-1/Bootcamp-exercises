function myFunc (array) {
    let myObject = {};
    let counter = 0;
    let phrase = array.join("").toLowerCase().replace(/\s/g, '');
    for (let i = 0; i < phrase.length; i++) {
        counter = 0;
        for (let j = 0; j < phrase.length; j++) {
            if (phrase[i] === phrase[j]){
                counter += 1;
            }
            myObject[phrase[i]] = counter;            
        }
    }
    return myObject;
}
const array = ["Hello", "Good Day", "Your Welcome", "hotdog","hamburgers"];
console.log(myFunc(array));

const myObj1 = {
    name: 'Adi'
}
const myObj2 = {
    name: 'Hello'
}
const myObj3 = {
    name: 'Levy'
}
const myMap = new Map();
myMap.set(myObj1.name,10)
myMap.set(myObj2.name,20)
myMap.set(myObj3.name,30)


for (const name of myMap) {
    console.log(name[0],name[1]);
}
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
let finlandData = describeCountry('Finland',6,'Helsinky')
let israelData = describeCountry('Israel',9,'Jerusalem')
let spainData = describeCountry('Spain',47431256,'Madrid')
console.log(finlandData);
console.log(israelData);
console.log(spainData);
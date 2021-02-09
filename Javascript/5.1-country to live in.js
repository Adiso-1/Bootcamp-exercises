function countryToLiveIn (language, isIsland, population) {
    if (isIsland && language === 'English' && population < 50) {
        return `${myCountry.country} Is the country for you`
    } else {
        return `${myCountry.country} Is NOT the country for you`
    }
}

myCountry = {
    country: 'Finland',
    language: 'English',
    population: 10,
    isIsland: true,
}
console.log(countryToLiveIn(myCountry.language,myCountry.isIsland,myCountry.population));

//! second solution:
// function countryToLiveIn (country,language, isIsland, population){
//     console.log(language === 'English' , population < 50);
//     if (isIsland === false && language === 'English' && population < 50) {
//         return `${country} Is the country for you`
//     } else {
//         return `${country} Is NOT the country for you`
//     }
// }
// console.log(countryToLiveIn('Israel','English',false,9));
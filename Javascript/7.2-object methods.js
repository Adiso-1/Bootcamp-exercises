const myCountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew',
    population: 9,
    neighbours: ['jordan','egypt','Syria','Lebanon'],
    describe : function () {
        return `${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },
    checkIsland: function () {
        this.neighbours < 1 ? this.isIsland = false : this.isIsland = true;
        return this.isIsland;
    },
    
}
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);

const populations = [1439,1380,331,273];
function populationPercentages(array) {
    let percentages = [];
    for (let i = 0; i < array.length; i++) {
        percentages.push(populations[i] / 7990 * 100); 
    }
    return percentages;
}
console.log(populationPercentages(populations));
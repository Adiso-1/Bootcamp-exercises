const populations = [1439,1380,331,273];
function populationPercentages(array) {
    let percentages = [];
    let i = 0;
    while (i < array.length) {
        percentages.push(populations[i] / 7990 * 100);
        i++;
    }
    return percentages;
}
console.log(populationPercentages(populations));

// 2. Because we need to initialize the counter i , i prefer the for loop
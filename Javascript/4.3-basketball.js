johnTeamScore = 89 + 120 + 103;
mikeTeamScore = 116 + 94 + 123;
maryTeamScore = 97 + 134 + 105
if (avgCalculator(johnTeamScore) > avgCalculator(mikeTeamScore) && avgCalculator(johnTeamScore) > avgCalculator(maryTeamScore)) {
    console.log(`John's Team wins with average of ${avgCalculator(johnTeamScore)}` );
} else if (avgCalculator(mikeTeamScore) > avgCalculator(johnTeamScore) && avgCalculator(mikeTeamScore) > avgCalculator(maryTeamScore)) {
    console.log(`Mike's Team wins with average of ${avgCalculator(mikeTeamScore)}`);
} else if (avgCalculator(maryTeamScore) > avgCalculator(johnTeamScore) && avgCalculator(maryTeamScore) > avgCalculator(mikeTeamScore)){
    console.log(`Mary's Team wins with average of ${avgCalculator(maryTeamScore)}`);
} else {
    console.log(`It's a tie! ${johnTeamScore}`);
}
function avgCalculator (teamScore) {
    return teamScore / 3
}
message = 'How many siblings do you have?'
let numSiblings = Number(window.prompt(message));

if (numSiblings === 1) {
    console.log(`1 sibling!`);
} else if (numSiblings > 1){
    console.log(`More than 1 sibling!`);
} else {
    console.log(`No siblings!`);
}
// 6. When the js renders it takes the number 1 and interprets it as a string and with === it doesn't work
// 8. == could cause the comparing problem of the truthy and falsy, so we should always compare ===.
// === is exact comparing of data types

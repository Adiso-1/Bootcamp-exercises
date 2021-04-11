const fs = require('fs');

// fs.writeFileSync('notes.txt', 'this is a text file');

// fs.copyFileSync('notes.txt', 'notes-copy.txt');

// fs.rename('notes-copy.txt', 'notes-rename.txt', (err) => {
// 	if (err) throw err;
// 	console.log('Rename complete!');
// });

// fs.readdirSync('./').forEach((file) => console.log(file));

console.log(fs.existsSync('./files/nothing-here')); // false
console.log(fs.existsSync('./')); // true

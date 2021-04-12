const yargs = require('yargs');
const { argv } = require('yargs');

// ADD
yargs.command({
	command: 'add',
	describe: 'Add 2 numbers',
	builder: {
		num1: {
			describe: 'first num',
			demandOption: true,
			type: 'number',
		},
		num2: {
			describe: 'second num',
			demandOption: true,
			type: 'number',
		},
	},
	handler: () => {
		console.log(argv.num1 + argv.num2);
	},
});

// SUB
yargs.command({
	command: 'sub',
	describe: 'Sub 2 numbers',
	builder: {
		num1: {
			describe: 'first num',
			demandOption: true,
			type: 'number',
		},
		num2: {
			describe: 'second num',
			demandOption: true,
			type: 'number',
		},
	},
	handler: () => {
		console.log(argv.num1 - argv.num2);
	},
});
// MUL
yargs.command({
	command: 'mul',
	describe: 'Mul 2 numbers',
	builder: {
		num1: {
			describe: 'first num',
			demandOption: true,
			type: 'number',
		},
		num2: {
			describe: 'second num',
			demandOption: true,
			type: 'number',
		},
	},
	handler: () => {
		console.log(argv.num1 * argv.num2);
	},
});
// POW

yargs.command({
	command: 'pow',
	describe: 'Pow 2 numbers',
	builder: {
		num1: {
			describe: 'first num',
			demandOption: true,
			type: 'number',
		},
		num2: {
			describe: 'second num',
			demandOption: true,
			type: 'number',
		},
	},
	handler: () => {
		console.log(argv.num1 ** argv.num2);
	},
});
yargs.parse();

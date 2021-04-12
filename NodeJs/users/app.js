const uniqid = require('uniqid');
const yargs = require('yargs');
const users = require('./users.js');

//create
yargs.command({
	command: 'add',
	describe: 'add new user',
	builder: {
		userId: {
			describe: 'user id',
			default: uniqid(),
		},
		userName: {
			describe: 'Enter user name',
			demandOption: true,
			type: 'string',
		},
		userEmail: {
			describe: 'Enter user email',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		users.addUser(argv.userId, argv.userName, argv.userEmail);
	},
});

//read
yargs.command({
	command: 'read',
	describe: 'read users',
	handler() {
		users.readUser();
	},
});

//update

yargs.command({
	command: 'edit',
	describe: 'edit new user',
	builder: {
		userId: {
			describe: 'user id',
			demandOption: true,
			type: 'string',
		},
		userName: {
			describe: 'Enter user name',
			type: 'string',
		},
		userEmail: {
			describe: 'Enter user email',
			type: 'string',
		},
	},
	handler(argv) {
		users.editUser(argv.userId, argv);
	},
});
//delete
yargs.command({
	command: 'remove',
	describe: 'remove user',
	builder: {
		userId: {
			describe: 'user id',
			type: 'string',
			demandOption: true,
		},
	},
	handler(argv) {
		users.removeUser(argv.userId);
	},
});
yargs.parse();

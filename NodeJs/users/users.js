const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

//add
const addUser = (id, name, email) => {
	if (!validator.isEmail(email)) {
		console.log(chalk.bgRed('Not a valid email'));
		return;
	}
	const users = loadUsers();
	const duplicateEmail = users.find((user) => user.email === email);
	if (!duplicateEmail) {
		users.push({
			id,
			name,
			email,
		});
		saveUser(users);
		console.log(chalk.bgGreen('User added successfully'));
	} else {
		console.log(chalk.bgRed('Email already exists'));
	}
};

//read
const readUser = () => {
	const users = loadUsers();
	console.log(chalk.greenBright.inverse('Users:'));
	users.forEach((user) => {
		console.log(
			'user-id: ' +
				user.id +
				', user-name: ' +
				user.name +
				', user-email: ' +
				user.email
		);
	});
};

//update
const editUser = (id, details) => {
	const users = loadUsers();
	users.forEach((user) => {
		if (user.id === id) {
			if (details.userName) user.name = details.userName;
			if (details.userEmail) user.email = details.userEmail;
		}
	});
	saveUser(users);
};

//remove
const removeUser = (id) => {
	const users = loadUsers();
	const filteredUsers = users.filter((user) => user.id !== id);

	if (filteredUsers.length !== users.length) {
		saveUser(filteredUsers);
		console.log(chalk.bgGreen('user succesfully removed'));
	} else {
		console.log(chalk.bgRed('No user found'));
	}
};

const loadUsers = () => {
	try {
		const dataBuffer = fs.readFileSync('users.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (error) {
		return [];
	}
};

const saveUser = (users) => {
	const dataJSON = JSON.stringify(users);
	fs.writeFileSync('users.json', dataJSON);
};
module.exports = {
	addUser,
	removeUser,
	readUser,
	editUser,
};

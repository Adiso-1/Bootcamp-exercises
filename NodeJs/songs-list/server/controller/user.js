const User = require('../model/user');

const signUp = async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		res.status(201).send(user);
	} catch (error) {
		res.status(400).send(error);
	}
	res.send(user);
};

const login = async (req, res) => {
	try {
		const user = await User.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateAuthToken();
		res.send({ user, token });
	} catch (error) {
		res.status(400).send(error);
	}
};

const profile = async (req, res) => {
	res.send(req.user);
};

const addSong = async (req, res) => {
	try {
		req.user.songs = [...req.user.songs, req.body];
		await req.user.save();
		res.send(req.user);
	} catch (error) {
		res.status(400).send(error);
	}
};

const deleteSong = async (req, res) => {
	try {
		req.user.songs = req.user.songs.filter(
			(song) => req.body.song !== song.song
		);
		await req.user.save();
		res.send(req.user);
	} catch (error) {
		res.status(400).send(error);
	}
};
module.exports = { signUp, login, profile, addSong, deleteSong };

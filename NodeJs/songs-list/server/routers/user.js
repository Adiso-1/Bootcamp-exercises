const express = require('express');
const User = require('../model/user');
const {
	signUp,
	login,
	profile,
	addSong,
	deleteSong,
} = require('../controller/user');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/profile', auth, profile);
router.patch('/add-song', auth, addSong);
router.patch('/delete-song', auth, deleteSong);
module.exports = router;

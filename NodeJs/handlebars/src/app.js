const path = require('path');
const express = require('express');
const axios = require('axios');

const app = express();
const puclicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.use(express.static(puclicDirectory));

//get joke
const getJoke = async () => {
	const { data } = await axios.get('https://api.chucknorris.io/jokes/random');

	app.get('', (req, res) => {
		res.render('index', {
			title: 'Chuck Norris Joke',
			data: data.value,
		});
	});
};
getJoke();

app.listen(3000);

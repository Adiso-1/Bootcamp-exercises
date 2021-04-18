const express = require('express');
const path = require('path');
const app = express();
const {
	getMovies,
	createMovie,
	deleteMovie,
	getMovieId,
	updateMovie,
} = require('./utils');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

// get all movies
app.get('/api/movies', async (req, res) => {
	const movies = await getMovies();
	res.status(200).send(movies);
});

// create movie
app.post('/api/movies', (req, res) => {
	createMovie(req.body);
	res.status(201).send('Movie uploaded successfully');
});

// get movie by id
app.get('/api/movies/:id', async (req, res) => {
	const { id } = req.params;
	const movie = await getMovieId(id);
	res.status(200).send(movie);
});

//! update existing movie by id
app.put('/api/movies/:id', (req, res) => {
	const { id } = req.params;
	const data = req.query;
	updateMovie(id, data);
	res.status(200).send('Movie updated successfully');
});

// delete existing movie by id
app.delete('/api/movies/:id', (req, res) => {
	const { id } = req.params;
	deleteMovie(id);
	res.status(200).send('Movie deleted successfully');
});

app.listen(PORT, () => {
	console.log('listening to port: ' + PORT);
});

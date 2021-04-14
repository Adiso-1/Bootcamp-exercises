const fs = require('fs');
const util = require('util');

const readFileContent = util.promisify(fs.readFile);
const path = __dirname + '/db/movies.json';

//* read
const getMovies = () => {
	try {
		return loadMovies();
	} catch (err) {
		console.log(err);
	}
};

const getMovieId = async (id) => {
	try {
		const movies = await loadMovies();
		const movie = movies.filter((el) => el.id === id);
		return movie;
	} catch (err) {
		console.log(err);
	}
};

//* create
const createMovie = async (movie) => {
	try {
		const movies = await loadMovies();
		movies.push(movie);
		saveMovies(movies);
	} catch (error) {
		console.log(error);
	}
};

//* delete
const deleteMovie = async (id) => {
	try {
		const movies = await loadMovies();
		const newMovies = movies.filter((el) => el.id !== id);
		saveMovies(newMovies);
		console.log('Movie Successfully deleted');
	} catch (error) {
		console.log(error);
	}
};

//* update
const updateMovie = async (id, data) => {
	try {
		const movies = await loadMovies();
		const editMovies = movies.map((el) => {
			if (el.id === id) {
				if (data.genre) {
					data.genre = data.genre.split(',');
				}
				return { ...el, ...data };
			} else {
				return el;
			}
		});
		saveMovies(editMovies);
	} catch (error) {
		console.log(error);
	}
};
//! LOAD
const loadMovies = async () => {
	try {
		const dataBuffer = await readFileContent(path);
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (error) {
		return [];
	}
};

//! SAVE
const saveMovies = (movies) => {
	const dataJSON = JSON.stringify(movies);
	fs.writeFile(path, dataJSON, (err) => {
		if (err) throw err;
		console.log('the files saved');
	});
};

module.exports = {
	getMovies,
	getMovieId,
	createMovie,
	deleteMovie,
	updateMovie,
};

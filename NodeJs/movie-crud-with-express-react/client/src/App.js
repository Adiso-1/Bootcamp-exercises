import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [movies, setMovies] = useState([]);
	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		getMovies();
	}, []);

	const getMovies = async () => {
		const { data } = await axios.get('/api/movies');
		setMovies(data);
	};
	const mapMovies = () => {
		if (movies.length) {
			return movies.map((movie) => {
				return (
					<div key={movie.id}>
						<ul>
							<li>Title: {movie.title}</li>
							<li>Rating: {movie.rating}</li>
							<li>Length: {movie.length}</li>
						</ul>
					</div>
				);
			});
		} else {
			setTimeout(() => {
				return <h1>No movies found</h1>;
			}, 1000);
		}
	};
	const handleClick = () => {
		setIsShow(!isShow);
	};
	return (
		<div>
			<button onClick={() => handleClick()}>
				{isShow ? 'Hide movies' : 'Show movies'}
			</button>
			<h1>List of movies</h1>
			{isShow ? mapMovies() : 'press the button to show movies from api'}
		</div>
	);
}

export default App;

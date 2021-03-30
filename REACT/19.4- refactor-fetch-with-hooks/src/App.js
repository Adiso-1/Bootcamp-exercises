import { useEffect, useState } from 'react';
import chuckJokes from './api/chuckJokes';
import JokeButton from './components/JokeButton';
import JokeCategory from './components/JokeCategory';

const App = () => {
	const [joke, setJoke] = useState(null);
	const [category, setCategory] = useState('animal');

	const handleJoke = async () => {
		const response = await chuckJokes.get(``, {
			params: { category },
		});
		setJoke(response.data.value);
	};

	const handleCategory = (e) => {
		setCategory(e.target.value);
	};
	return (
		<div className="app">
			<h1>{joke}</h1>
			<JokeCategory handleCategory={(e) => handleCategory(e)} />
			<JokeButton handleJoke={handleJoke} />
		</div>
	);
};

export default App;

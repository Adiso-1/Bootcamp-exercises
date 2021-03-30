import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
	const [data, setData] = useState([]);
	console.log(data);
	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get('https://swapi.dev/api/films/2/');
			setData(data);
		};
		search();
	}, []);

	const style = {
		width: '500px',
		margin: '0 auto',
		background: '#111',
		color: '#fff',
	};
	return (
		<div style={style}>
			<h1>Title: {data.title}</h1>
			<h1>Director: {data.director}</h1>
		</div>
	);
};

export default App;

const axios = require('axios');
const request = require('request');
const fetch = require('node-fetch');

//! axios
const search = async () => {
	try {
		const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
		console.log(data.value);
	} catch (err) {
		console.log(err);
	}
};
search();

//! request
const requestSerech = async () => {
	request(
		'https://api.chucknorris.io/jokes/random',
		(error, response, body) => {
			// console.error('error:', error);
			// console.log('statusCode:', response && response.statusCode);
			const data = JSON.parse(body).value;
			console.log(data);
		}
	);
};
requestSerech();
//! node-fetch
const nodeFetch = () => {
	fetch('https://api.chucknorris.io/jokes/random')
		.then((res) => res.json())
		.then((json) => console.log(json.value));
};
nodeFetch();

const https = require('https');

const request = https.request(
	'https://dog.ceo/api/breeds/image/random',
	(response) => {
		let data = '';

		response.on('data', (chunk) => {
			data = data + chunk.toString();
		});

		response.on('end', () => {
			const body = JSON.parse(data);
			console.log(body.message);
		});
	}
);
request.on('error', (error) => {
	console.log('An error', error);
});

request.end();

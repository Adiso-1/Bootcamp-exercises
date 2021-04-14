const http = require('http');
const fs = require('fs');
const port = 80;

const server = http.createServer((req, res) => {
	let filePath = req.url;
	if (filePath === '/') {
		res.writeHead(200, {
			'Content-Type': 'text/html',
		});
		fs.readFile('./index.html', (error, data) => {
			if (error) {
				res.writeHead(404);
				res.write('Error: File Not Found');
			} else {
				res.write(data);
			}
			res.end();
		});
	}
	if (filePath === '/raw-html') {
		res.writeHead(200, {
			'Content-Type': 'text/html',
		});
		fs.readFile('./raw.html', (error, data) => {
			if (error) {
				res.writeHead(404);
				res.write('Error: File Not Found');
			} else {
				res.write(data);
			}
			res.end();
		});
	}
	if (filePath === '/users') {
		res.writeHead(200, {
			'Content-Type': 'application/json',
		});
		fs.readFile('./users.json', (error, data) => {
			if (error) {
				res.writeHead(404);
				res.write('Error: File Not Found');
			} else {
				res.write(data);
			}
			res.end();
		});
	}
	if (filePath === '/index.css') {
		res.writeHead(200, {
			'Content-Type': 'text/css',
		});
		fs.readFile('./index.css', (error, data) => {
			if (error) {
				res.writeHead(404);
				res.write('Error: File Not Found');
			} else {
				res.write(data);
			}
			res.end();
		});
	}
	if (filePath === '/index.js') {
		res.writeHead(200, {
			'Content-Type': 'text/js',
		});
		fs.readFile('./index.js', (error, data) => {
			if (error) {
				res.writeHead(404);
				res.write('Error: File Not Found');
			} else {
				res.write(data);
			}
			res.end();
		});
	}
});

server.listen(port, (error) => {
	if (error) {
		console.log('something went wrong', error);
	} else {
		console.log('server is listening on port ' + port);
	}
});

const express = require('express');
require('./db/mongoose');
const Product = require('./models/product');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/products', async (req, res) => {
	const product = new Product(req.body);
	try {
		await product.save();
		res.status(201).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

app.get('/products', async (req, res) => {
	const activeStatus = req.query.active;
	const minPrice = req.query.minPrice;
	const maxPrice = req.query.maxPrice;
	try {
		if (activeStatus) {
			const products = await Product.find({ isActive: activeStatus });
			res.send(products);
		}
		if (minPrice && maxPrice) {
			const products = await Product.find({
				'details.price': { $gte: minPrice, $lt: maxPrice },
			});
			res.send(products);
		} else {
			const products = await Product.find({});
			res.send(products);
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get('/products/:id', async (req, res) => {
	const _id = req.params.id;
	console.log(_id);
	try {
		const product = await Product.findById(_id);
		if (!product) {
			return res.status(404).send();
		}
		res.send(product);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});

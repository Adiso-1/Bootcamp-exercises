const express = require('express');
const Product = require('../models/product');
const router = new express.Router();

router.post('/products', async (req, res) => {
	const product = new Product(req.body);
	try {
		await product.save();
		res.status(201).send(product);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

router.get('/products', async (req, res) => {
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

router.get('/products/:id', async (req, res) => {
	const _id = req.params.id;
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

router.patch('/products/:id', async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ['isActive', 'details'];
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);
	if (!isValidOperation) {
		return res.status(404).send({ Error: 'Invalid updates!' });
	}
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!product) {
			res.status(404).send();
		}
		res.send(product);
	} catch (error) {
		res.status(400).send({ error });
		console.log(error);
	}
});

router.delete('/products/:id', async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);
		if (!product) {
			res.status(404).send();
		}
		res.send(product);
	} catch (error) {
		res.status(500).send();
	}
});

router.delete('/products', async (req, res) => {
	try {
		const products = await Product.deleteMany({});
		if (!products) {
			res.status(404).send();
		}
		res.send(products);
	} catch (error) {
		res.status(500).send();
	}
});

module.exports = router;

const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/product-model', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

const Product = mongoose.model('Product', {
	name: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	category: {
		type: String,
		required: true,
	},
	isActive: {
		type: Boolean,
	},
	details: {
		description: {
			type: String,
			required: true,
			trim: true,
			minLength: 10,
		},
		price: {
			type: Number,
			required: true,
			validate(value) {
				if (value < 0) throw new Error('Price needs to be a positive number');
			},
		},
		discount: {
			type: Number,
			default: 0,
		},
		images: {
			type: [Buffer],
			required: true,
			validate(value) {
				if (value.length < 2) {
					throw new Error('Must be at least 2 images');
				}
			},
		},
		phone: {
			type: String,
			required: true,
			validate(value) {
				if (!validator.isMobilePhone(value, 'he-IL')) {
					throw new Error('phone number most be a valid isrealy phone number');
				}
			},
		},
		dateAdded: {
			type: Date,
			default: new Date(),
		},
	},
});

const product1 = new Product({
	name: 'PS5',
	category: 'Console',
	isActive: true,
	details: {
		description: 'The best the newes PS5!',
		price: 2500,
		images: [Buffer.from('test'), Buffer.from('test')],
		phone: '0501112222',
	},
});
product1.save();

const product2 = new Product({
	name: 'Dell xps',
	category: 'computers',
	isActive: true,
	details: {
		description: 'WOW! what a computer!',
		price: 3500,
		images: [Buffer.from('test'), Buffer.from('test')],
		phone: '0501113333',
	},
});
product2.save();

const product3 = new Product({
	name: 'Pizza',
	category: 'food',
	isActive: true,
	details: {
		description: 'What how it sneaks here?!',
		price: 5,
		images: [Buffer.from('test'), Buffer.from('test')],
		phone: '0501113333',
	},
});
product3.save();

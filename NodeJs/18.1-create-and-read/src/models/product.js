const mongoose = require('mongoose');
const validator = require('validator');

const Product = mongoose.model('Product', {
	name: {
		type: String,
		required: [true, 'Product name is required'],
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
			required: [true, 'Price name is required'],
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

module.exports = Product;

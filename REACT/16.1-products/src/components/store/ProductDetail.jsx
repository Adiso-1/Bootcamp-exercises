import React from 'react';
import store from './store';
import { Link } from 'react-router-dom';

const ProductDetail = (props) => {
	const id = props.match.params.id;
	const productArr = store.find((product) => product.id === parseInt(id));
	return (
		<div className="product">
			<h4>{productArr.title}</h4>
			<h5>size: {productArr.size}</h5>
			<img src={productArr.imageUrl} alt="" />
			<Link to="/products">
				<button>Back</button>
			</Link>
		</div>
	);
};
export default ProductDetail;

import React from 'react';
import store from './store';
import { Link } from 'react-router-dom';

class Products extends React.Component {
	state = { data: store };
	render() {
		const products = this.state.data.map((product) => {
			return (
				<React.Fragment key={product.id}>
					<Link to={`/products/${product.id}`}>{product.title}</Link>
				</React.Fragment>
			);
		});
		return <div className="products-container">{products}</div>;
	}
}
export default Products;

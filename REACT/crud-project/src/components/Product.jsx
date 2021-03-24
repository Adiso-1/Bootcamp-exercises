import React from 'react';

class Product extends React.Component {
	render() {
		return (
			<React.Fragment>
				<img src={this.props.data.image} alt="" />
				<h3>{this.props.data.product}</h3>
				<p>{this.props.data.price}</p>
				<p>{this.props.data.department}</p>
			</React.Fragment>
		);
	}
}
export default Product;

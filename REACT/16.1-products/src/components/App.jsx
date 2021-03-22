import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './store/Hompage';
import Products from './store/Products';
import Header from './Header';
import ProductDetail from './store/ProductDetail';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={Homepage} />
					<Route path="/products" exact component={Products} />
					<Route path="/products/:id" exact component={ProductDetail} />
				</div>
			</BrowserRouter>
		</div>
	);
};
export default App;

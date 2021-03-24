import React from 'react';
import mockApi from '../api/mockApi';
import Button from './Button';
import Input from './Input';
import Product from './Product';

class App extends React.Component {
	state = {
		data: [],
		errorMsg: '',
		isLoading: false,
	};
	async componentDidMount() {
		this.setState({ isLoading: true });
		try {
			const { data } = await mockApi.get('/store');
			this.setState({ data, isLoading: false });
		} catch (error) {
			this.setState({ errorMsg: error.message });
		}
	}
	create = async (value) => {
		try {
			if (value.length < 3) {
				throw new Error('name must be at least 3 letters');
			}
			const newProduct = { product: value };
			const { data } = await mockApi.post('/store', newProduct);
			const newState = [...this.state.data, data];
			this.setState({ data: newState });
		} catch (error) {
			this.setState({ errorMsg: error.message });
		}
	};
	edit = async (value, id) => {
		const { data } = await mockApi.put(`/store/${id}`, { product: value });
		const index = this.state.data.findIndex((el) => el.id === id);
		const newData = [...this.state.data];
		newData[index] = data;
		this.setState({ data: newData });
	};
	delete = async (id) => {
		await mockApi.delete(`/store/${id}`);
		const filteredState = [...this.state.data].filter((el) => el.id !== id);
		this.setState({ data: filteredState });
	};
	render() {
		const getProduct = this.state.data.map((el) => {
			return (
				<div className="product" key={el.id}>
					<Product data={el} />
					<Input id={el.id} handleInput={this.edit} type="edit" />
					<Button method="delete" onClick={() => this.delete(el.id)} />
				</div>
			);
		});
		return (
			<div className="main">
				<div className="input-container">
					<Input handleInput={this.create} type="create" />
					<h3>{this.state.errorMsg}</h3>
				</div>
				<div className="grid-container">{getProduct}</div>
			</div>
		);
	}
}
export default App;

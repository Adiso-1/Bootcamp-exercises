import React from 'react';
import Button from './Button';

class Input extends React.Component {
	state = { name: '' };
	handleChange = async (e) => {
		await this.setState({ name: e.target.value });
	};
	handleCallback = async () => {
		this.props.handleInput(this.state.name, this.props.id);
	};
	render() {
		return (
			<div className="input">
				<label htmlFor={this.props.type}></label>
				<input
					value={this.state.value}
					placeholder={this.props.type}
					type="text"
					onChange={this.handleChange}
				/>
				<Button onClick={this.handleCallback} method={this.props.type} />
			</div>
		);
	}
}
export default Input;

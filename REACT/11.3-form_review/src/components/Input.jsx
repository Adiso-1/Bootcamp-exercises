import React from 'react';

class Input extends React.Component {
	render() {
		return (
			<div>
				<div>{this.props.label}</div>
				<input
					type={this.props.type}
					onChange={this.props.onChange}
					value={this.props.value}
					name={this.props.name}
				/>
				{this.props.errorMessage && <span>{this.props.errorMessage}</span>}
			</div>
		);
	}
}

export default Input;

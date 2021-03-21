import React from 'react';

class Input extends React.Component {
	render() {
		return (
			<input
				onChange={this.props.handleInput}
				type="text"
				placeholder="filter avatars"
			/>
		);
	}
}
export default Input;

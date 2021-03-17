import React from 'react';

class CheckBox extends React.Component {
	render() {
		return (
			<div>
				<input type="checkBox" defaultChecked={this.props.isChecked} />
				<span>{this.props.text}</span>
			</div>
		);
	}
}

export default CheckBox;

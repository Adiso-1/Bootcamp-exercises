import React from 'react';

class Select extends React.Component {
	render() {
		return (
			<div onChange={this.props.onChange} value={this.props.value}>
				<div htmlFor="age">Age:</div>
				<select name={this.props.name}>
					<option>{this.props.value || `Select Age:`}</option>
					<option value="0-15">0-15</option>
					<option value="15-30">15-30</option>
					<option value="30-45">30-45</option>
					<option value="45-60">45-60</option>
					<option value="60+">60+</option>
				</select>
			</div>
		);
	}
}

export default Select;

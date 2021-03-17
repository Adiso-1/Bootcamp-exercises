import React from 'react';

class Button extends React.Component {
	handleClick = (e) => {
		// console.log(e.target.textContent);
		this.props.onClick(this.props.color);
	};
	render() {
		return (
			<button
				onClick={(e) => this.handleClick(e)}
				style={{ background: this.props.color }}
			>
				{this.props.color}
			</button>
		);
	}
}

export default Button;

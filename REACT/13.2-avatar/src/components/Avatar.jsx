import React from 'react';

class Avatar extends React.Component {
	render() {
		return (
			<div className="avatar">
				<h3>{`${this.props.firstName} ${this.props.lastName}`}</h3>
				<img src={this.props.src} alt="avatar" />
			</div>
		);
	}
}
export default Avatar;

import React from 'react';
import { Link } from 'react-router-dom';

class Email extends React.Component {
	render() {
		return (
			<div className="step-container">
				<p>step 1</p>
				<form className="form">
					<label className="label" htmlFor="email">
						Email address
					</label>
					<input
						onChange={this.props.onChange}
						value={this.props.value}
						name={this.props.name}
						placeholder="Enter email"
						className="input"
						type="email"
					/>
					<div className="button-container">
						<div className="_empty"></div>
						<Link to="/username">
							<button className="button">Next</button>
						</Link>
					</div>
				</form>
			</div>
		);
	}
}
export default Email;

import React from 'react';
import { Link } from 'react-router-dom';

class Password extends React.Component {
	render() {
		return (
			<div className="step-container">
				<p>step 3</p>
				<form className="form">
					<label className="label" htmlFor="password">
						Password address
					</label>
					<input
						onChange={this.props.onChange}
						value={this.props.value}
						name={this.props.name}
						placeholder="Enter password"
						className="input"
						type="password"
					/>
					<button onClick={this.props.onSubmit} className="sign-up-button">
						Sign Up
					</button>
					<div className="button-container">
						<Link to="/username">
							<button className="button previous">Previous</button>
						</Link>
						<div></div>
					</div>
				</form>
			</div>
		);
	}
}
export default Password;

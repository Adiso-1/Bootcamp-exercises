import React from 'react';
import { Link } from 'react-router-dom';

class Username extends React.Component {
	render() {
		return (
			<div className="step-container">
				<p>step 2</p>
				<form className="form">
					<label className="label" htmlFor="email">
						Username
					</label>
					<input
						onChange={this.props.onChange}
						value={this.props.value}
						name={this.props.name}
						placeholder="Enter Username"
						className="input"
						type="email"
					/>
					<div className="button-container">
						<Link to="/">
							<button className="button previous">Previous</button>
						</Link>
						<Link to="/password">
							<button className="button next">Next</button>
						</Link>
					</div>
				</form>
			</div>
		);
	}
}
export default Username;

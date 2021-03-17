import React from 'react';
import Input from './Input';
import SelectAge from './SelectAge';

class HtmlForm extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		age: '',
		message: '',
		isContinue: false,
	};

	handleInputChange = async (e) => {
		await this.setState((prevState, props) => ({
			[e.target.name]: e.target.value,
		}));
		localStorage.setItem('data', JSON.stringify(this.state));
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit');
		console.log(this.state.isContinue);
		!this.state.isContinue
			? this.setState({ isContinue: true })
			: this.setState({ isContinue: false });
	};
	componentDidMount() {
		if (localStorage.length) {
			this.setState(JSON.parse(localStorage.data));
		}
	}
	render() {
		if (!this.state.isContinue) {
			return (
				<div className="form-page">
					<h2>Survey</h2>
					<form onSubmit={this.handleSubmit}>
						<Input
							type="text"
							label="First Name: "
							name="firstName"
							onChange={this.handleInputChange}
							value={this.state.firstName}
						/>
						<Input
							type="text"
							label="Last Name: "
							name="lastName"
							onChange={this.handleInputChange}
							value={this.state.lastName}
						/>

						<SelectAge
							name="age"
							onChange={this.handleInputChange}
							value={this.state.age}
						/>
						<div htmlFor="message">Message:</div>
						<textarea
							onChange={this.handleInputChange}
							id="message"
							name="message"
							rows="4"
							cols="50"
							value={this.state.message}
						></textarea>
						<div className="btn-container">
							<button className="btn" onClick={this.handleSubmit} type="submit">
								Continue
							</button>
						</div>
					</form>
				</div>
			);
		}
		return (
			<div className="review-page">
				<h2>Please Confirm Your Details</h2>
				<p>First Name: {this.state.firstName || `Not inserted`}</p>
				<p>Last Name: {this.state.lastName || `Not inserted`}</p>
				<p>Age: {this.state.age || `Not inserted`}</p>
				<p>Message: {this.state.message || `Not inserted`}</p>
				<div className="btn-container">
					<button className="btn" onClick={this.handleSubmit} type="submit">
						Back
					</button>
					<button className="btn" type="submit">
						Submit
					</button>
				</div>
			</div>
		);
	}
}

export default HtmlForm;

import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Username from './Username';
import Email from './Email';
import Password from './Password';
import Header from './Header';

class App extends React.Component {
	state = {
		email: '',
		userName: '',
		Password: '',
	};
	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		alert(
			`Email: ${this.state.email}
User-Name: ${this.state.userName}
Password: ${this.state.Password}`
		);
	};
	render() {
		return (
			<React.Fragment>
				<BrowserRouter>
					<div className="app">
						<Header />
						<Route
							render={(props) => (
								<Email
									{...props}
									onChange={this.handleInput}
									value={this.state.email}
									name="email"
								/>
							)}
							path="/"
							exact
						/>
						<Route
							render={(props) => (
								<Username
									{...props}
									onChange={this.handleInput}
									value={this.state.userName}
									name="userName"
								/>
							)}
							path="/username"
							exact
						/>
						<Route
							render={(props) => (
								<Password
									{...props}
									onChange={this.handleInput}
									onSubmit={this.handleSubmit}
									value={this.state.Password}
									name="Password"
								/>
							)}
							path="/password"
							exact
						/>
					</div>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}
export default App;

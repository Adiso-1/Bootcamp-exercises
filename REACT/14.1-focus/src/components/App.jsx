import React from 'react';

class App extends React.Component {
	componentDidMount() {
		this.nameInput.focus();
	}
	render() {
		return (
			<div>
				<form action="">
					<input
						ref={(input) => {
							this.nameInput = input;
						}}
						type="text"
					/>
				</form>
			</div>
		);
	}
}
export default App;

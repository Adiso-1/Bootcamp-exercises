import React from 'react';
import CheckBox from './CheckBox';

class App extends React.Component {
	state = { isChecked: true };
	render() {
		return (
			<div>
				<CheckBox
					text="I read the term of the app"
					isChecked={!this.state.isChecked}
				/>
				<CheckBox
					text="I accept the term of the app"
					isChecked={!this.state.isChecked}
				/>
				<CheckBox
					text="I want to get the weekly news letter"
					isChecked={this.state.isChecked}
				/>
				<CheckBox
					text="I want to get sales and offers"
					isChecked={this.state.isChecked}
				/>
			</div>
		);
	}
}
export default App;

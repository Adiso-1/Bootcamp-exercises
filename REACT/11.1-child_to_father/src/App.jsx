import React from 'react';
import Button from './Button';

class App extends React.Component {
	state = {
		colors: ['blue', 'red', 'yellow'],
		current: '',
	};

	onClick = (curr) => this.setState({ current: curr });

	render() {
		return (
			<div>
				{this.state.colors.map((el) => (
					<Button onClick={this.onClick} color={el} />
				))}
				<div>The color selected is: {this.state.current}</div>
			</div>
		);
	}
}
export default App;

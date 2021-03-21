import React from 'react';
import Input from './Input';
import '../index.css';
import MapAvatar from './MapAvatar';

class App extends React.Component {
	state = { chars: '' };
	handleInput = async (e) => {
		await this.setState({ chars: e.target.value });
	};
	render() {
		return (
			<div>
				<Input handleInput={this.handleInput} />
				<div>
					<MapAvatar value={this.state.chars} />
				</div>
			</div>
		);
	}
}
export default App;

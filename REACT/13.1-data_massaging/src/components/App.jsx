import React from 'react';
import data from '../data';
import Name from './Name';
import Card from './Card';

class App extends React.Component {
	state = { names: [], over1990: [], isLoad: false };

	names = () => {
		const names = data.map((person) => person.name);
		return this.setState({ names });
	};

	over1990 = () => {
		const filtered = data.filter(
			(person) => new Date(person.birthday).getFullYear() > 1990
		);
		return this.setState({ over1990: filtered });
	};

	componentDidMount() {
		this.names();
		this.over1990();
		this.setState({ isLoad: true });
	}

	drawPerson = () => {
		const myArr = this.state.over1990.map((person, i) => {
			return (
				<div key={i}>
					<Card obj={person} />
				</div>
			);
		});
		return myArr;
	};
	render() {
		if (this.state.isLoad) {
			return (
				<div style={{ display: 'flex' }}>
					<Name persons={this.state.name} />
					{this.drawPerson()}
				</div>
			);
		}
		return null;
	}
}
export default App;

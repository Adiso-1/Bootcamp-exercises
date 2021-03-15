import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}
  increaseOne = () => {
    const newCount = this.state.count + 1;
    this.setState({count: newCount})
  }
	render() {
		return (
			<div>
				<button onClick={this.increaseOne}>increment</button>
				<div>{this.state.count}</div>
			</div>
		);
	}
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import './index.css';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
          <Button />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

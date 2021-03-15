import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button'

const App = () => {
  return (
		<div className='button-container'>
			<Button text="Important" />
			<Button text="Not Important" />
		</div>
	);
}
ReactDOM.render(<App />,document.getElementById('root'));


import React, { useState } from 'react';
import CheckBox from './components/CheckBox';
import './App.css';

const arr = ['one', 'two', 'three', 'four', 'five'];

const App = () => {
	const [filterArr, setFilterArr] = useState(arr);

	const mapArr = filterArr.map((el) => {
		return (
			<React.Fragment key={el}>
				<CheckBox handleChange={handleChange} name={el} />
			</React.Fragment>
		);
	});

	const copy = {};

	const handleDelete = () => {
		const keys = Object.keys(copy);
		let temp = filterArr.filter((el) => !keys.includes(el));
		setFilterArr(temp);
	};

	const handleReset = () => {
		setFilterArr(arr);
	};
	function handleChange(e) {
		copy[e.target.name] = e.target.checked;
	}
	return (
		<div className="container">
			<h1>My List</h1>
			<ul>{mapArr}</ul>
			<div className="btn-container">
				<button onClick={handleDelete}>DELETE</button>
				<button onClick={handleReset}>RESET</button>
			</div>
		</div>
	);
};

export default App;

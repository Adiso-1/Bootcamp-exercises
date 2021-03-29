import React, { useState } from 'react';
import Input from './component/Input';
import './App.css';

const App = () => {
	const [seconds, setSeconds] = useState('');
	const [minutes, setMinutes] = useState('');
	const [hours, setHours] = useState('');

	const handleChange = (e) => {
		if (e.target.id === 'Seconds') {
			setSeconds(e.target.value);
			setMinutes(e.target.value / 60);
			setHours(e.target.value / 60 / 60);
		}
		if (e.target.id === 'Minutes') {
			setSeconds(e.target.value * 60);
			setMinutes(e.target.value);
			setHours(e.target.value / 60);
		}
		if (e.target.id === 'Minutes') {
			setSeconds(e.target.value * 60 * 60);
			setMinutes(e.target.value * 60);
			setHours(e.target.value);
		}
	};
	return (
		<div className="container">
			<Input onChange={handleChange} value={seconds} name="Seconds" />
			<Input onChange={handleChange} value={minutes} name="Minutes" />
			<Input onChange={handleChange} value={hours} name="Hours" />
		</div>
	);
};
export default App;

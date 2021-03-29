import React from 'react';
import './Input.css';

const Input = (props) => {
	return (
		<form>
			<label htmlFor={props.name}>{props.name}</label>
			<input
				onChange={props.onChange}
				value={props.value}
				id={props.name}
				type="number"
			/>
		</form>
	);
};
export default Input;

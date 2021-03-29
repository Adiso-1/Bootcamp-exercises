import React, { useState } from 'react';
import './App.css';

const data = [
	{ name: 'CSS', completed: true },
	{ name: 'JavaScript', completed: true },
	{ name: 'Learn React', completed: false },
	{ name: 'Learn mongoDB', completed: false },
	{ name: 'Learn Node JS', completed: false },
];
export default () => {
	const [toDo, setTodo] = useState(data);

	const handleClick = (e, index) => {
		const arr = [...toDo];
		arr[index].completed = !arr[index].completed;
		setTodo(arr);
	};

	const toDoCheck = toDo.map((el, index) => {
		return el.completed ? (
			<div className="item" key={index}>
				<p style={{ textDecoration: 'line-through' }} className="completed">
					{el.name}
				</p>
				<span className="unCheck" onClick={(e) => handleClick(e, index)}>
					&#10005;
				</span>
			</div>
		) : (
			<div className="item" key={index}>
				<p className="not-completed">
					{el.name}
					<span className="check" onClick={(e) => handleClick(e, index)}>
						&#10003;
					</span>
				</p>
			</div>
		);
	});

	return <div className="container">{toDoCheck}</div>;
};

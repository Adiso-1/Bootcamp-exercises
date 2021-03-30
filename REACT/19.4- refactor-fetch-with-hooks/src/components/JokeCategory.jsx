import React, { useState } from 'react';

const JokeCategory = (props) => {
	const [category, setCategory] = useState([
		'animal',
		'career',
		'celebrity',
		'dev',
		'explicit',
		'fashion',
		'food',
		'history',
		'money',
		'movie',
		'music',
		'political',
		'religion',
		'science',
		'sport',
		'travel',
	]);
	const categories = category.map((category, i) => {
		return <option key={i}>{category}</option>;
	});
	return (
		<select
			onChange={props.handleCategory}
			name="category-select"
			id="category-select"
		>
			{categories}
		</select>
	);
};
export default JokeCategory;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Input from './Input';
import Button from './Button';
import Spinner from './Spinner';

const Search = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [term, setTerm] = useState('hooks');
	const [results, setResults] = useState([]);
	const [isClick, setIsClick] = useState(true);

	useEffect(() => {
		try {
			const search = async () => {
				setIsLoading(true);
				const { data } = await axios.get(
					'https://hn.algolia.com/api/v1/search?',
					{
						params: {
							query: term,
						},
					}
				);
				setResults(data.hits);
				setIsLoading(false);
				setIsClick(false);
			};
			if (isClick) {
				search();
			}
		} catch (error) {
			setErrorMessage(error);
		}
	}, [term, isClick]);

	const handleClick = () => {
		setIsClick(true);
	};

	const handleChange = (e) => {
		setTerm(e.target.value);
	};

	const renderedResults = results.map((result) => (
		<li key={result.objectID}>
			<a href={result.url}>{result.title}</a>
		</li>
	));
	return (
		<div>
			<Input onChange={(e) => handleChange(e)} value={term} />
			<Button onClick={() => handleClick()} />
			<ul>{isLoading ? <Spinner /> : renderedResults}</ul>
		</div>
	);
};
export default Search;

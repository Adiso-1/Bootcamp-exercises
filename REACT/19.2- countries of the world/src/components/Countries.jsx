import axios from 'axios';
import { useEffect, useState } from 'react';

const Countries = (props) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
			setCountries(data);
		};
		search();
	}, []);

	const countriesFilter = countries.filter((country) => {
		return country.name.toLowerCase().includes(props.value.toLowerCase());
	});
	const countriesMap = countriesFilter.map((country) => {
		return <li key={country.alpha2Code}>{country.name}</li>;
	});
	return <ul>{countriesMap}</ul>;
};
export default Countries;

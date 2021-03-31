import axios from 'axios';
import { useEffect, useState } from 'react';

const ShowData = (props) => {
	const [data, setData] = useState('');

	const CancelToken = axios.CancelToken;
	const source = CancelToken.source();

	useEffect(() => {
		const search = async () => {
			const { data } =
				(await axios
					.get('https://swapi.dev/api/films/2/', {
						cancelToken: source.token,
					})
					.catch(function (thrown) {
						if (axios.isCancel(thrown)) {
							console.log(thrown.message);
						}
					})) || '';
			setData(data);
		};
		if (props.isDisplay) {
			search();
		} else {
			setData('');
		}

		return () => source.cancel('CANCELLLLL');
	}, [props.isDisplay]);
	return <h1>{data ? data.title : ''}</h1>;
};
export default ShowData;

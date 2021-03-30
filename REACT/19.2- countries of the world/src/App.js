import { useState } from 'react';

import Countries from './components/Countries';
import Input from './components/Input';

const App = () => {
	const [input, setInput] = useState('');

	const handleInput = (e) => {
		setInput(e.target.value);
	};
	return (
		<div>
			<Input onChange={handleInput} value={input} />
			<Countries value={input} />
		</div>
	);
};

export default App;

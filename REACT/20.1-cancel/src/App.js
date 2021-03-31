import { useState } from 'react';
import Button from './component/Button';
import ShowData from './component/ShowData';

const App = () => {
	const [isDisplay, setIsDisplay] = useState(false);

	const hadnleClick = () => {
		setIsDisplay(!isDisplay);
	};
	return (
		<div>
			<Button
				onClick={hadnleClick}
				name={isDisplay ? 'Hide Data' : 'Display Data'}
			/>
			{<ShowData isDisplay={isDisplay} />}
		</div>
	);
};

export default App;

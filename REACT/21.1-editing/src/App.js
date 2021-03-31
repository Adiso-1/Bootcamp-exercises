import { useState, useRef, useEffect } from 'react';
import Button from './components/Button';

const App = () => {
	const [isEditClicked, setIsEditClicked] = useState(false);
	const inputRef = useRef();

	const onEditClick = () => setIsEditClicked(!isEditClicked);

	useEffect(() => {
		if (isEditClicked) {
			inputRef.current.focus();
		}
	}, [isEditClicked]);
	return (
		<div>
			{isEditClicked ? (
				<div>
					{' '}
					<Button name="save" onClick={onEditClick} />
					<input type="text" ref={inputRef} />
				</div>
			) : (
				<Button name="edit" onClick={onEditClick} />
			)}
		</div>
	);
};
export default App;

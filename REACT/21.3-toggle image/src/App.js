import { useRef, useState } from 'react';

const img1 =
	'https://images.unsplash.com/photo-1610547169320-9c54714e4e73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';
const img2 =
	'https://images.unsplash.com/photo-1611657365907-1ca5d9799f59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';

const App = () => {
	const [isHover, setIsOver] = useState(false);
	const imageRef1 = useRef();
	const imageRef2 = useRef();

	const overImg = (e) => {
		e.target.style.filter = '';
		setIsOver(true);
	};

	const outImg = (e) => {
		e.target.style.filter = 'grayscale(1)';
		setIsOver(false);
	};

	return (
		<div>
			<img
				style={{ filter: 'grayscale(1)', margin: '10px' }}
				ref={imageRef1}
				onMouseOver={overImg}
				onMouseOut={outImg}
				src={img1}
			/>
			<img
				style={{ filter: 'grayscale(1)', margin: '10px' }}
				ref={imageRef2}
				onMouseOver={overImg}
				onMouseOut={outImg}
				src={img2}
			/>
		</div>
	);
};

export default App;

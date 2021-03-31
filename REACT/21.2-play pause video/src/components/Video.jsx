import { useRef } from 'react';

const Video = () => {
	const vidRef = useRef();

	const handlePlayVideo = () => {
		vidRef.current.play();
	};
	const handlePauseVideo = () => {
		vidRef.current.pause();
	};
	return (
		<div>
			<video
				style={{ width: '400px' }}
				ref={vidRef}
				src="https://assets.polestar.com/video/test/polestar-1_09.mp4"
				type="video/mp4"
			></video>
			<div>
				<button onClick={handlePlayVideo}>Play</button>
				<button onClick={handlePauseVideo}>Pause</button>
			</div>
		</div>
	);
};
export default Video;

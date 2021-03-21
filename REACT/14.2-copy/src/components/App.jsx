import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.textRef = React.createRef();
	}
	onClick = (e) => {
		this.textRef.current.select();
		document.execCommand('copy');
	};
	render() {
		return (
			<div>
				<h1>COPY COPY COPY COPY COPY </h1>
				<textarea ref={this.textRef} cols="30" rows="10"></textarea>
				<div>
					<button onClick={this.onClick}>Copy</button>
				</div>
			</div>
		);
	}
}
export default App;

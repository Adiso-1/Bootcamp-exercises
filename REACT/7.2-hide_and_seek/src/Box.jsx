import React from 'react';

class Box extends React.Component {
    
	constructor(props) {
		super(props);
        this.state = {color: 'yellow'};
        this.state = {color: 'blue'};
	}

	disappear () {
        this.setState({color: 'blue'});
    }

	render() {
        return (
            <div className="container">
				<div style={{background: this.state.color}} className="inner-box"></div>
				<button onClick={this.disappear}>SHOW/Hide</button>
			</div>
		);
	}
}
export default Box;
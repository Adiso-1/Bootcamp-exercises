import React from 'react';

class Description extends React.Component {
	render() {
		return (
            <div className='description'>
                <h3>{this.props.title}</h3>
                <h5>{this.props.description}</h5>
            </div>
        )
	}
}
export default Description;

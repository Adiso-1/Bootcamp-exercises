import React from 'react';

const Description = (props) => {
	return (
        <div className='description'>
            <h3>{props.title}</h3>
            <h5>{props.description}</h5>
        </div>
    );
};
export default Description;

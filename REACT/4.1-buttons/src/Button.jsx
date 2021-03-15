import React from 'react';

const Button = (props) => {
    return props.text === 'Important' ? <button className='bold'>{props.text}</button> : <button>{props.text}</button>
}
export default Button;
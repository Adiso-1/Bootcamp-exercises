import React from 'react';

const Box = (props) => {
    return <div className="box" style={{ background: props.color, borderRadius: props.shape }}></div>;
}
export default Box;
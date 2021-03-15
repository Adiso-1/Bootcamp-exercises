import React from 'react';
import Img from './Image';
import Description from './Description';
import Button from './Button';

const Card = (props) => {
    return (
        <div className="card">
            <Img src={props.imgSrc} />
            <Description title={props.title} description={props.description} />
            <div className="button-container">
                <Button text="Share" />
                <Button text="Explore" />
            </div>
        </div>
    );
}

export default Card;
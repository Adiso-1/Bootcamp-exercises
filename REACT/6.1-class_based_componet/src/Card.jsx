import React from 'react';
import Img from './Image';
import Description from './Description';
import Button from './Button';

class Card extends React.Component {
    render () {
        return (
            <div className="card">
            <Img src={this.props.imgSrc} />
            <Description title={this.props.title} description={this.props.description} />
            <div className="button-container">
                <Button text="Share" />
                <Button text="Explore" />
            </div>
        </div>
        )
    }
}

export default Card;
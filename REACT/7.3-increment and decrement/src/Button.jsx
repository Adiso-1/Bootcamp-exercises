import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.color = {color: 'black'}
    }

    increase () {
        const newCount = this.state.count + 1;
        this.setState({count: newCount });
    }
    decrease () {
        const newCount = this.state.count - 1;
        this.setState({count: newCount });
    }

    render () {
        if (this.state.count > 0) {
            this.color.color = 'green';
		} else if (this.state.count < 0) {
            this.color.color = 'red';
        } else {
            this.color.color = 'black';
        }
        return (
            <div>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Deacrease</button>
                <div style={{color:this.color.color}}>{this.state.count}</div>
            </div>
        )
    }
}
export default Button;
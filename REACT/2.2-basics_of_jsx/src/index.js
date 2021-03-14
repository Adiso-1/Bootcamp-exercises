import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const data = ['hello', 'world'];
    const number1 = 5;
    const number2 = 6;
    const string = 'I love React!';
    return (
        <div>
            <h1>
                {`${data[0].slice(0, 1).toUpperCase()}${data[0].slice(1)} ${data[1].slice(0, 1).toUpperCase()}${data[1].slice(1)}`}
            </h1>    
            <h1>
                5 + 6 = {number1 + number2}
            </h1>
            <h1>
                The string's length is {string.length}
            </h1>
        </div>
    );
}
ReactDOM.render(
    <App />, document.querySelector('#root')
)
if (module.hot) {
	module.hot.accept();
}
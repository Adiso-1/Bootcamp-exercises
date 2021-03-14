import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Box1 from './Box1';

const App = () => {
    return (
        <Box1 />
    );
};
const target = document.querySelector('#root');
ReactDOM.render(
    <App />, target
)
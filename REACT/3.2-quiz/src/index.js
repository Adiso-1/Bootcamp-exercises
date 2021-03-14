import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quiz from './Quiz'

const App = () => {
  return (
    <Quiz />
  )
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);
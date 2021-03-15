import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'

class App extends React.Component {
	render () {
		return (
			<div className="card-container">
			<Card
				imgSrc="https://images.unsplash.com/photo-1615568057392-8f933710de76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
				title="Gray Lion"
				description="Very rare lion"
			/>
			<Card
				imgSrc="https://images.unsplash.com/photo-1615571095082-22f990f3c331?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
				title="Art"
				description="Flowers in a can"
			/>
			<Card
				imgSrc="https://images.unsplash.com/photo-1615715070496-d85daab3618d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
				title="Audi"
				description="Very strong car"
			/>
		</div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


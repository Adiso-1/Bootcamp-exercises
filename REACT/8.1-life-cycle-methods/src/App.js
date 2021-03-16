import React from 'react';

class App extends React.Component {
  state = {favoriteColor: 'yellow'}

  componentDidMount() {
    setTimeout(() => {
      this.setState((pervState, prevProps) => {
        return {favoriteColor: pervState = 'blue'}
      })
    },1000)
  }
  componentDidUpdate() {
    document.querySelector(
			'#id'
		).innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
  }
  render() {
    return (
      <div>
        <h1>My favourite color is {this.state.favoriteColor}</h1>
        <div id='id'></div>
      </div>
    )
  }
}

export default App;

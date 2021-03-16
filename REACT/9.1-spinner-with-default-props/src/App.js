import React from 'react';
import Spinner from './components/Spinner.component'

class App extends React.Component {
  state = {round: '',isFinish: false}

  componentDidMount () {
    const roundArr = ['circle','circle2','rotating'];
    let random = Math.round(Math.random() * 3);
    this.setState({round: roundArr[random]})
    setTimeout(() => {
      this.setState({isFinish: true})
    }, 5000);
  }

  render () {
    return (
			<div className="container">
				{this.state.isFinish ? null : <Spinner round={this.state.round} shape="shape" />}
			</div>
		);
  }
}
export default App;

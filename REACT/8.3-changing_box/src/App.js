import React from 'react';
import Box from './Box';

class App extends React.Component {
  state = {color: '', shape: ''}

  componentDidMount () {
    const colors = ['blue', 'yellow', 'red', 'green', 'black'];
    let i = -1;
    setInterval(() => {
      if (i > 3) {
        i = 0;
      } else {
        i++;
      }
      this.setState({color: colors[i]})
    }, 500);
  }
  componentDidUpdate () {
    setTimeout(() => {
      this.setState({shape: '50%'})
    }, 2500);
  }
  
  render () {
    console.log(this.state.color);
    return (
      <div className='container'>
        <Box color={this.state.color} shape={this.state.shape} />
      </div>
    )
  }
}

export default App;

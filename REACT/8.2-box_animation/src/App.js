import React from 'react';
import Box from './Box';

class App extends React.Component {

  state = {class: '' , isShow: false}
  
  componentDidMount () {
    setTimeout(() => {
      this.setState({class: 'animation', isShow: true})
    },1000)  
  }
  componentDidUpdate () {
    setTimeout(()=> {
      this.setState({isShow: false})
    },4000)
  }

  render () {
    return (
      this.state.isShow ? <div className={this.state.class}>
        <Box width='100px' background='blue' />
        <Box width='200px' background='yellow' />
        <Box width='150px' background='purple' />
      </div> : null
    )
  }
}

export default App;

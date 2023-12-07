import React, { Component } from 'react'

class PureComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       toggle: true
    }
  }
  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  IncreaseCount =() => {
    if (this.state.toggle){
      this.setState({
        count: this.state.count + 1
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleToggle}>Toggle</button>
        <button onClick={this.IncreaseCount}>Increase Count</button>
        
      </div>
    )
  }
}

export default PureComp
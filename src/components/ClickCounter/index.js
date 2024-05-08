import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prev => ({count: prev.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bgconatiner">
        <h1>
          The Button has been clicked 
          <span className="span-class"> {count} </span>
          times
        </h1>
        <p>Click the button to increase the count</p>
        <button className="button-element" onClick={this.onIncrement}>
          {' '}
          Click Me!{' '}
        </button>
      </div>
    )
  }
}

export default ClickCounter

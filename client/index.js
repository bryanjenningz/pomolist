import React, {Component} from 'react'
import {render} from 'react-dom'
import Todos from './components/Todos'
import Timer from './components/Timer'

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <Timer />
        <br />
        <Todos />
      </div>
    )
  }
}

render(<App />, document.querySelector('#root'))

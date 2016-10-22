import React, {Component} from 'react'

const formatTime = time => {
  const seconds = time % 60
  const minutes = Math.floor(time / 60)
  const padZeros = seconds =>
    (seconds < 10 ? '0' : '') + seconds
  return `${minutes}:${padZeros(seconds)}`
}

export default class Timer extends Component {
  constructor() {
    super()
    this.titleEl = document.querySelector('title')
    this.state = {time: 25 * 60, running: false, working: true}
    setInterval(() => {
      if (this.state.running) {
        if (this.state.time <= 0) {
          document.querySelector('#alarm').play()
          this.toggleWorking()
        } else {
          this.setState({time: this.state.time - 1})
        }
      }
    }, 1000)
  }

  toggleWorking() {
    const working = !this.state.working
    this.setState({
      time: working ? 25 * 60 : 5 * 60,
      working
    })
  }

  render() {
    this.titleEl.textContent = formatTime(this.state.time)
    return (
      <div>
        <h2>{formatTime(this.state.time)}</h2>
        <div className="btn-group">
          <button
            className="btn btn-default"
            onClick={() =>
              this.setState({
                time: this.state.working ? 25 * 60 : 5 * 60
              })
            }>
            <i className="glyphicon glyphicon-step-backward"></i>
          </button>
          <button
            className="btn btn-default"
            onClick={() =>
              this.setState({running: !this.state.running})
            }>
            <i className={'glyphicon glyphicon-' +
              (this.state.running ? 'pause' : 'play')}></i>
          </button>
          <button
            className="btn btn-default"
            onClick={() => this.toggleWorking()}>
            <i className="glyphicon glyphicon-step-forward"></i>
          </button>
        </div>
      </div>
    )
  }
}

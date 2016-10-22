import React, {Component} from 'react'

export default class Todos extends Component {
  constructor() {
    super()

    let todos
    try {
      todos = JSON.parse(localStorage.getItem('todos'))
    } catch (err) {
      todos = []
    }
    this.state = {todos}
  }

  render() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
    return (
      <div className="row">
        <div className="col-sm-offset-4 col-sm-4">
          <form onSubmit={e => {
            e.preventDefault()
            this.setState({
              todos: [...this.state.todos, this.refs.input.value]
            })
            this.refs.input.value = ''
          }}>
            <input className="form-control" ref="input" />
          </form>
          <div className="list-group">
            {this.state.todos.map((value, i) =>
              <div key={i} className="list-group-item">
                {value}
                <i className="pull-right glyphicon glyphicon-remove"
                  style={{cursor: 'pointer'}}
                  onClick={() => {
                    const todos = this.state.todos
                    this.setState({
                      todos: [...todos.slice(0, i), ...todos.slice(i + 1)]
                    })
                  }}></i>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

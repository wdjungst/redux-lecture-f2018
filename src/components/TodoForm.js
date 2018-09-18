import React from 'react'
import { connect } from 'react-redux'

class TodoForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { name } = this.state
    dispatch({ type: 'ADD_TODO', todo: name })
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <h3>Add A Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            value={name}
            onChange={this.handleChange}
            required
          />
        </form>
      </div>
    )
  }
}

export default connect()(TodoForm)






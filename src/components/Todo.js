import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../reducers/todos'

const styles = {
  pointer: {
    cursor: 'pointer',
  },
  complete: {
    textDecoration: 'line-through',
    color: 'green',
  }
}

const Todo = ({ id, name, complete, dispatch }) => (
  <li
    onClick={() => dispatch(toggleTodo(id)) }
    style={ complete ? {...styles.pointer, ...styles.complete} : styles.pointer }
  >
    {name}
    <button onClick={ () => dispatch(deleteTodo(id)) }>X</button>
  </li>
)

export default connect()(Todo)










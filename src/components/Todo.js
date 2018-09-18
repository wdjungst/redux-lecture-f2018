import React from 'react'
import { connect } from 'react-redux'

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
    onClick={() => dispatch({ type: 'TOGGLE_TODO', id }) }
    style={ complete ? {...styles.pointer, ...styles.complete} : styles.pointer }
  >
    {name}
  </li>
)

export default connect()(Todo)






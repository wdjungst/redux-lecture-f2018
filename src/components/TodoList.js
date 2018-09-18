import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodoList = ({ todos }) => (
  <ul>
    { todos.map( (t) => 
        <Todo key={t.id} {...t} />
      )
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList)

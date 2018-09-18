import React, { Fragment } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

const App = () => (
  <Fragment>
    <TodoForm />
    <TodoList />
    <Footer />
  </Fragment>
)

export default App

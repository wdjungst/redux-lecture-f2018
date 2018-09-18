import { combineReducers } from 'redux'
import todos from './todos'
import nextId from './nextId'

const rootReducer = combineReducers({
  todos,
  nextId,
})

export default rootReducer

import { INC_ID } from '../actions/nextId'

const nextId = (state = 0, action) => {
  switch(action.type) {
    case INC_ID:
      return state + 1
    default:
      return state
  }
}

export default nextId

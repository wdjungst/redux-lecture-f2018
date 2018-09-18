const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = (todo) => {
  return { type: ADD_TODO, todo }
}

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, id }
}


export default ( state = [], action ) => {
  switch(action.type) {
    case ADD_TODO:
      return [action.todo, ...state]
    case TOGGLE_TODO:
      // { type: 'TOGGLE_TODO', id: 7 }
      return state.map( todo => {
        if (todo.id === action.id)
          return {...todo, complete: !todo.complete}
        return todo
      })
    default:
      return state
  }
}


const SET_FILTER = 'SET_FILTER'

export const setFilter = (filter) => {
  return { type: SET_FILTER, filter }
}

export default (state = 'All', action) => {
  switch(action.type) {
    case SET_FILTER:
      //{ type: 'SET_FILTER', filter: 'Complete' }
      return action.filter
    default:
      return state
  }
}


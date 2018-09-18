const filter = (state = 'All', action) => {
  switch(action.type) {
    case 'SET_FILTER':
      //{ type: 'SET_FILTER', filter: 'Complete' }
      return action.filter
    default:
      return state
  }
}

export default filter

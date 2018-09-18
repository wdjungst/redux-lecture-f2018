const INC_ID = 'INC_ID'

export const incId = () => {
  return { type: INC_ID }
}

export default (state = 0, action) => {
  switch(action.type) {
    case INC_ID:
      return state + 1
    default:
      return state
  }
}


const initState = {
  boards: []
}

const rootReducer = (state = initState, action) => {
  console.log('state', state)
  return state;
}

export default rootReducer
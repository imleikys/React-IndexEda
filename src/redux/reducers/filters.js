const initialState = {
  filter: 'default',
}

export const FilterReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_FILTER": {
      return {...state, filter: action.payload}
    }

    default: {
      return state;
    }
  }
}
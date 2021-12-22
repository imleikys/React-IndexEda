const initialState = {
  filterType: 'type',
  filter: '',
}

export const FilterReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_FILTER_TYPE": {
      return {...state, filterType: action.filterType, filter: action.filter}
    }

    default: {
      return state;
    }
  }
}

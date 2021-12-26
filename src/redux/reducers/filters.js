const initialState = {
  filterType: 'type',
  filter: '',
  nameFilter: '',
}

export const FilterReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_FILTER_TYPE": {
      return {...state, filterType: action.filterType, filter: action.filter}
    }

    case "SET_NAME_FILTER" : {
      return {...state, nameFilter: action.payload}
    }

    case "CLEAR_FILTERS": {
      return {
        ...state,
        filterType: 'type',
        filter: '',
        nameFilter: '',
      }
    }

    default: {
      return state;
    }
  }
}

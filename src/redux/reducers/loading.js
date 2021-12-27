const initialState = {
  isLoading: true,
}

export const LoadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_IS_LOADING": {
      return {isLoading: action.payload};
    }

    default: return {...state};
  }
}


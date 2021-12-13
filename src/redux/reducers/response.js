const initialState = {
  foodCards: [],
  promo: [],
  delivery: [],
  benefits: [],
}

export const ResponseReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_FOODCARDS": {
      return {...state, foodCards: action.payload};
    }

    case "SET_PROMO": {
      return {...state, promo: action.payload};
    }

    case "SET_DELIVERY": {
      return {...state, delivery: action.payload}
    }

    case "SET_BENEFITS": {
      return {...state, benefits: action.payload}
    }

    default: 
      return state;
  }
}
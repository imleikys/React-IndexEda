const initialState = {
  items: {},
  totalItems: 0,
}

export const CartReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_ITEM_TO_CART": {
      const actualItems = {...state.items, [action.payload.id]: {items: action.payload}};
      const actualTotal = Object.keys(actualItems).length;
      
      return {...state, items: actualItems, totalItems: actualTotal};
    }

    case "REMOVE_ITEM_FROM_CART": {
      const actualItems = {...state.items};
      delete actualItems[action.payload];

      const actualTotal = Object.keys(actualItems).length;

      return {...state, items: actualItems, totalItems: actualTotal};
    }
    default: 
      return state;
  }
}

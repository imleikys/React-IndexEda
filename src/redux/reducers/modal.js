const initialState = {
  modalItems: {},
  totalPrice: 0,
}

export const ModalReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_ITEMS_FOR_MODAL": {
      const totalPrice = action.payload.reduce((sum, item) => Number(item.price) + sum, 0);
      
      return {...state, modalItems: action.payload, totalPrice: totalPrice};
    }

    case "CLEAR_MODAL": {
      return {...state, modalItems: {}, totalPrice: {}};
    }
    default: 
      return state;
  }
}

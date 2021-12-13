
export const setItemsForModal = (items, filter) => {
  const itemsForCart = items.filter((item) => item.type === filter);

  return ({
    type: "SET_ITEMS_FOR_MODAL",
    payload: itemsForCart,
  });
}

export const clearModal = () => ({
  type: "CLEAR_MODAL",
})
